const generateMarkDown = (data) => {
return ` # ${data.title}
## Description
${data.description}
## Table of Contents
* [Usage](#usage)
* [Installation](#installation)
* [Contributors](#contributors)
* [Tests](#tests)
* [Licenses](#licenses)
* [Contact](#contact)
## Usage
${data.usage}
## Installation
${data.installation}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Licenses
${data.licenses}
## Contact
${data.email}
`
}

module.exports = generateMarkDown

