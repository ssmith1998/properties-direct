<?php

namespace App\Form;

use App\Entity\Booking;
use App\Entity\PropertyAddress;
use App\Repository\PropertyAddressRepository;
use App\Repository\PropertyRepository;
use Doctrine\DBAL\Types\DateTimeType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Zend\Code\Reflection\PropertyReflection;

class BookingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ->add('propertyName', EntityType::class, [
            //     'label' => 'Property Name',
            //     'query_builder' => function (PropertyRepository $propertyRepository, $id) {
            //         return $propertyRepository->createQueryBuilder('p')
            //             ->innerJoin('p.propertyAddress', 'pa')
            //             ->select('pa.line')
            //             ->where('p.id = :Id')
            //             ->setParameter('Id', $id);
            //     },
            // ])
            ->add('dateOfViewing', DateType::class, [
                'label' => 'Viewing Date',
                'widget' => 'single_text',
                'attr' => [
                    'class' => 'form-control w-100'
                ]

            ])
            ->add('timeOfViewing', TimeType::class, [
                'label' => 'Viewing Time',
                'attr' => [
                    'class' => 'form-control w-100'
                ]

            ])

            ->add('submit', SubmitType::class, [
                'label' => 'Book',
                'attr' => [
                    'class' => 'btn btn-success w-100'
                ]
            ]);
        // ->add('property', EntityType::class, [
        //     'label' => 'Property',
        //     'query_builder' => function (PropertyRepository $propertyRepository, $id) {
        //         return $propertyRepository->createQueryBuilder('p')
        //             ->select('p.id')
        //             ->where('p.id = :Id')
        //             ->setParameter('Id', $id);
        //     },
        // ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Booking::class,
        ]);
    }
}
