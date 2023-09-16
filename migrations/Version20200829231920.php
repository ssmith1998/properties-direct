<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200829231920 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        // $this->addSql('CREATE TABLE property (id INT AUTO_INCREMENT NOT NULL, property_id VARCHAR(255) NOT NULL, listing_id VARCHAR(255) NOT NULL, property_type VARCHAR(255) NOT NULL, list_date DATETIME DEFAULT NULL, last_update DATETIME DEFAULT NULL, year_built DATE DEFAULT NULL, listing_status VARCHAR(255) NOT NULL, no_ofbeds INT NOT NULL, website_url VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        // $this->addSql('CREATE TABLE property_address (id INT AUTO_INCREMENT NOT NULL, property_id INT NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, county VARCHAR(255) DEFAULT NULL, latitude DOUBLE PRECISION NOT NULL, line VARCHAR(255) NOT NULL, post_code VARCHAR(255) NOT NULL, state_code VARCHAR(255) NOT NULL, time_zone VARCHAR(255) NOT NULL, state VARCHAR(255) NOT NULL, neighbor_hood_name VARCHAR(255) DEFAULT NULL, longitude DOUBLE PRECISION NOT NULL, UNIQUE INDEX UNIQ_548325F9549213EC (property_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        // $this->addSql('CREATE TABLE property_community (id INT AUTO_INCREMENT NOT NULL, property_id INT NOT NULL, baths_max INT NOT NULL, baths_min INT DEFAULT NULL, beds_max INT DEFAULT NULL, beds_min INT DEFAULT NULL, community_id INT DEFAULT NULL, community_name VARCHAR(255) DEFAULT NULL, price_max DOUBLE PRECISION DEFAULT NULL, price_min DOUBLE PRECISION DEFAULT NULL, UNIQUE INDEX UNIQ_6A8F428E549213EC (property_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        // $this->addSql('CREATE TABLE property_photo (id INT AUTO_INCREMENT NOT NULL, property_id INT NOT NULL, photo_link VARCHAR(255) DEFAULT NULL, INDEX IDX_D2A44515549213EC (property_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        // $this->addSql('ALTER TABLE property_address ADD CONSTRAINT FK_548325F9549213EC FOREIGN KEY (property_id) REFERENCES property (id)');
        // $this->addSql('ALTER TABLE property_community ADD CONSTRAINT FK_6A8F428E549213EC FOREIGN KEY (property_id) REFERENCES property (id)');
        // $this->addSql('ALTER TABLE property_photo ADD CONSTRAINT FK_D2A44515549213EC FOREIGN KEY (property_id) REFERENCES property (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE property_address DROP FOREIGN KEY FK_548325F9549213EC');
        $this->addSql('ALTER TABLE property_community DROP FOREIGN KEY FK_6A8F428E549213EC');
        $this->addSql('ALTER TABLE property_photo DROP FOREIGN KEY FK_D2A44515549213EC');
        $this->addSql('DROP TABLE property');
        $this->addSql('DROP TABLE property_address');
        $this->addSql('DROP TABLE property_community');
        $this->addSql('DROP TABLE property_photo');
    }
}
