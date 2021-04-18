//dependencies: inquirer, FS, tests?
//inquirer prompt for user input 
// user input creates team manager object with name, employee ID, email, and office number.
// user input creates engineer object with name, ID, email, and github username.
// user input creates intern object with name, ID, email, and school.

const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./employee.js');
const manager = require('./manager.js');
const engineer = require('./engineer.js');
const intern = require('./intern.js');


genManager() {
// this is a manager only
// use inquirer prompt

}

genEmployee() {
//this is either an engineer or an intern
// use inquirer prompt to choose either occupation and then depending on the one chosen, execute generator function for that one

}

genEngineer() {


}


genIntern() {


}

// I need objects to be created via inquire prompts
// then I need 