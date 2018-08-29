
DROP TABLE IF EXISTS `books`;

CREATE TABLE `books`(
`id` INT NOT NULL COLLATE utf8mb4_unicode_ci auto_increment PRIMARY KEY,
`isbn` VARCHAR(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`openid` VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
`title` VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`image` VARCHAR(100) COLLATE utf8mb4_unicode_ci,
`alt` VARCHAR(100) COLLATE utf8mb4_unicode_ci,
`publisher` VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`summary` VARCHAR(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
`price` VARCHAR(100) COLLATE utf8mb4_unicode_ci,
`rate` FLOAT COLLATE utf8mb4_unicode_ci,
`tags` VARCHAR(100) COLLATE utf8mb4_unicode_ci,
`author` VARCHAR(100) COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

