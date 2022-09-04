// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// MANAGER
const Manager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter managers name.',
            name: 'mangName',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Enter employee ID.',
            name: 'id',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter your ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter your office number.',
            name: 'office',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please office number.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter your email.',
            name: 'email',
            validate: email => {

               validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);

                if (validEmail) {
                    return true;
                }
                else {
                    console.log("Please enter a valid email");
                    return false;
                }
            }
        },
    ])
};

//More Employees
const select = () => {

    return inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add en employee?.',
            name: 'empSelect',
            choices: ['Engineer', 'Intern', 'Done']
        },
    ]).then(function (selection) {
        for(let i = 0; i < selection.empSelect; i++) {
            if (selection.empSelect = 0) {
                Engineer();
            }
        }
    })
}

//ENGINEER 
const Engineer = () => {

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter engineers name.',
            name: 'engName',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Enter employee ID.',
            name: 'id',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter your ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter engineers Github name.',
            name: 'github',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter github name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter engineers email.',
            name: 'email',
            validate: email => {

               validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);

                if (validEmail) {
                    return true;
                }
                else {
                    console.log("Please enter a valid email");
                    return false;
                }
            }
        },
    ])
};


// Function to initialize app
function init() {
    select();
}

// Function call to initialize app
init();

// Gotta break this down cause im tired
// Manager prompts are done
//Add options menu which triggers the right prompt area
//Make prompts for the other 3
//After you hit done it triggers the generate function