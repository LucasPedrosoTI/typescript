-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: gestao
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `brands_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (3,'Melken'),(1,'Nestlé'),(2,'Sicao');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expenses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `expenses_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
INSERT INTO `expenses` VALUES (1,'Água'),(10,'Aluguel'),(4,'Combustível/Condução'),(5,'Condomínio'),(2,'Energia'),(3,'Gás'),(6,'Internet'),(9,'Mei/Contador'),(8,'Publicidade'),(7,'Telefone');
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_apps`
--

DROP TABLE IF EXISTS `food_apps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_apps` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(70) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `food_apps_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_apps`
--

LOCK TABLES `food_apps` WRITE;
/*!40000 ALTER TABLE `food_apps` DISABLE KEYS */;
INSERT INTO `food_apps` VALUES (1,'iFood'),(3,'Rappi'),(2,'Uber Eats');
/*!40000 ALTER TABLE `food_apps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (85,'00_create_users.ts',1,'2020-08-19 19:26:19'),(86,'01_create_machine_brands.ts',1,'2020-08-19 19:26:20'),(87,'02_create_food_apps.ts',1,'2020-08-19 19:26:20'),(88,'03_create_brands.ts',1,'2020-08-19 19:26:20'),(89,'04_create_expenses.ts',1,'2020-08-19 19:26:20'),(90,'05_create_salaries.ts',1,'2020-08-19 19:26:20'),(91,'06_create_users_expenses.ts',1,'2020-08-19 19:26:21'),(92,'07_create_machines.ts',1,'2020-08-19 19:26:21'),(93,'08_create_users_machines.ts',1,'2020-08-19 19:26:21'),(94,'09_create_users_food_apps.ts',1,'2020-08-19 19:26:22'),(95,'10_create_products.ts',1,'2020-08-19 19:26:22'),(96,'11_create_recipes.ts',1,'2020-08-19 19:26:25'),(97,'12_create_users_products.ts',1,'2020-08-19 19:26:28'),(98,'13_create_recipes_products.ts',1,'2020-08-19 19:26:28');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int(11) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `machine_brands`
--

DROP TABLE IF EXISTS `machine_brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `machine_brands` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(70) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `machine_brands_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `machine_brands`
--

