const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle } = require("./shapes.js");

// Creates a function to create the SVG
function writeToFile {

}

// Creates a function to initialize app
function init() {
    // Prompt user with questions
    inquirer
        .prompt([
            {
                type:"input",
                name:"text",
                message:"Enter up to (3) Characters:"
            },
            {
                type:"input",
                name:"shape",
                message:"What shape would you like to render?",
                choices: ["Square", "Triangle", "Circle"]
            },
            {
                type:"input",
                name:"text-color",
                message:"Choose a text-color (Enter a color keyword or a hexadecimal number"
            },
            {
                type:"input",
                name:"shape-color",
                message:"Choose a text-color (Enter a color keyword or a hexadecimal number"
            },
        ])
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Must enter a value up to 3 characters long");
                init();
            } else {
              writeToFile("logo.svg", answers);  
            }
        });
}

// Function call to initialize app
init();