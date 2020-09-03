<?php

namespace App\Form;

use App\Entity\Property;
use App\Entity\PropertyAddress;
use App\Repository\PropertyAddressRepository;
use App\Repository\PropertyRepository;
use Doctrine\DBAL\Types\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType as TypeTextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PropertyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('listDate', DateType::class, [
                'label' => 'List Date',
                'widget' => 'single_text',
                'required' => false,
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('yearBuilt', DateType::class, [
                'label' => 'Year Built',
                'widget' => 'single_text',
                'required' => false,
                'attr' => [
                    'class' => 'form-control'
                ]

            ])
            ->add('propertyAddress', EntityType::class, [
                'class' => PropertyAddress::class,
                'query_builder' => function (PropertyAddressRepository $er) {
                    return $er->createQueryBuilder('pa')
                        ->innerJoin('pa.property', 'p')
                        ->select('DISTINCT pa ')

                        ->where('pa.neighborHoodName IS NOT NULL')
                        ->andWhere('p.listDate IS NOT NULL')
                        ->andWhere('p.yearBuilt IS NOT NULL')
                        ->having('SUM(p.id) > 0')
                        ->groupBy('pa.id');
                },
                'choice_label' => 'neighborHoodName',
                'placeholder' => 'Choose Address',
                'attr' => [
                    'class' => 'form-control'
                ],
                'choice_value' => function (?PropertyAddress $entity) {
                    return $entity ? $entity->getNeighborHoodName() : '';
                },

            ])

            ->add('submit', SubmitType::class, [
                'label' => 'Search',
                'attr' => [
                    'class' => 'btn btn-primary w-100 mt-3'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Property::class,
        ]);
    }
}
