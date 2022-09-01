// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = () => {

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

// Function to initialize app
function init() {
    questions()
 
}

// Function call to initialize app
init();