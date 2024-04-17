-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.2.0 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para cne_bd
CREATE DATABASE IF NOT EXISTS `cne_bd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cne_bd`;

-- Volcando estructura para tabla cne_bd.cargos
CREATE TABLE IF NOT EXISTS `cargos` (
  `id_cargo` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(45) NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla cne_bd.cargos: ~3 rows (aproximadamente)
DELETE FROM `cargos`;
INSERT INTO `cargos` (`id_cargo`, `cargo`, `cantidad`) VALUES
	(4, 'barrendero', 2),
	(5, 'presidente', 4),
	(6, 'Ingeniero', 1);

-- Volcando estructura para tabla cne_bd.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(20) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla cne_bd.categoria: ~2 rows (aproximadamente)
DELETE FROM `categoria`;
INSERT INTO `categoria` (`id_categoria`, `categoria`) VALUES
	(1, 'Desktop'),
	(2, 'Impresora'),
	(3, 'Laptop');

-- Volcando estructura para tabla cne_bd.departamento
CREATE TABLE IF NOT EXISTS `departamento` (
  `id_departamento` int NOT NULL AUTO_INCREMENT,
  `departamento` varchar(50) DEFAULT '0',
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla cne_bd.departamento: ~4 rows (aproximadamente)
DELETE FROM `departamento`;
INSERT INTO `departamento` (`id_departamento`, `departamento`) VALUES
	(11, 'Contaduroa'),
	(12, 'depar'),
	(50, 'ddddd'),
	(51, 'un departamento serio');

-- Volcando estructura para tabla cne_bd.inventario
CREATE TABLE IF NOT EXISTS `inventario` (
  `id_inventario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `marca` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `codigo` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `estatus` varchar(50) NOT NULL DEFAULT '',
  `cantidad` int NOT NULL DEFAULT (0),
  `id_departamento` int NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_inventario`),
  KEY `FK_inventario_departamento` (`id_departamento`),
  KEY `FK_inventario_categoria` (`id_categoria`),
  CONSTRAINT `FK_inventario_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  CONSTRAINT `FK_inventario_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla cne_bd.inventario: ~2 rows (aproximadamente)
DELETE FROM `inventario`;
INSERT INTO `inventario` (`id_inventario`, `nombre`, `marca`, `codigo`, `modelo`, `estatus`, `cantidad`, `id_departamento`, `id_categoria`) VALUES
	(1, 'pc', 'HP', 'cod1234', 'ZHP', '0', 2, 11, 1),
	(2, 'laptop', 'DELL', 'cod789', 'hj45', '1', 1, 12, 2);

-- Volcando estructura para tabla cne_bd.personal
CREATE TABLE IF NOT EXISTS `personal` (
  `id_personal` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `cedula` varchar(45) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `id_cargo` int DEFAULT NULL,
  `id_departamento` int DEFAULT NULL,
  PRIMARY KEY (`id_personal`),
  KEY `FK_personal_cargos` (`id_cargo`),
  KEY `FK_personal_departamento` (`id_departamento`),
  CONSTRAINT `FK_personal_cargos` FOREIGN KEY (`id_cargo`) REFERENCES `cargos` (`id_cargo`),
  CONSTRAINT `FK_personal_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla cne_bd.personal: ~2 rows (aproximadamente)
DELETE FROM `personal`;
INSERT INTO `personal` (`id_personal`, `nombre`, `apellido`, `cedula`, `direccion`, `telefono`, `id_cargo`, `id_departamento`) VALUES
	(4, 'adssda', 'dasdasd', 'dasdasda', 'fdafadfa', 'dfasdfasd', 4, 11);

-- Volcando estructura para tabla cne_bd.visita
CREATE TABLE IF NOT EXISTS `visita` (
  `id_visita` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL DEFAULT '0',
  `cedula` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `id_departamento` int NOT NULL,
  `motivo` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_salida` time NOT NULL,
  PRIMARY KEY (`id_visita`),
  KEY `FK_visita_departamento` (`id_departamento`),
  CONSTRAINT `FK_visita_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla cne_bd.visita: ~0 rows (aproximadamente)
DELETE FROM `visita`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
