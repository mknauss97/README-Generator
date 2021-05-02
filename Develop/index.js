
const fs = require("fs")
const inquirer = require("inquirer")


inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description of your project. "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the steps to install if needed. ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project used for?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license(s) is your project under? ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included and if so how did you make sure it works correctly?"
    },
    {
        type: "input",
        name: "Github",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
])
    .then((data) => {
        const readMeFile = readMe(data);
        fs.writeFile('README.md', readMeFile, (err) =>
            err ? console.log(err) : console.log('You successfully created a README file')
        );
    });
const readMe = data => {
    return `# ${data.title}
    ![license](https://img.shields.io/badge/License-${data.license}-blue?style=for-the-badge&logo=appveyor.svg)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#tests)    
- [Questions](#questions)
     
## Description:
${data.description}
     
## Installation:
${data.installation}
     
## Usage:
${data.usage}
     
## License:

This application is covered by the ${data.license} license. 
     
## Contributions:
${data.contribution}
     
## Tests:
${data.tests}
     
## Questions:
If there are any questions please contact me by the following:
     
## Github
Find me on Github, my username is: [${data.Github}](https://github.com/${data.Github})
     
## Email
Email me at : ${data.email} `;

}
