-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

DROP DATABASE IF EXISTS chat;
CREATE DATABASE cowlist;

USE cowlist;

DROP SCHEMA IF EXISTS cow;
CREATE TABLE cow (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  description varchar(255),
  PRIMARY KEY (id)
);