LOCK TABLES `machine_brands` WRITE;
/*!40000 ALTER TABLE `machine_brands` DISABLE KEYS */;
INSERT INTO `machine_brands` VALUES (5,'Cielo'),(2,'Mercado Pago'),(4,'PagSeguro'),(6,'SafraPay'),(3,'Stone'),(1,'SumUp');
/*!40000 ALTER TABLE `machine_brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `machines`
--

DROP TABLE IF EXISTS `machines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `machines` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `machine_brands_id` int(10) unsigned NOT NULL,
  `name` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `machines_machine_brands_id_foreign` (`machine_brands_id`),
  CONSTRAINT `machines_machine_brands_id_foreign` FOREIGN KEY (`machine_brands_id`) REFERENCES `machine_brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `machines`
--

LOCK TABLES `machines` WRITE;
/*!40000 ALTER TABLE `machines` DISABLE KEYS */;
INSERT INTO `machines` VALUES (1,1,'SumUp Top'),(2,1,'SumUp On'),(3,1,'SumUp Total'),(4,2,'Point Smart'),(5,2,'Point Pro'),(6,2,'Point Mini');
/*!40000 ALTER TABLE `machines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brands_id` int(10) unsigned NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `quantity` decimal(10,2) unsigned DEFAULT NULL,
  `unit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_brands_id_foreign` (`brands_id`),
  CONSTRAINT `products_brands_id_foreign` FOREIGN KEY (`brands_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Leite Condensado Moça',395.00,'g'),(2,1,'Creme de Leite',200.00,'g'),(3,2,'Chocolate Blend Nobre',1010.00,'g'),(4,3,'Chocolate em Pó 33%',1000.00,'g');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(10) unsigned NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `current_price` decimal(10,2) unsigned DEFAULT NULL,
  `shelf_life` varchar(20) DEFAULT NULL,
  `yield` decimal(10,2) unsigned DEFAULT NULL,
  `prep_time` decimal(10,2) unsigned DEFAULT NULL,
  `preparation` text,
  `profit` decimal(10,2) unsigned DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `recipes_users_id_foreign` (`users_id`),
  CONSTRAINT `recipes_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,1,'Brigadeiro','Doces',50.00,'4 dias',47.00,30.00,'Leve todos os ingredientes ao fogo mexendo até que você levante a espátula e o recheio caia em blocos, medio/alto, e desgrude da lateral da panela, Retire da panela e deixe esfriar',0.30,'2020-08-19');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes_products`
--

DROP TABLE IF EXISTS `recipes_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `recipes_id` int(10) unsigned NOT NULL,
  `users_products_id` int(10) unsigned NOT NULL,
  `quantity` decimal(10,2) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `recipes_products_recipes_id_foreign` (`recipes_id`),
  KEY `recipes_products_users_products_id_foreign` (`users_products_id`),
  CONSTRAINT `recipes_products_recipes_id_foreign` FOREIGN KEY (`recipes_id`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `recipes_products_users_products_id_foreign` FOREIGN KEY (`users_products_id`) REFERENCES `users_products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes_products`
--

LOCK TABLES `recipes_products` WRITE;
/*!40000 ALTER TABLE `recipes_products` DISABLE KEYS */;
INSERT INTO `recipes_products` VALUES (1,1,1,395.00),(2,1,2,200.00),(3,1,3,100.00),(4,1,4,20.00);
/*!40000 ALTER TABLE `recipes_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salaries`
--

DROP TABLE IF EXISTS `salaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salaries` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(10) unsigned NOT NULL,
  `salary` decimal(10,2) unsigned DEFAULT NULL,
  `business_days` int(10) unsigned DEFAULT NULL,
  `business_hours` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `salaries_users_id_foreign` (`users_id`),
  CONSTRAINT `salaries_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salaries`
--

LOCK TABLES `salaries` WRITE;
/*!40000 ALTER TABLE `salaries` DISABLE KEYS */;
INSERT INTO `salaries` VALUES (1,1,3000.00,5,8);
/*!40000 ALTER TABLE `salaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(70) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `business_name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `admin` int(10) unsigned NOT NULL DEFAULT '0',
  `plan` varchar(255) NOT NULL DEFAULT 'free',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'lp@mail.com','$2b$10$AtFsdZJuJ1YL4YEJHOQTrOwOZw8jDJAicXDc0c2cn8DBscIgUAHne','Lucas','Pedroso','DaChef Romão','logo.svg',1,'free'),(2,'ciclano@mail.com','$2b$10$nDZObmuklD5.pZglY/ex/OYv8W8mV/zQINLcW1CgHYXu5lwV2e/5y','Beltrano','Da Silva','Empório do Laser','no-logo.png',0,'free'),(3,'fulano@mail.com','$2b$10$xPRKt6zQuYjSgKMIDuwOzeh/tO4RzU/5m8xSuusfBLiwERHjkD7Qi','Fulano','Da Silva','Empório do Laser','no-logo.png',0,'free');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_expenses`
--

DROP TABLE IF EXISTS `users_expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_expenses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(10) unsigned NOT NULL,
  `expenses_id` int(10) unsigned NOT NULL,
  `cost` decimal(10,2) unsigned DEFAULT NULL,
  `divided_by` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_expenses_users_id_foreign` (`users_id`),
  KEY `users_expenses_expenses_id_foreign` (`expenses_id`),
  CONSTRAINT `users_expenses_expenses_id_foreign` FOREIGN KEY (`expenses_id`) REFERENCES `expenses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `users_expenses_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_expenses`
--

LOCK TABLES `users_expenses` WRITE;
/*!40000 ALTER TABLE `users_expenses` DISABLE KEYS */;
INSERT INTO `users_expenses` VALUES (1,1,1,30.00,1),(2,1,2,50.00,2);
/*!40000 ALTER TABLE `users_expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_food_apps`
--

DROP TABLE IF EXISTS `users_food_apps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_food_apps` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(10) unsigned NOT NULL,
  `food_apps_id` int(10) unsigned NOT NULL,
  `fee` decimal(10,2) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_food_apps_users_id_foreign` (`users_id`),
  KEY `users_food_apps_food_apps_id_foreign` (`food_apps_id`),
  CONSTRAINT `users_food_apps_food_apps_id_foreign` FOREIGN KEY (`food_apps_id`) REFERENCES `food_apps` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `users_food_apps_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_food_apps`
--

LOCK TABLES `users_food_apps` WRITE;
/*!40000 ALTER TABLE `users_food_apps` DISABLE KEYS */;
INSERT INTO `users_food_apps` VALUES (1,1,1,0.12);
/*!40000 ALTER TABLE `users_food_apps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_machines`
--

DROP TABLE IF EXISTS `users_machines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_machines` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(10) unsigned NOT NULL,
  `machines_id` int(10) unsigned NOT NULL,
  `debit_fee` decimal(10,2) unsigned DEFAULT NULL,
  `credit_fee` decimal(10,2) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_machines_users_id_foreign` (`users_id`),
  KEY `users_machines_machines_id_foreign` (`machines_id`),
  CONSTRAINT `users_machines_machines_id_foreign` FOREIGN KEY (`machines_id`) REFERENCES `machines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `users_machines_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_machines`
--

LOCK TABLES `users_machines` WRITE;
/*!40000 ALTER TABLE `users_machines` DISABLE KEYS */;
INSERT INTO `users_machines` VALUES (1,1,6,0.02,0.03);
/*!40000 ALTER TABLE `users_machines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_products`
--

DROP TABLE IF EXISTS `users_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(10) unsigned NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
  `price` decimal(10,2) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_products_users_id_foreign` (`users_id`),
  KEY `users_products_products_id_foreign` (`products_id`),
  CONSTRAINT `users_products_products_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `users_products_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_products`
--

LOCK TABLES `users_products` WRITE;
/*!40000 ALTER TABLE `users_products` DISABLE KEYS */;
INSERT INTO `users_products` VALUES (1,1,1,3.50),(2,1,2,2.50),(3,1,3,23.00),(4,1,4,19.00);
/*!40000 ALTER TABLE `users_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-09 20:26:07
