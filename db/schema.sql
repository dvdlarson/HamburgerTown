CREATE DATABASE hamburgertown;
USE hamburgertown;

CREATE TABLE `burgers` (

	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    devoured boolean not null default 0,
	PRIMARY KEY (id)

);