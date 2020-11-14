<?php

namespace App\Entity;

use App\Repository\PropertyPhotoRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PropertyPhotoRepository::class)
 */
class PropertyPhoto
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photoLink;

    /**
     * @ORM\ManyToOne(targetEntity=Property::class, inversedBy="propertyPhotos", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $property;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPhotoLink(): ?string
    {
        return $this->photoLink;
    }

    public function setPhotoLink(?string $photoLink): self
    {
        $this->photoLink = $photoLink;

        return $this;
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
}
