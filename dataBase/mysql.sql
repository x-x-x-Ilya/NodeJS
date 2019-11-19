DROP DATABASE IF EXISTS `instagram`;

-- Create new Databese
CREATE DATABASE `instagram` DEFAULT CHARACTER SET utf8;

-- Use new Databese
USE `instagram`;

CREATE TABLE `User` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(255) NOT NULL UNIQUE,
    `deleteReq` BOOLEAN  DEFAULT 0,
	`password` VARCHAR(255) NOT NULL,
	`firstName` VARCHAR(255) NOT NULL,
	`surName` VARCHAR(255) NOT NULL,
	`age` INT NULL,
	`status` VARCHAR(255) NULL,
	`avatar` FLOAT NULL,/*DEAFULT 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',*/
	PRIMARY KEY (`id`)
);

CREATE TABLE `UserRole` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`userId` INT NOT NULL AUTO_INCREMENT,
	`adminId` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Role` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Post` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`userId` INT NOT NULL AUTO_INCREMENT,
	`img` FLOAT NOT NULL,
	`caption` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Like` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`userId` INT NOT NULL AUTO_INCREMENT,
	`postId` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

ALTER TABLE `UserRole` ADD CONSTRAINT `UserRole_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

ALTER TABLE `Role` ADD CONSTRAINT `Role_fk0` FOREIGN KEY (`id`) REFERENCES `UserRole`(`adminId`);

ALTER TABLE `Post` ADD CONSTRAINT `Post_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

ALTER TABLE `Like` ADD CONSTRAINT `Like_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

ALTER TABLE `Like` ADD CONSTRAINT `Like_fk1` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`);

