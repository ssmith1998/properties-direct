<?php

namespace App\Form;

use App\Entity\Booking;
use App\Entity\Property;
use App\Entity\PropertyAddress;
use App\Repository\BookingRepository;
use App\Repository\PropertyAddressRepository;
use App\Repository\PropertyRepository;
use Doctrine\DBAL\Types\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType as TypeTextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UpdateBookingType extends AbstractType
{

    private $propertyAddressRepository;

    public function __construct(PropertyAddressRepository $propertyAddressRepository)
    {
        $this->propertyAddressRepository = $propertyAddressRepository;
    }
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ->add('propertyName', TypeTextType::class, [
            //     'label' => "Property",
            //     "attr" => [
            //         'class' => 'form-control'
            //     ]
            // ])
            ->add('dateOfViewing', DateType::class, [
                'label' => "Date",
                "attr" => [
                    'class' => 'form-control'
                ]
            ])
            ->add('timeOfViewing', TimeType::class, [
                'label' => "Time",
                "attr" => [
                    'class' => 'form-control'
                ]
            ])
            ->add('property', EntityType::class, [
                'label' => "Property",
                "attr" => [
                    'class' => 'form-control'
                ],
                "class" => Property::class,
                'choice_label' => function ($property) {
                    return $property->getPropertyAddress()->getLine();
                }


            ])

            ->add('update', SubmitType::class, [
                'label' => "Update",
                "attr" => [
                    'class' => 'btn btn-primary w-75'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Booking::class,
        ]);
    }
}
