//dependencies: inquirer, FS, tests?
//inquirer prompt for user input 
// user input creates team manager object with name, employee ID, email, and office number.
// user input creates engineer object with name, ID, email, and github username.
// user input creates intern object with name, ID, email, and school.

const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./employee');
const manager = require('./manager');
const engineer = require('./engineer');
const intern = require('./intern');
const Manager = require('./manager');

const Team = [];

function genManager() {
// this is a manager only
// use inquirer prompt
 return inquirer.prompt([
     
    {
        type: 'input', 
        message: 'Please enter the name of your project manager: ',
        name: 'name'
    },
    {
        type: 'input', 
        message: "Please enter your manager's employee ID: ",
        name: 'id'
    },
    {
        type: 'input', 
        message: "Please enter your manager's email address: ",
        name: 'email'
    },
    {
        type: 'input', 
        message: "Please enter your manager's office number: ",
        name: 'office'
    }
 ]).then((response) => {

    var manager1 = new manager(response.name, response.id, response.email, response.officeNumber)
    Team.push(manager1);


    // let managerText = `
    
    // <h1> ${manager1.getname} 
    
    // `;
 }
 );
}


function genEmployee() {
//this is either an engineer or an intern
// use inquirer prompt to choose either occupation and then depending on the one chosen, execute generator function for that one
return inquirer.prompt([

    {
        type: 'input', 
        message: 'Please choose to add one of the following to your team: ',
        choices: [
            'Engineer',
            'Intern', 
            "I'm done adding team members"
        ]
        },

    ]).then((response) => {
        if(response === 'Engineer') {
            genEngineer();

        }else if (response === 'Intern') {
            genIntern();
        } else {

            //quit
        }
    })
}

function genEngineer() {
    return inquirer.prompt([
    
        {
            type: 'input', 
            message: 'Please enter the name of your engineer: ',
            name: 'name'
        },
        {
            type: 'input', 
            message: "Please enter your engineer's employee ID: ",
            name: 'id'
        },
        {
            type: 'input', 
            message: "Please enter your engineer's email address: ",
            name: 'email'
        },
        {
            type: 'input', 
            message: "Please enter your engineer's github username: ",
            name: 'github'
        }
    ]).then((response) => {

        var engineer1 = new engineer(response.name, response.id, response.email, response.github);
        Team.push(engineer1);

        // let engineerText = ``;
    });


    
}


function genIntern() {
    return inquirer.prompt([
     
        {
            type: 'input', 
            message: 'Please enter the name of your intern: ',
            name: 'name'
        },
        {
            type: 'input', 
            message: "Please enter your intern's employee ID: ",
            name: 'id'
        },
        {
            type: 'input', 
            message: "Please enter your intern's email address: ",
            name: 'email'
        },
        {
            type: 'input', 
            message: "Please enter your intern's school: ",
            name: 'school'
        }
    ]).then((response) => {
        var intern1 = new intern(response.name, response.id, response.email, response.github);
        Team.push(intern1);

        
        let internText = ``;
    });
}

// I need objects to be created via inquire prompts
// then I need 