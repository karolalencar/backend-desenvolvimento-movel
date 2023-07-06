DROP DATABASE aa1_des_movel;

CREATE DATABASE aa1_des_movel;

USE aa1_des_movel;

CREATE TABLE products (
    id BINARY(16) NOT NULL,
    name VARCHAR(256) NOT NULL,
    code VARCHAR(256) NOT NULL,
    amount INT NOT NULL,
    description VARCHAR(256) NOT NULL,
    PRIMARY KEY(id)
);