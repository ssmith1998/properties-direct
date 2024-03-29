<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use \Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index(MailerInterface $mailer, Request $request)
    {

        $form = $this->createFormBuilder()
            ->add('fullName', TextType::class, [
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('email', EmailType::class, [
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('message', TextareaType::class, [
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('send', SubmitType::class, [
                'label' => 'Send',
                'attr' => [
                    'class' => 'btn btn-primary w-75'
                ]

            ])
            ->getForm();


        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            // send email
            $message = (new Email())
                ->subject('Contact Form Enquiry')
                ->from($data['email'])
                ->to('smith.sean1998@gmail.com')
                ->html(
                    $this->renderView(
                        'emails/contact.html.twig',
                        [
                            'name' => $data['fullName'],
                            'email' => $data['email'],
                            'message' => $data['message']

                        ]
                    ),
                    'text/html'
                );

            $mailer->send($message);

            $this->addFlash(
                'notice',
                'Your Message has been sent!'
            );
        }





        return $this->render('contact/index.html.twig', [
            'controller_name' => 'Contact Us',
            'form' => $form->createView()
        ]);
    }
}
