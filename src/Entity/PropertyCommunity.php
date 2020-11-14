<?php

namespace App\Entity;

use App\Repository\PropertyCommunityRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PropertyCommunityRepository::class)
 */
class PropertyCommunity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $bathsMax;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $bathsMin;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $bedsMax;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $bedsMin;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $communityId;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $communityName;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $priceMax;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $priceMin;

    /**
     * @ORM\OneToOne(targetEntity=Property::class, inversedBy="propertyCommunity", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $Property;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBathsMax(): ?int
    {
        return $this->bathsMax;
    }

    public function setBathsMax(int $bathsMax): self
    {
        $this->bathsMax = $bathsMax;

        return $this;
    }

    public function getBathsMin(): ?int
    {
        return $this->bathsMin;
    }

    public function setBathsMin(?int $bathsMin): self
    {
        $this->bathsMin = $bathsMin;

        return $this;
    }

    public function getBedsMax(): ?int
    {
        return $this->bedsMax;
    }

    public function setBedsMax(?int $bedsMax): self
    {
        $this->bedsMax = $bedsMax;

        return $this;
    }

    public function getBedsMin(): ?int
    {
        return $this->bedsMin;
    }

    public function setBedsMin(?int $bedsMin): self
    {
        $this->bedsMin = $bedsMin;

        return $this;
    }

    public function getCommunityId(): ?int
    {
        return $this->communityId;
    }

    public function setCommunityId(?int $communityId): self
    {
        $this->communityId = $communityId;

        return $this;
    }

    public function getCommunityName(): ?string
    {
        return $this->communityName;
    }

    public function setCommunityName(?string $communityName): self
    {
        $this->communityName = $communityName;

        return $this;
    }

    public function getPriceMax(): ?float
    {
        return $this->priceMax;
    }

    public function setPriceMax(?float $priceMax): self
    {
        $this->priceMax = $priceMax;

        return $this;
    }

    public function getPriceMin(): ?float
    {
        return $this->priceMin;
    }

    public function setPriceMin(?float $priceMin): self
    {
        $this->priceMin = $priceMin;

        return $this;
    }

    public function getProperty(): ?Property
    {
        return $this->Property;
    }

    public function setProperty(Property $Property): self
    {
        $this->Property = $Property;

        return $this;
    }
}
