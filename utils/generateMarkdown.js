// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license=='MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if (license == 'MOZILLA') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license=='MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license == 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0'
  } else if (license == 'MOZILLA') {
    return 'https://opensource.org/licenses/MPL-2.0'
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license=='MIT') {
    return 'This application was licensed under MIT'
  } else if (license == 'IBM') {
    return 'This application was licensed under IBM'
  } else if (license == 'MOZILLA') {
    return 'This application was licensed under MOZILLA'
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 //array main string template
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${(data.description)}

  ## Table of Contents
  [Description](#description)  <br>  
  [Installation](#installation)   
  [Usage](#usage)   
  [License](#license)   
  [Contributing](#contributing)   
  [Tests](#tests)   
  [Questions](#questions)   

  ## Installation
  ${(data.installation)}

  ## Usage
  ${(data.usage)}

  ## License 
  ${renderLicenseSection(data.license)} <br> 
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${(data.contributing)}

  ## Tests
  ${(data.tests)}

  ## Questions
  ${(data.questions)}

`;
}

module.exports = generateMarkdown;
