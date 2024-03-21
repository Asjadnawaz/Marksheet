import inquirer from "inquirer";
import chalk from "chalk";

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




console.log("Total Marks:", 300);
console.log("Obtained Marks:", answer.FirstSubject + answer.SecondSubject + answer.ThirdSubject);
console.log(
  "Percentage:",
  (answer.FirstSubject + answer.SecondSubject + answer.ThirdSubject) / 200 * 100
);

var Grade = (answer.FirstSubject + answer.SecondSubject + answer.ThirdSubject) / 200 * 100;
 


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
