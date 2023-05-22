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
        type: 'list',
        name: 'toc',
        message: "Table of Contents",
        choices: ['1', '2', '3'] 
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
        name: 'licence',
        message: "Licence",
        choices: ['1', '2', '3'] 
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
];
.then(answers => {
    console.log('Answers', answers)
})
.catch.error('Error', error);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}
// add fs code here to save file 


// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then(function(answers){
        const markdownText = generateMarkdown(answers);
        writeToFile('files', markdownText);
    })
}

// Function call to initialize app
init();
