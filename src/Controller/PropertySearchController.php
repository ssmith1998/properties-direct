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
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Knp\Component\Pager\PaginatorInterface;


class PropertySearchController extends AbstractController
{
    /**
     * @Route("/property/{page}", name="propertySearch")
     */
    public function index(Request $request, PropertyAddressRepository $repo, $page = 1, PaginatorInterface $paginator)
    {
        $propertylistDate = $request->query->get('property')['listDate'];
        $propertyYearBuilt = $request->query->get('property')['yearBuilt'];
        $propertyAddress = $request->query->get('property')['propertyAddress'];
        $propertySearchQueryString = http_build_query((array)$request->query->get('property'));

        $propertylistDateObject = new DateTime($request->query->get('property')['listDate']);
        $propertyYearBuiltObject = new DateTime($request->query->get('property')['yearBuilt']);


        $submittedFilters = null;


        $submittedFilters = $request->query->get(('form'));


        // dd($propertySearchQueryString);


        $submittedFiltersString = null;
        if (!empty($submittedFilters)) {
            $submittedFiltersString = '' . $propertySearchQueryString . '?form%5BbathsMax%5D=' . $submittedFilters["bathsMax"] . '&form%5BbedsMax%5D=' . $submittedFilters["bedsMax"] . '&form%5Bsort%5D=' . $submittedFilters["sort"] . '&form%5BpriceMax%5D=' . $submittedFilters["priceMax"] . '&form%5Bsubmit%5D=&form%5B_token%5D=' . $submittedFilters["_token"] . '';
        }


        $form = $this->createForm(FilterFormType::class);
        $form2 = $this->createFormBuilder()
            ->setMethod('POST')
            ->add('bathsMax', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Baths Max',
                'choices' => [
                    '5' => 5,
                    '4' => 4,
                    '3' => 3,
                    '2' => 2,
                    '1' => 1,
                ],
                'attr' => [
                    'class' => 'form-control'
                ],

                // 'data' => $submittedFilters['bathsMax']

            ])

