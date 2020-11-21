<?php

namespace App\Controller;

use App\Repository\FavouriteRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Request;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    /**
     * @Route("/dashboard", name="dashboard")
     */
    public function index(FavouriteRepository $favouriteRepository)
    {




        if (!$this->isGranted("IS_AUTHENTICATED_FULLY")) {
            return $this->redirectToRoute("app_login");
        }

        $currentUser = $this->getUser()->getId();

        $favourites = $favouriteRepository->findBy(['favourited' => true, 'user' => $currentUser]);

        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'DashboardController',
            'favourites' => $favourites
        ]);
    }
    /**
     * @Route("/property/favourite/delete/{id}", name="deleteFavourite")
     * @return void
     */
    public function deleteFavourites(FavouriteRepository $favouriteRepository, EntityManagerInterface $entityManagerInterface, $id)
    {
        $currentFavourite = $favouriteRepository->findOneBy(['id' => $id]);

        $currentFavourite->setFavourited(false);

        $entityManagerInterface->flush();

        $this->addFlash(
            'success',
            'Deleted Favourite succesfully'
        );

        return $this->redirectToRoute('dashboard');
    }
}
