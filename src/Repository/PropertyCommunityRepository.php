<?php

namespace App\Repository;

use App\Entity\PropertyCommunity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PropertyCommunity|null find($id, $lockMode = null, $lockVersion = null)
 * @method PropertyCommunity|null findOneBy(array $criteria, array $orderBy = null)
 * @method PropertyCommunity[]    findAll()
 * @method PropertyCommunity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PropertyCommunityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PropertyCommunity::class);
    }

    // /**
    //  * @return PropertyCommunity[] Returns an array of PropertyCommunity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PropertyCommunity
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