            ->add('bedsMax', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Beds Max',
                'choices' => [
                    '6' => 6,
                    '5' => 5,
                    '4' => 4,
                    '3' => 3,
                    '2' => 2,
                    '1' => 1,
                ],

                'attr' => [
                    'class' => 'form-control'
                ],

                // 'data' => $submittedFilters['bedsMax']
            ])
            ->add('sort', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Sort',
                'choices' => [
                    'Lowest - highest' => 'lowest',
                    'highest - lowest'  => 'highest'

                ],

                'attr' => [
                    'class' => 'form-control'
                ],

                // 'data' => $submittedFilters['sort']
            ])
            ->add('priceMax', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Price Max',
                "choices" => [
                    " Up to £2000" => 2000,
                    "Up to £5000" => 5000,
                    "Up to £10000" => 10000,
                ],
                'attr' => [
                    'class' => 'form-control w-100'
                ],

                // 'data' => $submittedFilters['priceMax']
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Filter',
                'attr' => [
                    'class' => 'btn btn-primary w-100'
                ]
            ])
            ->getForm();


        $data = null;

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {


            $data = $form->getData();
        }


        $form2->handleRequest($request);
        if ($form2->isSubmitted() && $form2->isValid()) {


            $data = $form2->getData();
        }


        $limit = 10;

        $offset = ($page - 1) * $limit;

        $result = $repo->searchProp($propertyAddress, $propertyYearBuiltObject, $propertylistDateObject, $data['bathsMax'], $data['bedsMax'], $data['sort'], $data['priceMax'], $offset);
        $count = $repo->searchPropCount($propertyAddress, $propertyYearBuiltObject, $propertylistDateObject, $data['bathsMax'], $data['bedsMax'], $data['sort'], $data['priceMax']);


        $pages = ceil($count / $limit);

        $start = $offset + 1;
        $end = min(($offset + $limit), $count);

        $pagination = $paginator->paginate(
            $result, /* query NOT result */
            $page/*page number*/,
            10/*limit per page*/

        );


        return $this->render('property_search/index.html.twig', [
            'controller_name' => 'PropertySearchController',
            'result' => $result,
            'form' => $form->createView(),
            'form2' => $form2->createView(),
            'page' => $page,
            'pages' => $pages,
            'start' => $start,
            'end' => $end,
            'propertiesCount' => $count,
            'filters' => $submittedFiltersString,
            'addresss' => $propertyAddress,
            'propertySearchQueryString' => $propertySearchQueryString,
            'pagination' => $pagination



        ]);
    }

    /**
     * 
     * @Route("/property/search/all/{page}", name="propertySearchAll")
     *
     * @return Response
     */
    public function searchAllProperties(Request $request, PropertyRepository $propertyRepository, $page = 1): Response
    {

        // get query params
        $submittedFilters = $request->query->get(('form'));

        // string for url pagination 
        $submittedFiltersString = null;

        // make sure string is only set if there are submitted filters are set
        if (!empty($submittedFilters)) {
            $submittedFiltersString = '?form%5BbathsMax%5D=' . $submittedFilters["bathsMax"] . '&form%5BbedsMax%5D=' . $submittedFilters["bedsMax"] . '&form%5Bsort%5D=' . $submittedFilters["sort"] . '&form%5BpriceMax%5D=' . $submittedFilters["priceMax"] . '&form%5Bsubmit%5D=&form%5B_token%5D=' . $submittedFilters["_token"] . '';
        }

        $form = $this->createFormBuilder()
            ->setMethod('GET')
            ->add('bathsMax', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Baths Max',
                'choices' => [
                    '5' => 5,
                    '4' => 4,
                    '3' => 3,
                    '2' => 2,
                    '1' => 1,
                ],
                'attr' => [
                    'class' => 'form-control'
                ],

                'data' => $submittedFilters['bathsMax']

            ])

            ->add('bedsMax', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Beds Max',
                'choices' => [
                    '6' => 6,
                    '5' => 5,
                    '4' => 4,
                    '3' => 3,
                    '2' => 2,
                    '1' => 1,
                ],

                'attr' => [
                    'class' => 'form-control'
                ],

                'data' => $submittedFilters['bedsMax']
            ])
            ->add('sort', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Sort',
                'choices' => [
                    'Lowest - highest' => 'lowest',
                    'highest - lowest'  => 'highest'

                ],

                'attr' => [
                    'class' => 'form-control'
                ],

                'data' => $submittedFilters['sort']
            ])
            ->add('priceMax', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Price Max',
                "choices" => [
                    " Up to £2000" => 2000,
                    "Up to £5000" => 5000,
                    "Up to £10000" => 10000,
                ],
                'attr' => [
                    'class' => 'form-control w-100'
                ],

                'data' => $submittedFilters['priceMax']
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Filter',
                'attr' => [
                    'class' => 'btn btn-primary w-100'
                ]
            ])
            ->getForm();

        $form2 = $this->createFormBuilder()
            ->setMethod('GET')
            ->add('bathsMax', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Baths Max',
                'choices' => [
                    '5' => 5,
                    '4' => 4,
                    '3' => 3,
                    '2' => 2,
                    '1' => 1,
                ],
                'attr' => [
                    'class' => 'form-control'
                ],

                'data' => $submittedFilters['bathsMax']

            ])

            ->add('bedsMax', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Beds Max',
                'choices' => [
                    '6' => 6,
                    '5' => 5,
                    '4' => 4,
                    '3' => 3,
                    '2' => 2,
                    '1' => 1,
                ],

                'attr' => [
                    'class' => 'form-control'
                ],

                'data' => $submittedFilters['bedsMax']
            ])
            ->add('sort', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Sort',
                'choices' => [
                    'Lowest - highest' => 'lowest',
                    'highest - lowest'  => 'highest'

                ],

                'attr' => [
                    'class' => 'form-control'
                ],

                'data' => $submittedFilters['sort']
            ])
            ->add('priceMax', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Price Max',
                "choices" => [
                    " Up to £2000" => 2000,
                    "Up to £5000" => 5000,
                    "Up to £10000" => 10000,
                ],
                'attr' => [
                    'class' => 'form-control w-100'
                ],

                'data' => $submittedFilters['priceMax']
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Filter',
                'attr' => [
                    'class' => 'btn btn-primary w-100'
                ]
            ])
            ->getForm();



        $limit = 10;

        $offset = ($page - 1)  * $limit;

        $properties = $propertyRepository->findAllProperties($submittedFilters['bathsMax'], $submittedFilters['bedsMax'], $submittedFilters['sort'], $submittedFilters['priceMax'], $offset);
        $propertiesCount = $propertyRepository->countAllProperties($submittedFilters['bathsMax'], $submittedFilters['bedsMax'], $submittedFilters['sort'], $submittedFilters['priceMax']);


        $pages = ceil($propertiesCount / $limit);

        $start = $offset + 1;
        $end = min(($offset + $limit), $propertiesCount);



        return $this->render('property_search/search-all.html.twig', [
            'properties' => $properties,
            'form' => $form->createView(),
            'form2' => $form2->createView(),
            'page' => $page,
            'pages' => $pages,
            'start' => $start,
            'end' => $end,
            'propertiesCount' => $propertiesCount,
            'filters' => $submittedFiltersString,



        ]);
    }
}
