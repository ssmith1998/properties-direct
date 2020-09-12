<?php

namespace App\Controller;

use App\Entity\Booking;
use App\Entity\Property;
use App\Entity\PropertyAddress;
use App\Form\BookingType;
use App\Repository\BookingRepository;
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
}
