<?php

namespace App\Controller;

use App\Repository\BookingRepository;
use App\Repository\FavouriteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Request;
use Symfony\Component\Routing\Annotation\Route;


class AdminDashboardController extends AbstractController
{
    /**
     * @Route("/admin/dashboard", name="admin_dashboard")
     */
    public function index(BookingRepository $bookingRepository)
    {
        $bookings = $bookingRepository->findAll();

        // dd($favourites);


        return $this->render('admin_dashboard/index.html.twig', [

            'bookings' => $bookings
        ]);
    }
}
