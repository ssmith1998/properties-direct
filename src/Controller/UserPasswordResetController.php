<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserPasswordResetController extends AbstractController
{

    private $userRepo;

    private $mailer;

    private $encoder;

    private $em;

    public function __construct(UserRepository $userRepository, MailerInterface $mailer, UserPasswordHasherInterface $encoder, EntityManagerInterface $em)
    {
        $this->userRepo = $userRepository;
        $this->mailer = $mailer;
        $this->encoder = $encoder;
        $this->em = $em;
    }


    /**
     * @Route("/password/reset", name="user_password_reset")
     */
    public function index(Request $request)
    {



        $form = $this->createFormBuilder()
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'attr' => [
                    'class' => 'form-control'
                ]
            ])

            ->add('userid', HiddenType::class, [

                "data" => $this->getUser()->getId()
            ])
            ->add('request', SubmitType::class, [
                'label' => 'Request',
                'attr' => [
                    'class' => 'btn btn-primary w-75'
                ]

            ])
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $formData = $form->getData();

            if ($emailMatch = $this->userRepo->findOneBy(['id' => $formData['userid'], 'email' => $formData['email']])) {
                $user = new User();
                $tokenPlain = $this->getUser()->getId();
                // Store the cipher method 
                $ciphering = "AES-128-CTR";

                // Use OpenSSl Encryption method 
                $iv_length = openssl_cipher_iv_length($ciphering);
                $options = 0;

                // Non-NULL Initialization Vector for encryption 
                $encryption_iv = '1234567891011121';

                // Store the encryption key 
                $encryption_key = "GeeksforGeeks";

                // Use openssl_encrypt() function to encrypt the data 
                $encryption = openssl_encrypt(
                    $tokenPlain,
                    $ciphering,
                    $encryption_key,
                    $options,
                    $encryption_iv
                );

                $cookie_name = "passwordToken";
                $cookie_value = $encryption;
                setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day


                $message = (new Email())
                    ->subject('Password Reset')
                    ->from('smith.sean1998@gmail.com')
                    ->to($formData['email'])
                    ->html(
                        $this->renderView(
                            'emails/password-reset.html.twig',
                            [
                                'name' => $emailMatch->getUsername(),
                                'email' => $emailMatch->getEmail(),
                                'id' => $encryption


                            ]
                        ),
                        'text/html'
                    );



                $this->mailer->send($message);

                $this->addFlash('success', 'Please follow the instructions sent to the email address provided. ');
                return $this->redirectToRoute('dashboard');
            } else {
                $this->addFlash('notice', 'The email provided does not match any of our records, please try again.');

                return $this->redirectToRoute('user_password_reset');
            }
        }


        return $this->render('user_password_reset/index.html.twig', [
            'controller_name' => 'UserPasswordResetController',
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/password/reset/{id}", name="user_password_reset_confirm")
     */
    public function passwordResetConfirmation($id, Request $request)
    {


        if (isset($_COOKIE['passwordToken'])) {




            // Store the cipher method 
            $ciphering = "AES-128-CTR";

            // Use OpenSSl Encryption method 
            $iv_length = openssl_cipher_iv_length($ciphering);
            $options = 0;

            // Non-NULL Initialization Vector for decryption 
            $decryption_iv = '1234567891011121';

            // Store the decryption key 
            $decryption_key = "GeeksforGeeks";


            // Use openssl_decrypt() function to decrypt the data 
            $decryption = openssl_decrypt(
                $_COOKIE['passwordToken'],
                $ciphering,
                $decryption_key,
                $options,
                $decryption_iv
            );






            $form = $this->createFormBuilder()
                ->add('password', PasswordType::class, [
                    'label' => 'New Password',
                    'attr' => [
                        'class' => 'form-control pass passwordConfirm'
                    ]
                ])

                ->add('confirmPass', PasswordType::class, [
                    'label' => "Confirm New Password",
                    'attr' => [
                        'class' => 'form-control confirmPass passwordConfirm',

                    ]
                ])
                ->add('save', SubmitType::class, [
                    'label' => 'Save',
                    'attr' => [
                        'class' => 'btn btn-primary w-75'
                    ]

                ])
                ->getForm();


            $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) {

                $user = $this->userRepo->findOneBy(['id' => (int)$decryption]);


                $formData = $form->getData();

                $newPass = $this->encoder->hashPassword($user, $formData['password']);


                $user->setPassword($newPass);

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->flush();

                $this->addFlash('success', 'Password Updated Successfully');

                if (isset($_COOKIE['passwordToken'])) {
                    setcookie("passwordToken", "", time() - 3600, "/");
                }

                return $this->redirectToRoute('dashboard');
            }


            return $this->render('user_password_reset/password-reset-confirm.html.twig', [
                'controller_name' => 'UserPasswordResetController',
                'form' => $form->createView()
            ]);
        } else {
            return $this->redirectToRoute('home');
        }
    }
}
