CREATE TABLE `asistencia` (
  `id_asistencia` int(11) NOT NULL AUTO_INCREMENT,
  `id_personal` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `entrada` time NOT NULL,
  `salida` time DEFAULT NULL,
  PRIMARY KEY (`id_asistencia`),
  KEY `FK__personal` (`id_personal`),
  CONSTRAINT `FK__personal` FOREIGN KEY (`id_personal`) REFERENCES `personal` (`id_personal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `asistencia` VALUES (11,11,Fri May 24 2024 00:00:00 GMT-0400 (hora de Venezuela),'01:28:56',);
CREATE TABLE `visita` (
  `id_visita` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `cedula` varchar(50) NOT NULL,
  `id_departamento` int(11) NOT NULL,
  `motivo` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_salida` time DEFAULT NULL,
  PRIMARY KEY (`id_visita`),
  KEY `FK_visita_departamento` (`id_departamento`),
  CONSTRAINT `FK_visita_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `visita` VALUES (1,'jason','27512863',55,'visita',Tue May 21 2024 00:00:00 GMT-0400 (hora de Venezuela),'13:26:38','14:50:22');
INSERT INTO `visita` VALUES (4,'JOSE','1234567',55,'VISITA',Wed May 22 2024 00:00:00 GMT-0400 (hora de Venezuela),'20:45:09','23:39:32');
INSERT INTO `visita` VALUES (5,'JOSE','123456777',7,'VISITA',Wed May 22 2024 00:00:00 GMT-0400 (hora de Venezuela),'21:13:57','21:14:16');
INSERT INTO `visita` VALUES (6,'JOSE','12.34567',1,'VISITA',Wed May 22 2024 00:00:00 GMT-0400 (hora de Venezuela),'23:49:10',);
CREATE TABLE `personal` (
  `id_personal` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `cedula` varchar(45) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `id_cargo` int(11) DEFAULT NULL,
  `id_departamento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_personal`),
  KEY `FK_personal_cargos` (`id_cargo`),
  KEY `FK_personal_departamento` (`id_departamento`),
  CONSTRAINT `FK_personal_cargos` FOREIGN KEY (`id_cargo`) REFERENCES `cargos` (`id_cargo`),
  CONSTRAINT `FK_personal_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `personal` VALUES (10,'GABRIEL','LOPEZ','275128633','041206357554324',13,5);
INSERT INTO `personal` VALUES (11,'GABRIEL','LOPEZ','27512863','04120635755',28,1);
CREATE TABLE `cargos` (
  `id_cargo` int(11) NOT NULL AUTO_INCREMENT,
  `cargo` varchar(100) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `cargos` VALUES (8,'COORDINADOR REGIONAL DE GESTION TECNICA ADMINISTRATIVA',1);
INSERT INTO `cargos` VALUES (9,'OBRERO GENERAL',1);
INSERT INTO `cargos` VALUES (10,'DIRECTOR REGIONAL ELECTORAL',1);
INSERT INTO `cargos` VALUES (11,'INSPECTOR DE SEGURIDAD',2);
INSERT INTO `cargos` VALUES (12,'ESPECIALISTA DE SEGURIDAD',1);
INSERT INTO `cargos` VALUES (13,'COORDINADOR REGIONAL DE TECNOLOGIA DE LA INFORMACION',1);
INSERT INTO `cargos` VALUES (14,'PROFESIONAL TECNICO ELECTORAL ',2);
INSERT INTO `cargos` VALUES (15,'COORDINADOR REGIONAL DE PARTICIPACION POLI­TICA Y FINANCIAMIENTO',1);
INSERT INTO `cargos` VALUES (16,'COORDINADOR REGIONAL DE REGISTRO ELECTORAL Y SUPERVISION',1);
INSERT INTO `cargos` VALUES (17,'COORDINADOR REGIONAL DE LOGI­STICA Y PRODUCCION',1);
INSERT INTO `cargos` VALUES (18,'COORDINADOR REGIONAL DE LA JUNTA NACIONAL ELECTORAL',1);
INSERT INTO `cargos` VALUES (19,'COORDINADOR REGIONAL DE REGISTRO CIVIL',1);
INSERT INTO `cargos` VALUES (20,'ADMINISTRATIVO I',1);
INSERT INTO `cargos` VALUES (21,'ENLACE DE INFORMATICA',1);
INSERT INTO `cargos` VALUES (22,'ANALISTA DE INFORMACION Y DOCUMENTACION',1);
INSERT INTO `cargos` VALUES (23,'ANALISTA REGIONAL DE FINANCIAMINETO',1);
INSERT INTO `cargos` VALUES (24,'PROFESIONAL III',1);
INSERT INTO `cargos` VALUES (25,'PROFESIONAL II',2);
INSERT INTO `cargos` VALUES (26,'AGENTE DE ACTUALIZACION',1);
INSERT INTO `cargos` VALUES (27,'COORDINADOR MUNICIPAL',22);
INSERT INTO `cargos` VALUES (28,'FISCAL DE REGISTRO CIVIL E IDENTIFICACION',6);
CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(20) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `categoria` VALUES (4,'ESCANER');
INSERT INTO `categoria` VALUES (6,'COPIADORA');
INSERT INTO `categoria` VALUES (7,'MUEBLE DE TRABAJO');
INSERT INTO `categoria` VALUES (8,'TELEVISOR');
INSERT INTO `categoria` VALUES (9,'TELEFONO');
INSERT INTO `categoria` VALUES (10,'COMPUTADORA');
INSERT INTO `categoria` VALUES (11,'IMPRESORA');
INSERT INTO `categoria` VALUES (12,'PROYECTOR');
CREATE TABLE `inventario` (
  `id_inventario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `codigo` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `estatus` varchar(50) NOT NULL DEFAULT '',
  `cantidad` varchar(50) NOT NULL DEFAULT '0',
  `id_departamento` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`id_inventario`),
  KEY `FK_inventario_departamento` (`id_departamento`),
  KEY `FK_inventario_categoria` (`id_categoria`),
  CONSTRAINT `FK_inventario_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  CONSTRAINT `FK_inventario_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `inventario` VALUES (7,'JOSE','XD','11111','XD','USADO','1',7,4);
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL DEFAULT '0',
  `password` varchar(200) NOT NULL DEFAULT '0',
  `quest` int(11) NOT NULL DEFAULT 0,
  `resp` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `user` VALUES (6,'Ddavid','$2b$08$wcoK4ZgnCdeZN/utB2nSQePh5YtfXRDnfG.bfzRrVkzlcJJ3M.kzy',1,'respuesta');
INSERT INTO `user` VALUES (7,'ddavid1','$2b$08$JNzE2JCCQ5l9SzS47uTrlOSmE9OyqkTGahjEuApSiJAPbPDMWn0zq',1,'res');
CREATE TABLE `departamento` (
  `id_departamento` int(11) NOT NULL AUTO_INCREMENT,
  `departamento` varchar(100) DEFAULT '0',
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `departamento` VALUES (1,'COORDINACION REGIONAL DE LOGISTICA Y PRODUCCION ');
INSERT INTO `departamento` VALUES (2,'hola');
INSERT INTO `departamento` VALUES (3,'COORDINACION REGIONAL DE LA JUNTA NACIONAL ELECTORAL ');
INSERT INTO `departamento` VALUES (5,'COORDINACION REGIONAL DE REGISTRO ELECTORAL Y SUPERVISION ');
INSERT INTO `departamento` VALUES (6,'COORDINACION REGIONAL DE TECNOLOGIA DE LA INFORMACION');
INSERT INTO `departamento` VALUES (7,'COORDINACION REGIONAL DE PARTICIPACION POLITICA Y FINANCIERA');
INSERT INTO `departamento` VALUES (55,'COORDINACION REGIONAL DE REGISTRO CIVIL');
INSERT INTO `departamento` VALUES (59,'COORDINACION REGIONAL DE GESTION ADMINISTRATIVA');
