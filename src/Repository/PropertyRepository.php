<?php

namespace App\Repository;

use App\Entity\Property;
use App\Entity\PropertyAddress;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\DBAL\Query\QueryBuilder;
use Doctrine\Migrations\Query\Query;
use Doctrine\ORM\QueryBuilder as ORMQueryBuilder;
use Doctrine\Persistence\ManagerRegistry;



/**
 * @method Property|null find($id, $lockMode = null, $lockVersion = null)
 * @method Property|null findOneBy(array $criteria, array $orderBy = null)
 * @method Property[]    findAll()
 * @method Property[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PropertyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Property::class);
    }




    public function insert(Property $property)
    {


        $this->getEntityManager()->persist($property);
        $this->getEntityManager()->flush();
    }


    public function findAllProperties($bathsMax, $bedsMax, $sort, $priceMax, $offset)
    {
        $qb = $this->createQueryBuilder('p');

        $qb->select('p')
            ->leftJoin('p.propertyCommunity', 'pc')
            ->innerJoin('p.propertyAddress', 'pa')
            ->innerJoin('p.propertyPhotos', 'ph')
            ->groupBy('p.id');





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
        $qb->setMaxResults(10)
            ->setFirstResult($offset);

        $result =  $qb->getQuery()->getResult();

        // dd($result);
        return $result;
    }

    public function countAllProperties($bathsMax, $bedsMax, $sort, $priceMax)
    {
        $qb = $this->createQueryBuilder('p');

        $qb->select('p')
            ->leftJoin('p.propertyCommunity', 'pc')
            ->innerJoin('p.propertyAddress', 'pa')
            ->innerJoin('p.propertyPhotos', 'ph')
            ->groupBy('p.id');








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


        // dd(count($qb->getQuery()->getScalarResult()));

        return count($qb->getQuery()->getScalarResult());
    }
}
