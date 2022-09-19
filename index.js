// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Include other needed files
const HTMLgen = require('./utils/generateHtml');

//employees array
const Employees = [];

// MANAGER QUESTIONS -------------------------------------
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
            name: 'mangID',
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
            name: 'mangOffice',
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
            name: 'mangEmail',
            validate: email => {

               validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);

                if (validEmail) {
                    return true;
                }
                else {
                    console.log(" < Please enter a valid email");
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Please choose a profile image',
            name: 'mangImage',
            choices: ['Eel', 'Tree', 'Jindo', 'Computer', 'Marina']
        },
    ])
};

// EMPLOYEE SELECT -------------------------------------
const select = () => {

    return inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an employee?.',
            name: 'empSelect',
            choices: ['Engineer', 'Intern', 'Done']
        },
    ])

// ENGINEER QUESTIONS -------------------------------------
    .then((answer) => {
        switch (answer.empSelect) {
            case 'Engineer': 
            inquirer.prompt([
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
                            console.log(" < Please enter a valid email");
                            return false;
                        }
                    }
                },
            ])
            break;

// INTERN QUESTIONS -------------------------------------
            case 'Intern': 
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter interns name.',
                    name: 'intName',
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
                    message: 'Enter interns school.',
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
                    message: 'Enter interns email.',
                    name: 'email',
                    validate: email => {
        
                       validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        
                        if (validEmail) {
                            return true;
                        }
                        else {
                            console.log(" < Please enter a valid email");
                            return false;
                        }
                    }
                },
            ])
            break;

// DONE SELECTION -------------------------------------
            case 'Done': 
            return;
        }
    })
}
    


// Function to initialize app
function init() {
    Manager()
    .then((answers) => {
        const htmlContent = HTMLgen(answers);

        // Copy the CSS sample file
        fs.copyFile('./dist/style.css', './website/style.css' , (err) => 
        err ? console.log(err) : console.log('Page Created'))

        // Create the index with info filled in
        fs.writeFile('./website/index.html', htmlContent, (err) => 
        err ? console.log(err) : console.log('Page Created')
        );
    })
    .then(select)

}

// Function call to initialize app
init()


//=============================================================================
// TO DO
// SO after each employee the data should be written and added to the array
// After its written then ask again if an employee should be added