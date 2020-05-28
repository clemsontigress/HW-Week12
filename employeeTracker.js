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
        console.log("all employees by mgr");
        break;

      case "Add employee":
        console.log("you are adding employee");
        break;

      case "Update employee":
        console.log("you are updating employee");
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

/*function viewByMgr() {
  var query = "SELECT employee.first_name, employee.last_name, department.name FROM department INNER JOIN role_ ON role_.department_id = department.id INNER JOIN employee ON employee.role_id = role_.id"
  connection.query(query, function(err, res) {
    if(err) throw err;
    console.table(res);
    start();
  });
}*/
