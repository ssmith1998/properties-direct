<?php

namespace App\Entity;

use App\Repository\BookingRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BookingRepository::class)
 */
class Booking
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Property::class, inversedBy="bookings")
     */
    private $property;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $propertyName;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateOfViewing;

    /**
     * @ORM\Column(type="time")
     */
    private $timeOfViewing;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="booking")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;



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



    public function getPropertyName(): ?string
    {
        return $this->propertyName;
    }

    public function setPropertyName(string $propertyName): self
    {
        $this->propertyName = $propertyName;

        return $this;
    }

    public function getDateOfViewing(): ?\DateTimeInterface
    {
        return $this->dateOfViewing;
    }

    public function setDateOfViewing(\DateTimeInterface $dateOfViewing): self
    {
        $this->dateOfViewing = $dateOfViewing;

        return $this;
    }

    public function getTimeOfViewing(): ?\DateTimeInterface
    {
        return $this->timeOfViewing;
    }

    public function setTimeOfViewing(\DateTimeInterface $timeOfViewing): self
    {
        $this->timeOfViewing = $timeOfViewing;

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
}
