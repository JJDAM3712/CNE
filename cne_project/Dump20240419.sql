CREATE DATABASE  IF NOT EXISTS `cne_bd` /*!40100 DEFAULT CHARACTER SET utf8mb4 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cne_bd`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cne_bd
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `cargos`
--

DROP TABLE IF EXISTS `cargos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargos` (
  `id_cargo` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargos`
--

LOCK TABLES `cargos` WRITE;
/*!40000 ALTER TABLE `cargos` DISABLE KEYS */;
INSERT INTO `cargos` VALUES (8,'COORDINADOR REGIONAL DE GESTION TECNICA ADMINISTRATIVA',1),(9,'OBRERO GENERAL',1),(10,'DIRECTOR REGIONAL ELECTORAL',1),(11,'INSPECTOR DE SEGURIDAD',2),(12,'ESPECIALISTA DE SEGURIDAD',1),(13,'COORDINADOR REGIONAL DE TECNOLOGIA DE LA INFORMACION',1),(14,'PROFESIONAL TECNICO ELECTORAL ',2),(15,'COORDINADOR REGIONAL DE PARTICIPACION POLI­TICA Y FINANCIAMIENTO',1),(16,'COORDINADOR REGIONAL DE REGISTRO ELECTORAL Y SUPERVISION',1),(17,'COORDINADOR REGIONAL DE LOGI­STICA Y PRODUCCION',1),(18,'COORDINADOR REGIONAL DE LA JUNTA NACIONAL ELECTORAL',1),(19,'COORDINADOR REGIONAL DE REGISTRO CIVIL',1),(20,'ADMINISTRATIVO I',1),(21,'ENLACE DE INFORMATICA',1),(22,'ANALISTA DE INFORMACION Y DOCUMENTACION',1),(23,'ANALISTA REGIONAL DE FINANCIAMINETO',1),(24,'PROFESIONAL III',1),(25,'PROFESIONAL II',2),(26,'AGENTE DE ACTUALIZACION',1),(27,'COORDINADOR MUNICIPAL',22),(28,'FISCAL DE REGISTRO CIVIL E IDENTIFICACION',6);
/*!40000 ALTER TABLE `cargos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(20) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (4,'ESCANER'),(6,'COPIADORA'),(7,'MUEBLE DE TRABAJO'),(8,'TELEVISOR'),(9,'TELEFONO'),(10,'COMPUTADORA'),(11,'IMPRESORA'),(12,'PROYECTOR');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamento` (
  `id_departamento` int NOT NULL AUTO_INCREMENT,
  `departamento` varchar(100) CHARACTER SET utf8mb4 DEFAULT '0',
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES (1,'COORDINACION REGIONAL DE LOGISTICA Y PRODUCCION '),(2,'hola'),(3,'COORDINACION REGIONAL DE LA JUNTA NACIONAL ELECTORAL '),(5,'COORDINACION REGIONAL DE REGISTRO ELECTORAL Y SUPERVISION '),(6,'COORDINACION REGIONAL DE TECNOLOGIA DE LA INFORMACION'),(7,'COORDINACION REGIONAL DE PARTICIPACION POLITICA Y FINANCIERA'),(55,'COORDINACION REGIONAL DE REGISTRO CIVIL'),(59,'COORDINACION REGIONAL DE GESTION ADMINISTRATIVA');
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventario`
--

DROP TABLE IF EXISTS `inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventario` (
  `id_inventario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `marca` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `codigo` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `estatus` varchar(50) NOT NULL DEFAULT '',
  `cantidad` varchar(50) NOT NULL DEFAULT '0',
  `id_departamento` int NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_inventario`),
  KEY `FK_inventario_departamento` (`id_departamento`),
  KEY `FK_inventario_categoria` (`id_categoria`),
  CONSTRAINT `FK_inventario_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  CONSTRAINT `FK_inventario_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal`
--

DROP TABLE IF EXISTS `personal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal` (
  `id_personal` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `cedula` varchar(45) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `id_cargo` int DEFAULT NULL,
  `id_departamento` int DEFAULT NULL,
  PRIMARY KEY (`id_personal`),
  KEY `FK_personal_cargos` (`id_cargo`),
  KEY `FK_personal_departamento` (`id_departamento`),
  CONSTRAINT `FK_personal_cargos` FOREIGN KEY (`id_cargo`) REFERENCES `cargos` (`id_cargo`),
  CONSTRAINT `FK_personal_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal`
--

LOCK TABLES `personal` WRITE;
/*!40000 ALTER TABLE `personal` DISABLE KEYS */;
INSERT INTO `personal` VALUES (7,'JASON DAVID','AGUILAR MORALES','27.512.863','0412-0607829',12,59),(8,'Magaly Coromoto','Morales Bastidas','12.906.825','0426-1267371',24,55),(9,'Melany Airam','Aguilar Morales','31.814.881','0412-4243263',9,59);
/*!40000 ALTER TABLE `personal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL DEFAULT '0',
  `password` varchar(200) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0',
  `quest` int NOT NULL DEFAULT '0',
  `resp` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (6,'Ddavid','$2b$08$wcoK4ZgnCdeZN/utB2nSQePh5YtfXRDnfG.bfzRrVkzlcJJ3M.kzy',1,'respuesta'),(7,'ddavid1','$2b$08$JNzE2JCCQ5l9SzS47uTrlOSmE9OyqkTGahjEuApSiJAPbPDMWn0zq',1,'res');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visita`
--

DROP TABLE IF EXISTS `visita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visita` (
  `id_visita` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL DEFAULT '0',
  `cedula` varchar(50) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0',
  `id_departamento` int NOT NULL,
  `motivo` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_salida` time NOT NULL,
  PRIMARY KEY (`id_visita`),
  KEY `FK_visita_departamento` (`id_departamento`),
  CONSTRAINT `FK_visita_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visita`
--

LOCK TABLES `visita` WRITE;
/*!40000 ALTER TABLE `visita` DISABLE KEYS */;
/*!40000 ALTER TABLE `visita` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-19  0:31:20
