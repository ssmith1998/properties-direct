<?php

namespace App\Controller;

use App\Entity\Property;
use App\Entity\PropertyAddress;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\QueryBuilder;
use App\Repository\PropertyAddressRepository;
use DateTime;

class PropertySearchController extends AbstractController
{
    /**
     * @Route("/property/search", name="propertySearch")
     */
    public function index(Request $request, PropertyAddressRepository $repo)
    {;
        $propertylistDate = $request->query->get('property')['listDate'];
        $propertyYearBuilt = $request->query->get('property')['yearBuilt'];
        $propertyAddress = $request->query->get('property')['propertyAddress'];

        $propertylistDateObject = new DateTime($request->query->get('property')['listDate']);
        $propertyYearBuiltObject = new DateTime($request->query->get('property')['yearBuilt']);
        // dd($propertylistDateObject);

        $result = $repo->searchProp($propertyAddress, $propertyYearBuiltObject, $propertylistDateObject);



        return $this->render('property_search/index.html.twig', [
            'controller_name' => 'PropertySearchController',
            'result' => $result

        ]);
    }
}
