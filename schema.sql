DROP DATABASE IF EXISTS employeeTrackerDB;
CREATE database employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role_ (
  id INT AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUE ("Sales"), ("Engineering"), ("Legal"), ("Finance")

INSERT INTO role_ (title, salary, department_id)
VALUE ("Manager", 200, 4), ("Lead Engineer", 100, 2), ("Lawyer", 150, 3), ("Salesperson", 70, 1), ("Accountant", 100, 4), ("Controller", 60, 4)

INSERT INTO employee (first_name, last_name, role_id)
VALUE ("Ashley", "Rodriguez", 3), ("John","Doe", 6), ("Mike", "Chan", 5), ("Malia", "Brown", 1), ("Sarah", "Lourd", 1)



