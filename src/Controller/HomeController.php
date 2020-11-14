<?php

namespace App\Controller;

use App\Entity\Property;
use App\Form\PropertyType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(Request $request)
    {



        $property = new Property();

        $form = $this->createForm(PropertyType::class, $property, [
            'action' => $this->generateUrl('propertySearch'),
            'method' => 'GET',
        ]);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $property = $form->getData();
        }

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'form' => $form->createView(),
        ]);
    }
}
