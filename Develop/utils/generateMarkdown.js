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
  return `# ${data.title} <br>
  <br>
  ## Description <br>
  ${data.description}
  <br>
  ### Table of Contents <br>
  ${data.tableOfContents}
  <br>
  #### Installation <br>
  ${data.installation}
  <br>
  #### Usage <br>
  ${data.usage}
  <br>
  #### License <br>
  ${data.license}
  <br>
  #### Contributors <br>
  ${data.contributors}
  <br>
  ### Tests <br>
  ${data.tests}
  <br>
  #### Questions <br>
  ${data.questions}
  <br>
  `;
}



module.exports = generateMarkdown;
