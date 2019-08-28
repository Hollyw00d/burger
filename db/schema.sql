CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
   id INT NOT NULL AUTO_INCREMENT,
   burger_name VARCHAR(100) NOT NULL,
   devoured BOOLEAN NOT NULL,
   PRIMARY KEY ( id )
);

INSERT INTO burgers (
    burger_name,
    devoured
)
VALUES ('Impossible WHOPPER Burger', false);

INSERT INTO burgers (
    burger_name,
    devoured
)
VALUES ('Mushroom Burger', false);

INSERT INTO burgers (
    burger_name,
    devoured
)
VALUES ('Boca Vegan Burger', false);