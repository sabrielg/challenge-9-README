function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
  }
  
  
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `\n* [License](#license)\n`;
    }
    return '';
  }
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
  This project is licensed under the ${license} license.`;
    }
    return '';
  }

const generateMarkDown = (data) => {
return ` # ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Installation](#installation)
* [Contributors](#contributors)
* [Tests](#tests)
* [Contact](#contact)
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Installation
${data.installation}
## Contributors
${data.contributors}
## Test
${data.test}
## Contact
If you have any questions about the repo, open an issue or contact me directly at
${data.email}. 
You can find more of my work at [${data.github}](https://github.com/${data.github}/).`
}


module.exports = generateMarkDown

