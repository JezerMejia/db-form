CREATE DATABASE DBForm
GO

USE DBForm
GO

CREATE TABLE Product(
    id int PRIMARY KEY NOT NULL IDENTITY(1,1),
    name text NOT NULL,
    description text,
    price NUMERIC NOT NULL,
)
GO

