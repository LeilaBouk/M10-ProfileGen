// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Include other needed files
const HTMLgen = require('./utils/generateHtml');
const internHtml = require('./utils/internHtml');
const engHtml = require('./utils/engHtml');
const doneHtml = require('./utils/doneHtml');

//Classes requirement 
const employee = require('./classes/employee');
const manager = require('./classes/manager');
const intern = require('./classes/intern');
const engineer = require('./classes/engineer');

// MANAGER QUESTIONS -------------------------------------
const Manager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter company name',
            name: 'compName',
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
            choices: ['cat', 'plant', 'candy', 'computer']
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
                    name: 'engID',
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
                    name: 'engGithub',
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
                    name: 'engEmail',
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
                    name: 'engImage',
                    choices: ['cat', 'plant', 'candy', 'computer']
                },
            ])
            .then((answers) => {
                const htmlContent = engHtml(answers);
        
                // Add an engineer
                fs.appendFileSync('./website/index.html', htmlContent, (err) => 
                err ? console.log(err) : console.log('Page Created')
                );
            })
            .then(select)
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
                    name: 'intID',
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
                    name: 'intSchool',
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
                    name: 'intEmail',
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
                    name: 'intImage',
                    choices: ['cat', 'plant', 'candy', 'computer']
                },
            ])
            .then((answers) => {
                const htmlContent = internHtml(answers);
        
                // add an intern
                fs.appendFileSync('./website/index.html', htmlContent, (err) => 
                err ? console.log(err) : console.log('Page Created')
                );
            })
            .then(select)
            break;

// DONE SELECTION -------------------------------------
            case 'Done':
                
                    const htmlContent = doneHtml;
                    // cap off the html file
                    fs.appendFileSync('./website/index.html', htmlContent, (err) => 
                    err ? console.log(err) : console.log('Page Created')
                    );
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


