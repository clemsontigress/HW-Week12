var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "MarlieJade",
  database: "employeeTrackerDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // run the start function after the connection is made to prompt the user
  start();
  //connection.end()
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View employees by department",
        "View all employees by manager",
        "Add employee",
        "Update employee",
        "Update role",
        "Update manager"
      ]
    })
    .then(function(answer) {
      console.log(answer.action)
      switch (answer.action) {
      case "View all employees":
        viewEmployees();
        break;

      case "View employees by department":
        viewByDept();
        break;

      case "View all employees by manager":
        viewByMgr();
        break;

      case "Add employee":
        addEmployee();
        break;

      case "Update employee":
        updateEmployee();
        break;
      }
    });
};

function viewEmployees() {
  var query = "SELECT first_name, last_name FROM employee"
  connection.query(query, function(err, res) {
    if(err) throw err;
    console.table(res);
    start();
  });
}

function viewByDept() {
  var query = "SELECT employee.first_name, employee.last_name, department.name FROM department INNER JOIN role_ ON role_.department_id = department.id INNER JOIN employee ON employee.role_id = role_.id"
  connection.query(query, function(err, res) {
    if(err) throw err;
    console.table(res);
    start();
  });
}

function viewByMgr() {
  var query = "SELECT concat(e.first_name, e.last_name) employee, concat(m.first_name, m.last_name) manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id ORDER BY manager;"
  connection.query(query, function(err, res) {
    if(err) throw err;
    console.table(res);
    start();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee first name",
        name: "firstname"
      },
      {
        type: "input",
        message: "Enter employee last name",
        name: "lastname"
      }
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstname,
          last_name: answer.lastname,
          role_id: null,
          manager_id: null
        },
        function(err, res) {
          if (err) {
            throw err;
          }
          console.table(res);
        }
      );
      start();
    });
}

function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Which employee's role would you like to update?",
        name: "updateEmp"
      },
      {
        type: "number",
        message: "What is their new role ID",
        name: "updateRole"
      }
    ])
    .then(function(answer) {
     
      var query = 'UPDATE employee SET role_id=? WHERE first_name= ?'
      connection.query(query,[answer.updateRole, answer.updateEmp],function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}