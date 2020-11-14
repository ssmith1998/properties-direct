<?php

namespace App\Controller;

use App\Entity\Booking;
use App\Entity\Favourite;
use App\Entity\Property;
use App\Entity\PropertyAddress;
use App\Form\BookingType;
use App\Repository\BookingRepository;
use App\Repository\FavouriteRepository;
use App\Repository\PropertyRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PropertyAccess\PropertyAccess;

class PropertyController extends AbstractController
{
    /**
     * @Route("/property/profile/{id}", name="property")
     */
    public function propertyProfile($id, Request $request)
    {
        $propertyAccessor = PropertyAccess::createPropertyAccessor();

        $propertyRepo = $this->getDoctrine()->getRepository(Property::class);

        $property = $propertyRepo->findOneBy(['id' => $id]);


        $booking = new Booking();

        $form = $this->createForm(BookingType::class, $booking);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // $form->getData() holds the submitted values
            // but, the original `$task` variable has also been updated

            $propertyAddress = $propertyAccessor->getValue($property, 'property_address');
            $bookingRepo = $this->getDoctrine()->getRepository(Booking::class);
            $booking = $form->getData();
            ($booking)
                ->setProperty($property)
                ->setPropertyName($propertyAccessor->getValue($propertyAddress, 'line'))
                ->setUser($this->getUser());




            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($booking);
            $entityManager->flush();

            $this->addFlash('success', 'Your Booking has been saved!');
        }

        return $this->render('property/index.html.twig', [
            'controller_name' => 'PropertyController',
            'property' => $property,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/property/favourite/{id}", name="propertyFavourite")
     */
    public function favouriteRecipe($id, PropertyRepository $propertyRepository, FavouriteRepository $favouriteRepository, EntityManagerInterface $entityManager, Request $request)
    {
        $currentUser = $this->getUser();
        $currentProperty = $propertyRepository->findBy(['id' => $id]);
        $favouriteRecord = $favouriteRepository->findBy(['property' => $id, 'user' => $currentUser->getId(), 'favourited' => true]);
        $noneFavouritedRecord = $favouriteRepository->findBy(['property' => $id, 'user' => $currentUser->getId(), 'favourited' => false]);

        $favourited = null;
        if ($favouriteRecord) {
            $favourited = true;
            $favouriteRecord[0]->setFavourited(false);
            $entityManager->flush();

            $this->addFlash('success', 'Removed from Favourites');
        } else if ($noneFavouritedRecord) {
            $favourited = false;
            $noneFavouritedRecord[0]->setFavourited(true);
            $entityManager->flush();
            $this->addFlash('success', 'Added from Favourites');
        } else {
            $favourited = true;
            $favourite = new Favourite();

            $favourite->setUser($currentUser);
            $favourite->setProperty($currentProperty[0]);
            $favourite->setFavourited(true);
            $entityManager->persist($favourite);
            $entityManager->flush();

            $this->addFlash('success', 'Added to Favourites');
        }

        return $this->redirectToRoute('property', ['id' => $currentProperty[0]->getId()]);
    }
}
