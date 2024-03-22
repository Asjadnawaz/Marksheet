#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("---------1st Year Marksheet----------");
let answer = await inquirer.prompt([
    {
        message: "Enter Mathematics Marks",
        type: "number",
        name: "FirstSubject",
    },
    {
        message: "Enter Physics Marks (With Practical)",
        type: "number",
        name: "SecondSubject",
    },
    {
        message: "Enter Computer Marks (With Practical)",
        type: "number",
        name: "ThirdSubject",
    },
    {
        message: "Enter English Marks",
        type: "number",
        name: "ForthSubject",
    },
    {
        message: "Enter Urdu Marks",
        type: "number",
        name: "FifthSubject",
    },
    {
        message: "Enter Islamiat Marks",
        type: "number",
        name: "SixthSubject",
    },
]);
// -------------------Calculations-----------------------------
// -----------------Declarations-----------------------------
console.log("-----------------------------");
var subjects = answer.FirstSubject + answer.SecondSubject + answer.ThirdSubject + answer.ForthSubject + answer.FifthSubject + answer.SixthSubject;
var totalmarks = 1100;
// --------------------------------------------------------------
console.log("Total Marks:", totalmarks);
console.log("Obtained Marks:", subjects);
console.log("Percentage:", (subjects / totalmarks) * 100);
var Grade = (subjects / totalmarks) * 100;
//-------------Grades------------------
if (Grade >= 80) {
    console.log("Grade:" + " " + chalk.yellow("A+"));
}
else if (Grade >= 70) {
    console.log("Grade:" + " " + chalk.yellow("A"));
}
else if (Grade >= 60) {
    console.log("Grade:" + " " + chalk.yellow("B"));
}
else if (Grade >= 50) {
    console.log("Grade:" + " " + chalk.yellow("C"));
}
else if (Grade >= 40) {
    console.log("Grade:" + " " + chalk.yellow("D"));
}
else {
    console.log("Grade:" + " " + chalk.yellow("Fail"));
}
//-------------Remarks--------------------
if (Grade >= 80) {
    console.log("Remarks:" + " " + chalk.yellow("Kia baat hai chah gaya tu to"));
}
else if (Grade >= 70) {
    console.log("Remarks:" + " " + chalk.yellow("bhot badiya kia baat hai"));
}
else if (Grade >= 60) {
    console.log("Remarks:" + " " + chalk.yellow("munasib sa hai bas"));
}
else if (Grade >= 50) {
    console.log("Remarks:" + " " + chalk.yellow("sahi hai bas"));
}
else if (Grade >= 40) {
    console.log("Remarks:" + " " + chalk.yellow("kia karaha hai kuch parhliya kar kabhi"));
}
else {
    console.log("Remarks:" + " " + chalk.yellow("nikal pheli forsat main nikal"));
}
