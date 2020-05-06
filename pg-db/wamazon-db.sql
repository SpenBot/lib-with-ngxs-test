
-- Drop Database ------------------------------

DROP DATABASE IF EXISTS wamazon_db;


-- Create Database and Connect -----------------

CREATE DATABASE wamazon_db;
\c wamazon_db;


-- Inventory Table and Inserts -----------------

CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  item_name VARCHAR NOT NULL,
  item_price INTEGER NOT NULL
);

INSERT INTO inventory (item_name, item_price) VALUES
  ('Television', 300),
  ('Laptop', 599),
  ('Smart Phone', 789),
  ('Tablet', 699),
  ('Mouse', 26),
  ('Keyboard', 31),
  ('Nintendo', 249);


-- Confirm Inserts -----------------------------

SELECT * FROM inventory;
