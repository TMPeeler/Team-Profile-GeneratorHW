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

        genEmployee();
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
        if (response === 'Engineer') {
            genEngineer();

        } else if (response === 'Intern') {
            genIntern();
        } else {

            //quit or writepage function
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


        // let internText = ``;
    });
}


generateHTML() {
    let basehtml = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <title>Team Profile Generator</title>
</head>

<body>
    <div class="hero is-fullheight">
        <div class="columns">
            <div class="column is-12 ">`
            // ${manager.card}

            // ${moreMembers}



    let endinghtml =
           ` </div>
            </div>
        </div>
    </body>
    
    </html>`;

    const moreMembers = function() {
        if (Team.length > 3) {
            return ``;
        }
        return;
    }



     //put the cards you make from each into template literals
    
}
showPage() {

//write file
    // fs.writeFile('teamProfile.html', html)

}
// I need objects to be created via inquire prompts
// then I need 