<?php

namespace App\Controller;

use App\Entity\Property;
use App\Entity\PropertyAddress;
use App\Entity\PropertyCommunity;
use App\Form\FilterFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\QueryBuilder;
use App\Repository\PropertyAddressRepository;
use App\Repository\PropertyRepository;
use DateTime;
use Symfony\Component\HttpFoundation\Response;

class PropertySearchController extends AbstractController
{
    /**
     * @Route("/property/search", name="propertySearch")
     */
    public function index(Request $request, PropertyAddressRepository $repo)
    {
        $propertylistDate = $request->query->get('property')['listDate'];
        $propertyYearBuilt = $request->query->get('property')['yearBuilt'];
        $propertyAddress = $request->query->get('property')['propertyAddress'];

        $propertylistDateObject = new DateTime($request->query->get('property')['listDate']);
        $propertyYearBuiltObject = new DateTime($request->query->get('property')['yearBuilt']);
        // dd($propertylistDateObject);

        $submittedFilters = null;

        $submittedFilters = $request->query->get(('filter_form'));







        $form = $this->createForm(FilterFormType::class);

        $data = null;

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {


            $data = $form->getData();
        }

        $result = $repo->searchProp($propertyAddress, $propertyYearBuiltObject, $propertylistDateObject, $data['bathsMax'], $data['bedsMax'], $data['sort'], $data['priceMax']);




        return $this->render('property_search/index.html.twig', [
            'controller_name' => 'PropertySearchController',
            'result' => $result,
            'form' => $form->createView()

        ]);
    }

    /**
     * 
     * @Route("/property/search/all", name="propertySearchAll")
     *
     * @return Response
     */
    public function searchAllProperties(Request $request): Response
    {
        $propertyRepo = $this->getDoctrine()->getRepository(PropertyRepository::class);


        $properties =  $propertyRepo->findAll();


        return $this->render('property_search/index.html.twig', [
            'properties' => $properties,
            // 'form' => $form->createView()

        ]);
    }
}
