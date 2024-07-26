#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.italic.blueBright("\t\t\t Best of luck! Your Quiz is going to start now..."));  
console.log(chalk.magenta("\t\t\t-----------------------------------------------------"));
const questions = [
  {
    question: chalk.green('What is the capital of Pakistan?'),
    choices: ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
    answer: 'Islamabad',
  },
  {
    question: chalk.green('Who is the founder of Pakistan?'),
    choices: ['Allama Iqbal', 'Muhammad Ali Jinnah', 'Liaquat Ali Khan', 'Benazir Bhutto'],
    answer: 'Muhammad Ali Jinnah',
  },
  {
    question: chalk.green('Which mountain range is located in the north of Pakistan?'),
    choices: ['Himalayas', 'Andes', 'Alps', 'Hindu Kush'],
    answer: 'Hindu Kush',
  },
  {
    question: chalk.green('What is the national flower of Pakistan?'),
    choices: ['Rose', 'Lily', 'Jasmine', 'Sunflower'],
    answer: 'Jasmine',
  },
  {
    question: chalk.green('Which river is the longest in Pakistan?'),
    choices: ['Indus', 'Jhelum', 'Chenab', 'Ravi'],
    answer: 'Indus',
  },
  {
    question: chalk.green('Who is the current Prime Minister of Pakistan (as of 2022)?'),
    choices: ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari', 'Pervez Musharraf'],
    answer: 'Imran Khan',
  },
];

function runQuiz() {
  let score = 0;

  function askQuestion(index:any) {
    if (index === questions.length) {
      console.log(chalk.bold.bgCyanBright(`\t\t\tQuiz finished! Your score is: ${score}/${questions.length}`));
      return;
    }

    const { question, choices, answer } = questions[index];
    inquirer.prompt([
      {
        type: 'list',
        name: 'userAnswer',
        message: question,
        choices: choices,
      },
    ])
    .then((answers:any) => {
      const userAnswer = answers['userAnswer'];
      if (userAnswer === answer) {
        console.log(chalk.bold.yellowBright('Correct!'));
        score++;
      } else {
        console.log(chalk.red(`Incorrect! The correct answer is: ${answer}`));
      }

      askQuestion(index + 1);
    });
  }
  askQuestion(0);
}
runQuiz();

