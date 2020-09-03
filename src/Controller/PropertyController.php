<?php

namespace App\Controller;

use App\Entity\Property;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PropertyController extends AbstractController
{
    /**
     * @Route("/property/profile/{id}", name="property")
     */
    public function propertyProfile($id)
    {

        $propertyRepo = $this->getDoctrine()->getRepository(Property::class);

        $property = $propertyRepo->findOneBy(['id' => $id]);



        return $this->render('property/index.html.twig', [
            'controller_name' => 'PropertyController',
            'property' => $property
        ]);
    }
}
