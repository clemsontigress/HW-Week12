INSERT INTO department (name)
VALUE ("Sales"), ("Engineering"), ("Legal"), ("Finance")

INSERT INTO role_ (title, salary, department_id)
VALUE ("Manager", 200, 4), ("Lead Engineer", 100, 2), ("Lawyer", 150, 3), ("Salesperson", 70, 1), ("Accountant", 100, 4), ("Controller", 60, 4)

INSERT INTO employee (first_name, last_name, role_id)
VALUE ("Ashley", "Rodriguez", 3), ("John","Doe", 6), ("Mike", "Chan", 5), ("Malia", "Brown", 1), ("Sarah", "Lourd", 1)



INSERT INTO department (name)
VALUE ("Sales"), ("Engineering"), ("Legal"), ("Finance")

INSERT INTO role_ (title, salary, department_id)
VALUE ("Manager", 200, 4), ("Lead Engineer", 100, 2), ("Lawyer", 150, 3), ("Salesperson", 70, 1), ("Accountant", 100, 4), ("Controller", 60, 4)

INSERT INTO employee (first_name, last_name, role_id)
VALUE ("Ashley", "Rodriguez", 3), ("John","Doe", 6), ("Mike", "Chan", 5), ("Malia", "Brown", 1), ("Sarah", "Lourd", 1)

UPDATE employee
SET manager_id = 15
WHERE id = 13;