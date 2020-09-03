<?php

namespace App\Command;

use App\Entity\Property;
use App\Entity\PropertyAddress;
use App\Entity\PropertyCommunity;
use App\Entity\PropertyPhoto;
use App\Repository\PropertyRepository;
use Symfony\Component\Console\Output\ConsoleSectionOutput;
use DateTime;
use Symfony\Component\Console\Command\Command;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\ORM\EntityManagerInterface;


class ImportCommand extends Command
{

    /**
     * @var EntityManagerInterface
     */
    private $em;


    private $propertyRepo;


    // set name of command for use in console "php bin/console app:import"
    protected static $defaultName = 'app:import';



    public function __construct(EntityManagerInterface $em, PropertyRepository $propertyRepository)
    {
        parent::__construct();
        //Entity Manager
        $this->em = $em;
        // property repo used to insert property info
        $this->propertyRepo = $propertyRepository;
    }
    // function executes command
    protected function execute(InputInterface $input, OutputInterface $output)
    {



        // get properties from API using cURL
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://realtor.p.rapidapi.com/properties/v2/list-for-rent?sort=relevance&city=New%20York%20City&state_code=NY&limit=250&offset=0",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "x-rapidapi-host: realtor.p.rapidapi.com",
                "x-rapidapi-key: 81b4c0f1f7mshf5bed3bc95f067ep10c75djsnb52c651eb2a1"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {



            $data = json_decode($response, true);

            // dump($data['properties']);
            // die();

            // loop over data and insert
            $output->writeln([
                'Looping over property data...'

            ]);

            foreach ($data['properties'] as $propertyData) {

                // print_r($propertyData['address']);
                if (array_key_exists('year_built', $propertyData) && array_key_exists('list_date', $propertyData)) {


                    $property = (new Property())
                        ->setPropertyId($propertyData['property_id'])
                        ->setListingId($propertyData['listing_id'])
                        ->setPropertyType($propertyData['prop_type'])
                        ->setListDate(new \DateTime($propertyData['list_date']))
                        ->setLastUpdate(new \DateTime($propertyData['last_update']))
                        ->setYearBuilt(new \DateTime($propertyData['year_built']))
                        ->setListingStatus($propertyData['listing_status'])
                        ->setNoOfbeds($propertyData['beds'])
                        ->setWebsiteUrl($propertyData['rdc_web_url']);
                } else {
                    $property = (new Property())
                        ->setPropertyId($propertyData['property_id'])
                        ->setListingId($propertyData['listing_id'])
                        ->setPropertyType($propertyData['prop_type'])
                        ->setLastUpdate(new \DateTime($propertyData['last_update']))
                        ->setListingStatus($propertyData['listing_status'])
                        ->setNoOfbeds($propertyData['beds'])
                        ->setWebsiteUrl($propertyData['rdc_web_url']);
                }




                $output->writeln([
                    'Looping over PropertyAddress data...'

                ]);



                // dump($propertyData['address']);
                // die();

                if (array_key_exists('neighborhood_name', $propertyData['address']) && array_key_exists('county', $propertyData['address'])) {

                    $propertyAddress = (new PropertyAddress())

                        ->setCity($propertyData['address']['city'])
                        ->setCountry($propertyData['address']['country'])
                        ->setCounty($propertyData['address']['county'])
                        ->setLatitude($propertyData['address']['lat'])
                        ->setLine($propertyData['address']['line'])
                        ->setPostCode($propertyData['address']['postal_code'])
                        ->setStateCode($propertyData['address']['state_code'])
                        ->setState($propertyData['address']['state'])
                        ->setTimeZone($propertyData['address']['time_zone'])
                        ->setNeighborHoodName($propertyData['address']['neighborhood_name'] == null ? 'null' : $propertyData['address']['neighborhood_name'])
                        ->setLongitude($propertyData['address']['lon']);

                    $property->setPropertyAddress($propertyAddress);
                } else {
                    $propertyAddress = (new PropertyAddress())

                        ->setCity($propertyData['address']['city'])
                        ->setCountry($propertyData['address']['country'])
                        ->setLatitude($propertyData['address']['lat'])
                        ->setLine($propertyData['address']['line'])
                        ->setPostCode($propertyData['address']['postal_code'])
                        ->setStateCode($propertyData['address']['state_code'])
                        ->setState($propertyData['address']['state'])
                        ->setTimeZone($propertyData['address']['time_zone'])
                        ->setLongitude($propertyData['address']['lon']);

                    $property->setPropertyAddress($propertyAddress);
                }

                $output->writeln([
                    'Looping over PropertyCommunity data...'

                ]);

                // dump($propertyData['community']);
                // die();

                $propertyCommunity = (new PropertyCommunity())
                    ->setBathsMax($propertyData['community']['baths_max'])
                    ->setBathsMin($propertyData['community']['baths_min'])
                    ->setBedsMax($propertyData['community']['beds_max'])
                    ->setBedsMin($propertyData['community']['beds_min'])
                    ->setCommunityId($propertyData['community']['id'])
                    ->setCommunityName($propertyData['community']['name'])
                    ->setPriceMax($propertyData['community']['price_max'])
                    ->setPriceMin($propertyData['community']['price_min']);

                $property->setPropertyCommunity($propertyCommunity);


                $output->writeln([
                    'Looping over PropertyPhotos data...'

                ]);

                // dump($propertyData['photos']['href']);
                // die();


                foreach ($propertyData['photos'] as $propertyDataPhotos) {


                    $propertyPhoto = (new PropertyPhoto())
                        ->setPhotoLink($propertyDataPhotos['href']);

                    $property->addPropertyPhoto($propertyPhoto);
                }

                $this->propertyRepo->insert($property);
            }
        }










        return 0;
    }
}
