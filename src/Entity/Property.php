<?php

namespace App\Entity;

use App\Repository\PropertyRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PropertyRepository::class)
 */
class Property
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $propertyId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $listingId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $propertyType;

    /**
     * @ORM\Column(type="datetime")
     */
    private $listDate;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $lastUpdate;

    /**
     * @ORM\Column(type="date")
     */
    private $yearBuilt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $listingStatus;

    /**
     * @ORM\Column(type="integer")
     */
    private $noOfbeds;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $websiteUrl;

    /**
     * @return integer|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }


    /**
     * @return string|null
     */
    public function getPropertyId(): ?string
    {
        return $this->propertyId;
    }

    public function setPropertyId(string $propertyId): self
    {
        $this->propertyId = $propertyId;

        return $this;
    }

    public function getListingId(): ?string
    {
        return $this->listingId;
    }

    public function setListingId(string $listingId): self
    {
        $this->listingId = $listingId;

        return $this;
    }

    public function getPropertyType(): ?string
    {
        return $this->propertyType;
    }

    public function setPropertyType(string $propertyType): self
    {
        $this->propertyType = $propertyType;

        return $this;
    }

    public function getListDate(): ?\DateTimeInterface
    {
        return $this->listDate;
    }

    public function setListDate(\DateTimeInterface $listDate): self
    {
        $this->listDate = $listDate;

        return $this;
    }

    public function getLastUpdate(): ?\DateTimeInterface
    {
        return $this->lastUpdate;
    }

    public function setLastUpdate(\DateTimeInterface $lastUpdate): self
    {
        $this->lastUpdate = $lastUpdate;

        return $this;
    }

    public function getYearBuilt(): ?\DateTimeInterface
    {
        return $this->yearBuilt;
    }

    public function setYearBuilt(\DateTimeInterface $yearBuilt): self
    {
        $this->yearBuilt = $yearBuilt;

        return $this;
    }

    public function getListingStatus(): ?string
    {
        return $this->listingStatus;
    }

    public function setListingStatus(string $listingStatus): self
    {
        $this->listingStatus = $listingStatus;

        return $this;
    }

    public function getNoOfbeds(): ?int
    {
        return $this->noOfbeds;
    }

    public function setNoOfbeds(int $noOfbeds): self
    {
        $this->noOfbeds = $noOfbeds;

        return $this;
    }

    public function getWebsiteUrl(): ?string
    {
        return $this->websiteUrl;
    }

    public function setWebsiteUrl(?string $websiteUrl): self
    {
        $this->websiteUrl = $websiteUrl;

        return $this;
    }
}
