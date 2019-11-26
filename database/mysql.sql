DROP DATABASE IF EXISTS `instagram`;
-- Create new Databese
CREATE DATABASE `instagram` DEFAULT CHARACTER SET utf8;
-- Use new Databese
USE `instagram`;

CREATE TABLE `users` (
	`id`         INT          NOT NULL AUTO_INCREMENT,
	`email`      VARCHAR(255) NOT NULL UNIQUE,
	`password`   VARCHAR(255) NOT NULL,
	`first_name` VARCHAR(255) NOT NULL,
	`last_name`  VARCHAR(255) NOT NULL,
	`delete_req` BOOLEAN      NOT NULL DEFAULT 0,
	PRIMARY KEY (`id`)
);

CREATE TABLE `users_roles` (
	`id`      INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`role_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
	`id`   INT          NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `posts` (
	`id`         INT          NOT NULL AUTO_INCREMENT,
	`user_id`    INT          NOT NULL,
	`img`        VARCHAR(255) NOT NULL,
	`caption`    VARCHAR(255) NOT NULL,
	`created_at` DATE         NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `likes` (
	`id`      INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`post_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `posts_tags` (
    `id`      INT NOT NULL AUTO_INCREMENT,
    `post_id` INT NOT NULL,
    `tag_id`  INT NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `tags` (
    `id`   INT          NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL ,
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `posts_tags`  restrict;
DROP TABLE IF EXISTS `tags`        restrict;
DROP TABLE IF EXISTS `posts`       restrict;
DROP TABLE IF EXISTS `likes`       restrict;
DROP TABLE IF EXISTS `roles`       restrict;
DROP TABLE IF EXISTS `users_roles` restrict;
DROP TABLE IF EXISTS `users`       restrict;


ALTER TABLE `users_roles` ADD CONSTRAINT `del users -> del users_roles` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)            ON DELETE cascade;
ALTER TABLE `roles`       ADD CONSTRAINT `del users_roles -> del roles` FOREIGN KEY (`id`)      REFERENCES `users_roles`(`role_id`) ON DELETE cascade;
ALTER TABLE `likes`       ADD CONSTRAINT `del users -> del likes`       FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)            ON DELETE cascade;
ALTER TABLE `posts`       ADD CONSTRAINT `del users -> del posts`       FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)            ON DELETE cascade;

ALTER TABLE `likes`       ADD CONSTRAINT `del posts -> del likes`       FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`)            ON DELETE cascade;
ALTER TABLE `posts_tags`  ADD CONSTRAINT `del posts -> del posts_tags`  FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`)            ON DELETE cascade;
ALTER TABLE `tags`        ADD CONSTRAINT `del posts_tags -> del tags`   FOREIGN KEY (`id`)      REFERENCES `posts_tags`(`tag_id`)   ON DELETE cascade;