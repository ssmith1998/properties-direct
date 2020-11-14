<?php

namespace App\Entity;

use App\Repository\PropertyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $listDate;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $lastUpdate;

    /**
     * @ORM\Column(type="date", nullable=true)
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
     * @ORM\OneToOne(targetEntity=PropertyAddress::class, mappedBy="property", cascade={"persist"})
     */
    private $propertyAddress;

    /**
     * @ORM\OneToOne(targetEntity=PropertyCommunity::class, mappedBy="Property", cascade={"persist", "remove"})
     */
    private $propertyCommunity;

    /**
     * @ORM\OneToMany(targetEntity=PropertyPhoto::class, mappedBy="property", cascade={"persist"})
     */
    private $propertyPhotos;

    /**
     * @ORM\OneToMany(targetEntity=Booking::class, mappedBy="property")
     */
    private $bookings;

    /**
     * @ORM\OneToMany(targetEntity=Favourite::class, mappedBy="property")
     */
    private $favourites;

    public function __construct()
    {
        $this->propertyPhotos = new ArrayCollection();
        $this->bookings = new ArrayCollection();
        $this->favourites = new ArrayCollection();
    }

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

    public function getYearBuilt(): ?\DateTime
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

    public function getPropertyAddress(): ?PropertyAddress
    {
        return $this->propertyAddress;
    }

    public function setPropertyAddress(PropertyAddress $propertyAddress): self
    {
        $this->propertyAddress = $propertyAddress;

        // set the owning side of the relation if necessary
        if ($propertyAddress->getProperty() !== $this) {
            $propertyAddress->setProperty($this);
        }

        return $this;
    }

    public function getPropertyCommunity(): ?PropertyCommunity
    {
        return $this->propertyCommunity;
    }

    public function setPropertyCommunity(PropertyCommunity $propertyCommunity): self
    {
        $this->propertyCommunity = $propertyCommunity;

        // set the owning side of the relation if necessary
        if ($propertyCommunity->getProperty() !== $this) {
            $propertyCommunity->setProperty($this);
        }

        return $this;
    }

    /**
     * @return Collection|PropertyPhoto[]
     */
    public function getPropertyPhotos(): Collection
    {
        return $this->propertyPhotos;
    }

    public function getPropertyPhoto(): PropertyPhoto
    {
        return $this->propertyPhotos->first();
    }

    public function addPropertyPhoto(PropertyPhoto $propertyPhoto): self
    {
        if (!$this->propertyPhotos->contains($propertyPhoto)) {
            $this->propertyPhotos[] = $propertyPhoto;
            $propertyPhoto->setProperty($this);
        }

        return $this;
    }

    public function removePropertyPhoto(PropertyPhoto $propertyPhoto): self
    {
        if ($this->propertyPhotos->contains($propertyPhoto)) {
            $this->propertyPhotos->removeElement($propertyPhoto);
            // set the owning side to null (unless already changed)
            if ($propertyPhoto->getProperty() === $this) {
                $propertyPhoto->setProperty(null);
            }
        }

        return $this;
    }

    public function toString()
    {
        $date =  $this->yearBuilt;

        $date->format('Y-m-d H:i:s');
    }

    /**
     * @return Collection|Booking[]
     */
    public function getBookings(): Collection
    {
        return $this->bookings;
    }

    public function addBooking(Booking $booking): self
    {
        if (!$this->bookings->contains($booking)) {
            $this->bookings[] = $booking;
            $booking->setProperty($this);
        }

        return $this;
    }

    public function removeBooking(Booking $booking): self
    {
        if ($this->bookings->contains($booking)) {
            $this->bookings->removeElement($booking);
            // set the owning side to null (unless already changed)
            if ($booking->getProperty() === $this) {
                $booking->setProperty(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Favourite[]
     */
    public function getFavourites(): Collection
    {
        return $this->favourites;
    }

    public function addFavourite(Favourite $favourite): self
    {
        if (!$this->favourites->contains($favourite)) {
            $this->favourites[] = $favourite;
            $favourite->setProperty($this);
        }

        return $this;
    }

    public function removeFavourite(Favourite $favourite): self
    {
        if ($this->favourites->contains($favourite)) {
            $this->favourites->removeElement($favourite);
            // set the owning side to null (unless already changed)
            if ($favourite->getProperty() === $this) {
                $favourite->setProperty(null);
            }
        }

        return $this;
    }
}
