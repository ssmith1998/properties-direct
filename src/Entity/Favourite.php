<?php

namespace App\Entity;

use App\Repository\FavouriteRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FavouriteRepository::class)
 */
class Favourite
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Property::class, inversedBy="favourites")
     */
    private $property;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="favourites")
     */
    private $user;

    /**
     * @ORM\Column(type="boolean")
     */
    private $favourited;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProperty(): ?Property
    {
        return $this->property;
    }

    public function setProperty(?Property $property): self
    {
        $this->property = $property;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getFavourited(): ?bool
    {
        return $this->favourited;
    }

    public function setFavourited(bool $favourited): self
    {
        $this->favourited = $favourited;

        return $this;
    }
}
