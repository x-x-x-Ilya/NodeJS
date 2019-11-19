INSERT INTO `Role`
(`id`, `name`)
VALUES
(0, "regUser"),
(1, "admin");

INSERT INTO `User`
(`id`, `email`, `deleteReq`, `password`, `firstName`, `surName`, `age`, `status`, `avatar`)
VALUES
(1, "iripinskij@gmail.com", 0, "Илья", "Рипинский", 18, NULL, NULL);