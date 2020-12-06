USE `instagram`;

INSERT INTO `users` (`email`, `password`,`first_name` ,`last_name`)
VALUES
('admin@gmail.com', 'admin', 'admin_name', 'admin_last_name');

INSERT INTO `roles` (`name`)
VALUES
('admin'),
('user');

INSERT INTO `users_roles`(`user_id`, `role_id`)
VALUES
(1,1);

INSERT INTO `posts` (`user_id`, `img`, `caption`)
VALUES
(1, 'img_link', 'funny_caption');

INSERT INTO `likes` (`user_id`, `post_id`)
VALUES
(1,1);

INSERT INTO  `tags` (`name`)
VALUES
('default_tag_name');

INSERT INTO `posts_tags` (`post_id`, `tag_id`)
VALUES
(1,1);


