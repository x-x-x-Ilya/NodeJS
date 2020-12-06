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
    `id` 	  INT 	       AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`role_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
	`id`   INT          NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL DEFAULT "user",
	PRIMARY KEY (`id`)
);

CREATE TABLE `posts` (
	`id`         INT          NOT NULL AUTO_INCREMENT,
	`user_id`    INT          NOT NULL,
	`img`        VARCHAR(255) NULL,
	`caption`    VARCHAR(255) NOT NULL,
	`created_at` TIMESTAMP    NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`id`)
);

CREATE TABLE `likes` (
	`id`      INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`post_id` INT NOT NULL,
	UNIQUE (user_id, post_id),
	PRIMARY KEY (`id`)
);

CREATE TABLE `posts_tags` (
    `id` 	  INT 	       AUTO_INCREMENT,
    `post_id` INT NOT NULL,
    `tag_id`  INT NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `tags` (
    `id`   INT          NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL ,
    PRIMARY KEY (`id`)
);


ALTER TABLE `posts`       ADD CONSTRAINT `posts`                   FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE;

ALTER TABLE `likes`       ADD CONSTRAINT `likes_post_id`           FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON DELETE CASCADE;

ALTER TABLE `likes`       ADD CONSTRAINT `likes_user_id`           FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE;

ALTER TABLE `users_roles` ADD CONSTRAINT `users_roles_user_id_idx` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE;
ALTER TABLE `users_roles` ADD CONSTRAINT `users_roles_role_id_idx` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE;

ALTER TABLE `posts_tags`  ADD CONSTRAINT `posts_tags_post_id_idx`  FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON DELETE CASCADE;
ALTER TABLE `posts_tags`  ADD CONSTRAINT `posts_tags_tag_id_idx`   FOREIGN KEY (`tag_id`)  REFERENCES `tags`(`id`)  ON DELETE CASCADE;