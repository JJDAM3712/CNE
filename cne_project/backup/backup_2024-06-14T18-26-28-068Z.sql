CREATE TABLE `asistencia` (
  `id_asistencia` int(11) NOT NULL AUTO_INCREMENT,
  `id_personal` int(11) NOT NULL DEFAULT 0,
  `fecha` varchar(50) NOT NULL DEFAULT '',
  `entrada` time NOT NULL,
  `salida` varchar(50) DEFAULT '',
  PRIMARY KEY (`id_asistencia`),
  KEY `FK__personal` (`id_personal`) USING BTREE,
  CONSTRAINT `FK__personal` FOREIGN KEY (`id_personal`) REFERENCES `personal` (`id_personal`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `asistencia` VALUES (25,1,'2024-06-07','15:12:31','');
INSERT INTO `asistencia` VALUES (26,2,'2024-06-07','15:12:55','15:14:14');
CREATE TABLE `visita` (
  `id_visita` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `cedula` varchar(50) NOT NULL,
  `id_departamento` int(11) NOT NULL,
  `motivo` varchar(50) NOT NULL,
  `fecha` varchar(50) NOT NULL DEFAULT '',
  `hora_entrada` time NOT NULL,
  `hora_salida` varchar(50) DEFAULT '',
  PRIMARY KEY (`id_visita`),
  KEY `FK_visita_departamento` (`id_departamento`),
  CONSTRAINT `FK_visita_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `visita` VALUES (5,'GEORGE','444555522',1,'POR QE SI','2024-06-04','14:13:34','14:13:52');
INSERT INTO `visita` VALUES (6,'JASON','2223333',5,'XD','2024-06-07','14:18:56','14:20:03');
INSERT INTO `visita` VALUES (7,'WEY','1111111',3,'111111','2024-06-07','14:20:48','14:25:58');
INSERT INTO `visita` VALUES (8,'DDDDD','27535099',5,'XDXDDDD','2024-06-07','17:31:02','');
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `personal` VALUES (1,'JASON DAVID','AGUILAR MORALES','3433333','3433333',28,3);
INSERT INTO `personal` VALUES (2,'CRISTAL CARINA','AGUILAR MORALES','12345678','04120607829',25,3);
INSERT INTO `personal` VALUES (18,'FULANO','DE TAL','45332178','04123456789',13,59);
INSERT INTO `personal` VALUES (20,'JHON','ACOSTA','27535099','0412896311',9,59);
CREATE TABLE `cargos` (
  `id_cargo` int(11) NOT NULL AUTO_INCREMENT,
  `cargo` varchar(100) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
INSERT INTO `cargos` VALUES (21,'ENLACE DE INFORMATICA',1);
INSERT INTO `cargos` VALUES (22,'ANALISTA DE INFORMACION Y DOCUMENTACION',1);
INSERT INTO `cargos` VALUES (23,'ANALISTA REGIONAL DE FINANCIAMINETO',1);
INSERT INTO `cargos` VALUES (24,'PROFESIONAL III',1);
INSERT INTO `cargos` VALUES (25,'PROFESIONAL II',2);
INSERT INTO `cargos` VALUES (27,'COORDINADOR MUNICIPAL',22);
INSERT INTO `cargos` VALUES (28,'FISCAL DE REGISTRO CIVIL E IDENTIFICACION',6);
CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(20) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `categoria` VALUES (4,'ESCANER');
INSERT INTO `categoria` VALUES (6,'COPIADORA');
INSERT INTO `categoria` VALUES (7,'MUEBLE DE TRABAJO');
INSERT INTO `categoria` VALUES (11,'IMPRESORA');
INSERT INTO `categoria` VALUES (16,'COMPUTADORA');
INSERT INTO `categoria` VALUES (29,'FSDFSDFS');
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `inventario` VALUES (7,'compu','siragon','codigaso','asdasdas','DETERIORADO','2',1,4);
INSERT INTO `inventario` VALUES (8,'LAPTOP','HP','codigo','UFTP','USADO','1',55,16);
INSERT INTO `inventario` VALUES (11,'PLAY STATION 5','SONY','COD12345','M3000','NUEVO','1',3,7);
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL DEFAULT '0',
  `password` varchar(200) NOT NULL DEFAULT '0',
  `quest` int(11) NOT NULL DEFAULT 0,
  `resp` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `user` VALUES (30,'jason','$2b$08$rHnalgehj2P7JlL3aQzNLuVR6myMNFhjx0Czz.PDYEc2gDZ4TSleu',4,'valera');
INSERT INTO `user` VALUES (36,'wilson','$2b$08$.8C5xsAFZ.tz6x2Qf/3W0O9ZZbzGyoYNmeH9mD2Rvdj7j4vCxNlCy',2,'fido');
CREATE TABLE `departamento` (
  `id_departamento` int(11) NOT NULL AUTO_INCREMENT,
  `departamento` varchar(100) DEFAULT '0',
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `departamento` VALUES (1,'COORDINACION REGIONAL DE LOGISTICA Y PRODUCCION ');
INSERT INTO `departamento` VALUES (3,'COORDINACION REGIONAL DE LA JUNTA NACIONAL ELECTORAL ');
INSERT INTO `departamento` VALUES (5,'COORDINACION REGIONAL DE REGISTRO');
INSERT INTO `departamento` VALUES (55,'COORDINACION REGIONAL DE REGISTRO CIVIL ELECTORAL Y SUPERVISION ');
INSERT INTO `departamento` VALUES (59,'COORDINACION REGIONAL DE GESTION ADMINISTRATIVA');
