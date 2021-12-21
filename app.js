const fs = require('fs')
const inquirer = require('inquirer');
console.log(inquirer)
const generatePage = require('challenge-9-README/src/page-template.js');

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
    ]);
};

const promptProject = portfolioData => {
    console.log(`
    =================
    Add a New Project
    =================
    `);

    if(!portfolioData.projects) {
    portfolioData.projects = [];
    }
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
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
            type: 'checkbox',
            name: 'licenses',
            message: 'What license would you like to include? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter deployed website link to your project (Required)',
            validate: linkInput => {
                if (linkInput){
                    return true;
                } else {
                    console.log ('You need to enter a project GitHub Link!');
                    return false;
                }
            }
        },
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
    
};



promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);

      const pageHTML = generatePage(portfolioData);
    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out index.html in this directory to see it!');
    });
});


