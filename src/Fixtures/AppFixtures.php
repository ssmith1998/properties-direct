<?php

namespace App\Fixtures;

use App\Entity\AdminUser;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    public function load(ObjectManager $manager)
    {


        $adminUser = new AdminUser();
        $adminUser->setUsername('admin');
        $plainPassword = '123456';
        $encoded = $this->encoder->encodePassword($adminUser, $plainPassword);
        $adminUser->setPassword($encoded);
        $adminUser->setRoles(['ADMIN_USER']);
        $manager->persist($adminUser);
        $manager->flush();
    }
}
