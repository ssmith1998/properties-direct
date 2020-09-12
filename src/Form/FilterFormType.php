<?php

namespace App\Form;

use App\Entity\PropertyCommunity;
use App\Repository\PropertyCommunityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Choice;

class FilterFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
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
                ]

            ])
            ->add('bathsMin', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Select Baths Min',
                'choices' => [
                    '2' => 2,
                    '1' => 1,
                ],
                'attr' => [
                    'class' => 'form-control'
                ]
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
                ]
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
                ]
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
                ]
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Filter',
                'attr' => [
                    'class' => 'btn btn-primary w-100'
                ]
            ]);
    }
}
