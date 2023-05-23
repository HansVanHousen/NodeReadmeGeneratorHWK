// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Title"
    },
    {
        type: 'input',
        name: 'description',
        message: "Description"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Installation"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Usage"
    },
    {
        type: 'list',
        name: 'license',
        message: "License",
        choices: ['MIT', 'IBM', 'MOZILLA']
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Contributing"
    },
    {
        type: 'input',
        name: 'questions',
        message: "Questions"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Tests"
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(`Error writing ${fileName}:`, err);
        } else {
            console.log(`${fileName} created successfully!`);
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile('./utils/README.md', markdownText);
    })
}

// Function call to initialize app
init();
