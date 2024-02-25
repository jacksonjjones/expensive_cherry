const inquirer = require("inquirer");
const fs = require('fs');
const { Square, Triangle, Circle } = require("./shapes");

function writeToFile(filename, answers) {
    let svgString = "";

    // Opening SVG tag with width and height attributes
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    // Shape content
    let shape;
    switch (answers.shape.toLowerCase()) {
        case 'square':
            shape = new Square();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        case 'circle':
            shape = new Circle();
            break;
    }

    // Set the shape color
    shape.setColor(answers['shape-color']);

    // Render the shape as SVG
    const shapeContent = shape.render();

    // Append the shape SVG content to the group
    svgString += shapeContent;

    // Text content
    svgString += `<text x="150" y="110" text-anchor="middle" font-size="40" fill="${answers['text-color']}">${answers.text}</text>`;

    // Closing SVG tag
    svgString += "</svg>";

    // Write the SVG content to a file
    fs.writeFile(filename, svgString, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`SVG file "${filename}" created successfully.`);
        }
    });
}

// Function to initialize the app
function init() {
    // Prompt user with questions
    inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "Enter up to (3) Characters:"
            },
            {
                type: "list",
                name: "shape",
                message: "What shape would you like to render?",
                choices: ["Square", "Triangle", "Circle"]
            },
            {
                type: "input",
                name: "text-color",
                message: "Choose a text-color (Enter a color keyword or a hexadecimal number)"
            },
            {
                type: "input",
                name: "shape-color",
                message: "Choose a shape-color (Enter a color keyword or a hexadecimal number)"
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
