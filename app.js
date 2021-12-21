const fs = require('fs')
const inquirer = require('inquirer');
const path =require("path");
console.log(inquirer);
const generateMarkDown = require('./src/page-template.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput){
                return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a installation instructions for your project (Required)',
            validate: installationInput => {
                if (installationInput){
                return true;
                } else {
                    console.log('You need to enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a usage instructions for your project (Required)',
            validate: usageInput => {
                if (usageInput){
                return true;
                } else {
                    console.log('You need to enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please list any contributors to the project(Required)',
            validate: contributorInput => {
                if(contributorInput) {
                    return true;
                } else {
                    console.log('You need to enter contributors!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to include?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter deployed website link to your project (Required)',
            validate: linkInput => {
                if (linkInput){
                    return true;
                } else {
                    console.log ('You need to enter a project link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
            default: 'npm test',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter an email address (Required)',
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log ('You need to enter an email!');
                    return false;
                }
            }
        },
    ])
    .then(answer => {
        console.log(answer)
        writeToFile("readme.md", generateMarkDown({
            ...answer
        }))
    });
    
};

const writeToFile = (filename, data) => {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}


promptUser()



