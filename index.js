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
            name: 'mangid',
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
            name: 'mangoff',
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
            name: 'mangemail',
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
    ])
    // ENGINEER
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

            //INTERN
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
            case 'Done': 
            return;
        }
    })
}
    


// Function to initialize app
function init() {
    Manager()
    .then(select)
}

// Function call to initialize app
init()

//Generate HTML Page

const generateHTML = (Manager) =>

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

<div class="row">

    <div class="card">
        <img src="./assets/marina.png" class="avatar">
        <div class="container">
          <h4><b>Manager</b></h4>
          <p>${Manager.mangName}</p>
          <p>Employee ID: ${Manager.mangid}</p>
          <p>Office No: ${Manager.mangoff}</p>
          <p><a
            href="mailto:${Manager.mangemail}">
            ${Manager.mangemail}</a></p>
        </div>
      </div>

    </div>

    
</body>
</html>
`

.then((data) => {

    console.log(data)
    fs.writeFile('./website/index.html', generateHTML(data), (err) =>
    err ? console.log(err) : console.log('Your page is now available'));
})