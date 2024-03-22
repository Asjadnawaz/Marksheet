#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log("---------Marksheet----------");

let answer = await inquirer.prompt([
  {
    message: "Enter Mathematics Marks",
    type: "number",
    name: "FirstSubject",
  },
  {
    message: "Enter Physics Marks",
    type: "number",
    name: "SecondSubject",
  },
  {
    message: "Enter Computer Marks",
    type: "number",
    name: "ThirdSubject",
  },
]);

// -------------------Calculations-----------------------------

// -----------------Declarations-----------------------------
console.log("-----------------------------");

var subjects: number =
  answer.FirstSubject + answer.SecondSubject + answer.ThirdSubject;
var totalmarks: number = 300;

// --------------------------------------------------------------

console.log("Total Marks:", totalmarks);
console.log("Obtained Marks:", subjects);
console.log("Percentage:", (subjects / totalmarks) * 100);

var Grade = (subjects / totalmarks) * 100;

//-------------Grades------------------

if (Grade >= 80) {
  console.log("Grade:" + " " + chalk.yellow("A+"));
} else if (Grade >= 70) {
  console.log("Grade:" + " " + chalk.yellow("A"));
} else if (Grade >= 60) {
  console.log("Grade:" + " " + chalk.yellow("B"));
} else if (Grade >= 50) {
  console.log("Grade:" + " " + chalk.yellow("C"));
} else if (Grade >= 40) {
  console.log("Grade:" + " " + chalk.yellow("D"));
} else {
  console.log("Grade:" + " " + chalk.yellow("Fail"));
}

//-------------Remarks--------------------

if (Grade >= 80) {
  console.log("Remarks:" + " " + chalk.yellow("Kia baat hai chah gaya tu to"));
} else if (Grade >= 70) {
  console.log("Remarks:" + " " + chalk.yellow("bhot badiya kia baat hai"));
} else if (Grade >= 60) {
  console.log("Remarks:" + " " + chalk.yellow("munasib sa hai bas"));
} else if (Grade >= 50) {
  console.log("Remarks:" + " " + chalk.yellow("sahi hai bas"));
} else if (Grade >= 40) {
  console.log("Remarks:" + " " + chalk.yellow("kia karaha hai kuch parhliya kar kabhi"));
} else {
  console.log("Remarks:" + " " + chalk.yellow("nikal pheli forsat main nikal"));
}

