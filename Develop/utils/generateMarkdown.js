// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return 
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>
  


##Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#tests)
- [Questions](#questions)

##Description
${data.description}

##Installation
${data.installation}

##Usage
${data.usage}

##License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license. 

##Contributions
${data.contribution}

##Tests
${data.tests}

##Questions
${data.questions}

##Github
Find me on Github, my username is: [${data.Github}](https://github.com/${data.Github})

##Email
Email me at : ${data.email}
`;
}



module.exports = generateMarkdown;
