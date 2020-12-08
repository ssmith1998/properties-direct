<?php

namespace App\Repository;

use App\Entity\PropertyAddress;
use App\Entity\PropertyPhoto;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query;


/**
 * @method PropertyAddress|null find($id, $lockMode = null, $lockVersion = null)
 * @method PropertyAddress|null findOneBy(array $criteria, array $orderBy = null)
 * @method PropertyAddress[]    findAll()
 * @method PropertyAddress[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PropertyAddressRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PropertyAddress::class);
    }


    public function searchProp($propertyAddress, $bathsMaxSearch, $bedsMaxSearch, $bathsMax, $bedsMax, $sort, $priceMax, $offset)
    {


//        dd($bathsMaxSearch);
        $qb = $this->createQueryBuilder('pa')
            ->select('p, pa, PropertyPhotos')
            ->addSelect('p.propertyType AS PropertyType')
            ->addSelect('p.listingStatus AS ListingStatus')
            ->addSelect('PropertyPhotos.photoLink AS Link')
            ->innerJoin('pa.property', 'p')
            ->leftJoin('p.propertyCommunity', 'pc')
            ->leftJoin('p.propertyPhotos', 'PropertyPhotos')
            ->where("pa.neighborHoodName = :propertyAddress")
            ->setParameter('propertyAddress', $propertyAddress);

        if ($bathsMaxSearch ==! "") {
            $qb
                ->andWhere('pc.bathsMax <= :bathsMax')
                ->setParameter('bathsMax', (int)$bathsMaxSearch);

        }

        if ($bedsMaxSearch ==! "") {
            $qb
                ->andWhere('pc.bedsMax <= :bedsMax')
                ->setParameter('bedsMax', (int)$bedsMaxSearch);
        }


        // ->groupBy('p.id, PropertyPhotos');

        // ->innerJoin('p.propertyPhotos', 'ph')


        // filters


        if (!empty($bathsMax)) {
            $qb->andWhere('pc.bathsMax <= :bathsMax')
                ->setParameter('bathsMax', $bathsMax);
        }


        if (!empty($bedsMax)) {

            $qb->andWhere('pc.bedsMax <= :bedsMax')
                ->setParameter('bedsMax', $bedsMax);
        }

        if (!empty($sort) && $sort == "lowest") {
            $qb->orderBy('pc.priceMax', 'ASC');
        }

        if (!empty($sort) && $sort == "highest") {
            $qb->orderBy('pc.priceMax', 'DESC');
        }

        if (!empty($priceMax)) {
            $qb->andWhere('pc.priceMax <= :priceMax')
                ->setParameter('priceMax', $priceMax);
        }

        // filters end


//        dd($qb->getQuery()->getResult());


        // $result =  $qb->getQuery()->getResult();

        // dd($result);
        return $qb;
    }


    public function searchPropCount($propertyAddress, $bathsMaxSearch, $bedsMaxSearch, $bathsMax, $bedsMax, $sort, $priceMax)
    {


        $qb = $this->createQueryBuilder('pa')
            ->select('p, pa, PropertyPhotos')
            ->addSelect('p.propertyType AS PropertyType')
            ->addSelect('p.listingStatus AS ListingStatus')
            ->addSelect('PropertyPhotos.photoLink AS Link')
            ->innerJoin('pa.property', 'p')
            ->leftJoin('p.propertyCommunity', 'pc')
            ->leftJoin('p.propertyPhotos', 'PropertyPhotos')
            ->where("pa.neighborHoodName = :propertyAddress")
            ->setParameter('propertyAddress', $propertyAddress);
             if ($bathsMaxSearch ==! "") {
                 $qb
                     ->andWhere('pc.bathsMax <= :bathsMax')
                     ->setParameter('bathsMax', (int)$bathsMaxSearch);

             }

        if ($bedsMaxSearch ==! "") {
            $qb
                ->andWhere('pc.bedsMax <= :bedsMax')
                ->setParameter('bedsMax', (int)$bedsMaxSearch);
        }
        $qb
            ->groupBy('p.id, PropertyPhotos');

        // ->innerJoin('p.propertyPhotos', 'ph')


        // filters


        if (!empty($bathsMax)) {
            $qb->andWhere('pc.bathsMax <= :bathsMax')
                ->setParameter('bathsMax', $bathsMax);
        }


        if (!empty($bedsMax)) {

            $qb->andWhere('pc.bedsMax <= :bedsMax')
                ->setParameter('bedsMax', $bedsMax);
        }

        if (!empty($sort) && $sort == "lowest") {
            $qb->orderBy('pc.priceMax', 'ASC');
        }

        if (!empty($sort) && $sort == "highest") {
            $qb->orderBy('pc.priceMax', 'DESC');
        }

        if (!empty($priceMax)) {
            $qb->andWhere('pc.priceMax <= :priceMax')
                ->setParameter('priceMax', $priceMax);
        }

        // filters end


        $result = count($qb->getQuery()->getResult());

        // dd($result);
        return $result;
    }
}
