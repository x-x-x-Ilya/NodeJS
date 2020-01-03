DROP DATABASE `instagram`;
CREATE DATABASE `instagram`;

USE `instagram`;

CREATE TABLE `users` (
	`id`         INT          NOT NULL AUTO_INCREMENT,
	`email`      VARCHAR(255) NOT NULL UNIQUE,
	`password`   VARCHAR(255) NOT NULL,
	`first_name` VARCHAR(255) NOT NULL,
	`last_name`  VARCHAR(255) NOT NULL,
	`delete_req` BOOLEAN      NOT NULL DEFAULT FALSE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `users_roles` (
	`id`      INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`role_id` INT NOT NULL,
	PRIMARY KEY (`id`),
    INDEX `users_roles_user_id_idx` (`user_id` ASC),
    INDEX `users_roles_role_id_idx` (`role_id` ASC)
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
    PRIMARY KEY (`id`),
    INDEX `posts_tags_post_id_idx` (`post_id` ASC),
    INDEX `posts_tags_tag_id_idx` (`tag_id` ASC)
);

CREATE TABLE `tags` (
    `id`   INT          NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL ,
    PRIMARY KEY (`id`)
);



ALTER TABLE `users_roles` ADD CONSTRAINT `z` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)            ON DELETE cascade;
ALTER TABLE `roles`       ADD CONSTRAINT `x` FOREIGN KEY (`id`)      REFERENCES `users_roles`(`role_id`) ON DELETE cascade;
ALTER TABLE `likes`       ADD CONSTRAINT `c`       FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)            ON DELETE cascade;
ALTER TABLE `posts`       ADD CONSTRAINT `v`       FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)            ON DELETE cascade;

ALTER TABLE `likes`       ADD CONSTRAINT `b`       FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`)            ON DELETE cascade;
ALTER TABLE `posts_tags`  ADD CONSTRAINT `n`  FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`)            ON DELETE cascade;
ALTER TABLE `tags`        ADD CONSTRAINT `m`   FOREIGN KEY (`id`)      REFERENCES `posts_tags`(`tag_id`)   ON DELETE cascade;