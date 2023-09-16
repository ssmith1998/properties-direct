<?php

namespace App\Controller;

use App\Entity\AdminUser;
use App\Entity\Booking;
use App\Entity\User;
use App\Form\AdminUserType;
use App\Form\UpdateBookingType;
use App\Repository\AdminUserRepository;
use App\Repository\BookingRepository;
use App\Repository\FavouriteRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use ProxyManager\ProxyGenerator\ValueHolder\MethodGenerator\Constructor;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class AdminDashboardController extends AbstractController
{

    private $em;

    private $encoder;


    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $encoder)
    {
        $this->em = $entityManager;
        $this->encoder = $encoder;
    }


    /**
     * @Route("/admin/dashboard", name="admin_dashboard")
     */
    public function index(BookingRepository $bookingRepository, UserRepository $userRepository, AdminUserRepository $adminUserRepository)
    {
        // get all bookings
        $bookings = $bookingRepository->findAll();


        // get all users
        $users =  $userRepository->findAll();


        // get all admin users
        $adminUsers = $adminUserRepository->findAll();



        // dd($favourites);


        return $this->render('admin_dashboard/index.html.twig', [

            'bookings' => $bookings,
            'users' => $users,
            'adminUsers' => $adminUsers
        ]);
    }

    /**
     * @Route("/admin/delete/adminuser/{id}", name="deleteAdmin")
     */
    public function deleteAdminUser($id, AdminUserRepository $adminUserRepository, EntityManagerInterface $entityManager)
    {

        $adminUser = $this->em->getRepository(AdminUser::class)->findOneBy(['id' => $id]);

        $this->em->remove($adminUser);
        $this->em->flush();




        $this->addFlash(
            'success',
            'Deleted ' . $adminUser->getUsername() . ' !'
        );
        // $this->addFlash() is equivalent to $request->getSession()->getFlashBag()->add()

        return $this->redirectToRoute('admin_dashboard');
    }


    /**
     * @Route("/admin/delete/user/{id}", name="deleteUser")
     */
    public function deleteUser($id)
    {

        $user = $this->em->getRepository(User::class)->findOneBy(['id' => $id]);




        $this->em->remove($user);
        $this->em->flush();




        $this->addFlash(
            'success',
            'Deleted ' . $user->getUsername() . ' !'
        );
        // $this->addFlash() is equivalent to $request->getSession()->getFlashBag()->add()

        return $this->redirectToRoute('admin_dashboard');
    }

    /**
     * @Route("/admin/delete/booking/{id}", name="deleteBooking")
     */
    public function deleteBooking($id)
    {

        $booking = $this->em->getRepository(Booking::class)->findOneBy(['id' => $id]);




        $this->em->remove($booking);
        $this->em->flush();




        $this->addFlash(
            'success',
            'Deleted Booking succesfully !'
        );
        // $this->addFlash() is equivalent to $request->getSession()->getFlashBag()->add()

        return $this->redirectToRoute('admin_dashboard');
    }

    /**
     * @Route("/admin/edit/booking/{id}", name="updateBoking")
     */
    public function updateBooking($id, Request $request)
    {

        $booking = $this->em->getRepository(Booking::class)->findOneBy(['id' => $id]);

        $form = $this->createForm(UpdateBookingType::class, $booking);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $property = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();

            $this->addFlash(
                'success',
                ' Updated Booking Succesfully '
            );

            return $this->redirectToRoute('admin_dashboard');
        }




        return $this->render('admin_booking/booking-update.html.twig', [
            'form' => $form->createView()

        ]);
    }

    /** 
     * @Route("/admin/add/adminuser", name="addAdminUser")
     */
    public function addAdminUser(Request $request)
    {

        $adminUser = new AdminUser();
        $form = $form = $this->createForm(AdminUserType::class, $adminUser);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $adminUserData = $form->getData();
            $pass = $adminUserData->getPassword();
            $username = $adminUserData->getUsername();

            $encoded = $this->encoder->hashPassword($adminUser, $pass);

            $adminUser->setPassword($encoded);
            $adminUser->setUsername($username);

            $this->em->persist($adminUser);
            $this->em->flush();


            return $this->redirectToRoute('admin_dashboard');
        }

        return $this->render('admin_add_adminUser/add-adminUser.html.twig', [
            'form' => $form->createView()

        ]);
    }
}
