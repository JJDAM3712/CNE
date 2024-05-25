CREATE TABLE `asistencia` (
  `id_asistencia` int(11) NOT NULL AUTO_INCREMENT,
  `id_personal` int(11) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `entrada` time NOT NULL,
  `salida` varchar(50) DEFAULT '',
  PRIMARY KEY (`id_asistencia`),
  KEY `FK__personal` (`id_personal`),
  CONSTRAINT `FK__personal` FOREIGN KEY (`id_personal`) REFERENCES `personal` (`id_personal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `asistencia` VALUES (25,11,'2024-05-25','00:58:34','00:58:38');
INSERT INTO `asistencia` VALUES (26,13,'2024-05-25','01:37:42','01:37:47');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `visita` VALUES (1,'jason','27512863',55,'visita','2024-05-21','13:26:38','14:50:22');
INSERT INTO `visita` VALUES (4,'JOSE','1234567',55,'VISITA','2024-05-22','20:45:09','23:39:32');
INSERT INTO `visita` VALUES (9,'JASON','12345679',5,'PORQ SI','2024-05-25','01:44:40','01:44:54');
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `personal` VALUES (11,'WILSON','LOPEZ','27512863','04120635755',28,6);
INSERT INTO `personal` VALUES (13,'JASON','AGUILAR','31814881','04165639694',11,1);
INSERT INTO `personal` VALUES (14,'MAGALY','MORALES','12906825','041200024314',25,3);
INSERT INTO `personal` VALUES (15,'FULANO','DE TAL','10039179','04262645920',17,1);
CREATE TABLE `cargos` (
  `id_cargo` int(11) NOT NULL AUTO_INCREMENT,
  `cargo` varchar(100) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `cargos` VALUES (8,'COORDINADOR REGIONAL DE GESTION TECNICA ADMINISTRATIVA',1);
INSERT INTO `cargos` VALUES (9,'OBRERO GENERAL',1);
INSERT INTO `cargos` VALUES (10,'DIRECTOR REGIONAL ELECTORAL',1);
INSERT INTO `cargos` VALUES (11,'INSPECTOR DE SEGURIDAD',2);
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
INSERT INTO `cargos` VALUES (25,'PROFESIONAL II',2);
INSERT INTO `cargos` VALUES (28,'FISCAL DE REGISTRO CIVIL E IDENTIFICACION',6);
CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(20) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `categoria` VALUES (4,'ESCANER');
INSERT INTO `categoria` VALUES (7,'MUEBLE DE TRABAJO');
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `inventario` VALUES (7,'PC DESKTOP','DELL','555555','SISO','USADO','21',7,4);
INSERT INTO `inventario` VALUES (8,'ASDSA','HP','22555','SADSAD','NUEVO','15',5,4);
INSERT INTO `inventario` VALUES (9,'JOSE','VAIO','F<DSFSFA','XD','NUEVO','1',1,12);
INSERT INTO `inventario` VALUES (10,'JOSE','SAMSUNG','CODIGO1234','XD','NUEVO','1',1,12);
INSERT INTO `inventario` VALUES (11,'JOSE','SIRAGON','FDSFSFAGGGGGG','XD','NUEVO','1',1,12);
INSERT INTO `inventario` VALUES (12,'JOSE','ALIENWARE','CODIGO1234','XD','NUEVO','1',6,12);
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL DEFAULT '0',
  `password` varchar(200) NOT NULL DEFAULT '0',
  `quest` int(11) NOT NULL DEFAULT 0,
  `resp` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `user` VALUES (7,'ddavid1','$2b$08$uYz.EcoowgOTs2VI2BbaqOMySutkEOPztqwp7mJkvVswUcxcSiUrG',1,'res');
INSERT INTO `user` VALUES (8,'jason','$2b$08$e.WLBoE1mE1YMKjtkR2ukOWh3McOttFCBhzypEFBJJ7ALzkvEh3L.',2,'fifi');
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
