-- Don't forget to add your create table SQL 
CREATE TABLE items (
id SERIAL PRIMARY KEY,
name varchar(80),
quantity decimal,
unit varchar(20),
purchased boolean
);
-- It is also helpful to include some test data
INSERT INTO "items" ("name", "quantity", "unit", "purchased")
VALUES ('Apples', 5, 'lbs', false), ('Bread', 1, 'loaf', false), 
('Milk', 1, 'gallon', false), ('Sliced Almonds', 2, 'cups', false),
('Bananas', 1, 'bunch', true);
