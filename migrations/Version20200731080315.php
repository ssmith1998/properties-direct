<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200731080315 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE property_address (id INT AUTO_INCREMENT NOT NULL, property_id INT NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, county VARCHAR(255) NOT NULL, latitude INT NOT NULL, line VARCHAR(255) NOT NULL, post_code VARCHAR(255) NOT NULL, state_code VARCHAR(255) NOT NULL, time_zone VARCHAR(255) NOT NULL, state VARCHAR(255) NOT NULL, neighbor_hood_name VARCHAR(255) DEFAULT NULL, longitude INT NOT NULL, UNIQUE INDEX UNIQ_548325F9549213EC (property_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE property_address ADD CONSTRAINT FK_548325F9549213EC FOREIGN KEY (property_id) REFERENCES property (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE property_address');
    }
}
