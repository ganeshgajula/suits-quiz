var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

console.log(
  chalk.bold.bgRedBright("WELCOME TO - A MULTILEVEL QUIZ ON SUITS\n")
);

console.log(
  chalk.bold.bgBlue(`\nRULES FOR PLAYING THE GAME:
1. Read the question properly and enter (a,b,c,d) as per your choice of answer.
2. There are total 16 Questions 
  a) LEVEL 1 Contains 6 Questions, 5 CORRECT ANSWERS Will TAKE YOU TO LEVEL 2.
  b) LEVEL 2 Contains 5 Questions, 4 CORRECT ANSWERS Will TAKE YOU TO LEVEL 3.
  c) LEVEL 3 Contains 5 Questions, 4 CORRECT ANSWERS & YOU WIN THE QUIZ.
3. EACH CORRECT ANSWER Will REWARD YOU 5 POINTS. 
4. EACH WRONG ANSWER Will COST YOU 2 POINTS. \n`)
);

if (readlineSync.keyInYN(chalk.bgRed("Would you like to play the quiz ?"))) {
  var userName = readlineSync.question(chalk.bold.red("\nWhat's your name ? "));

  console.log(
    chalk.bold.blue(
      "\nWelcome " +
        userName +
        "! Let's See How much do you know about USA’s Suits ? \n"
    )
  );

  console.log(
    chalk.bold.bgYellow(
      "\n LEVEL 1 (5 Correct Answers & You go to next level) \n"
    )
  );

  var levelOneQuestions = [
    {
      question: chalk.green(`What is Harvey Specter’s middle name? 
  a. James
  b. Reginald 
  c. Edward
  d. Richard\n
Enter Your Choice: `),
      answer: "b",
      correctAnswer: "Reginald",
    },
    {
      question: chalk.green(`Where did Rachel earn her law degree ?
  a. Harvard
  b. Cornell
  c. Columbia
  d. NYU\n
Enter Your Choice: `),
      answer: "c",
      correctAnswer: "Columbia",
    },
    {
      question: chalk.green(`In order to save the firm, Jessica once entered into a merger with ? 
  a. Edward Darby 
  b. Charles Forstman
  c. Jack Soloff
  d. Sean Cahill\n
Enter Your Choice: `),
      answer: "a",
      correctAnswer: "Edward Darby",
    },
    {
      question: chalk.green(`Before working at Pearson Hardman, Harvey had a job where ? 
  a. District Attorney’s office  
  b. Bratton Gould
  c. Rand, Kaldor, and Zane
  d. Darby International\n
Enter Your Choice: `),
      answer: "a",
      correctAnswer: "District Attorney’s office",
    },
    {
      question: chalk.green(`The firm hires law graduates from ?
  a. Yale
  b. Columbia
  c. Harvard
  d. Stanford\n
Enter Your Choice: `),
      answer: "c",
      correctAnswer: "Harvard",
    },
    {
      question: chalk.green(`Who plays Harvey Specter ?
  a. Paul Schulze
  b. Erik Palladino
  c. Gabriel Macht   
  d. Glenn Plummer\n
Enter Your Choice: `),
      answer: "c",
      correctAnswer: "Gabriel Macht",
    },
  ];

  var levelTwoQuestions = [
    {
      question: chalk.green(`Who is the firm's expert on all financial matters ?
  a. Charles Forstman
  b. Robert Zane
  c. Jeff Malone
  d. Louis Litt\n
Enter Your Choice: `),
      answer: "d",
      correctAnswer: "Louis Litt",
    },
    {
      question: chalk.green(`Louis has a rivalry with ?
  a. Harvey
  b. Jack
  c. Jenny
  d. Charles\n
Enter Your Choice: `),
      answer: "a",
      correctAnswer: "Harvey",
    },
    {
      question: chalk.green(`Which Former Professional Basketball Player Does Harvey Have On Speed Dial ? 
  a. Kobe Bryant
  b. Magic Johnson
  c. Michael Jordan
  d. Luol Deng\n
Enter Your Choice: `),
      answer: "c",
      correctAnswer: "Michael Jordan",
    },
    {
      question: chalk.green(`Who Paid For Harvey's Tuition To Become A Lawyer ?
  a. Jessica Pearson  
  b. Himself
  c. Daniel Hardman
  d. Alex Williams\n
Enter Your Choice: `),
      answer: "a",
      correctAnswer: "Jessica Pearson",
    },
    {
      question: chalk.green(`After working 12 years for Harvey, Donna goes to work for ?
  a. Louis Litt 
  b. Robert Zane
  c. Ava Hessington
  d. Logan Sanders\n
Enter Your Choice: `),
      answer: "a",
      correctAnswer: "Louis Litt",
    },
  ];

  var levelThreeQuestions = [
    {
      question: chalk.green(`What Is The Name Of Harvey's Younger Brother ?
  a. Marcus Specter
  b. Michael Specter
  c. Matthew Specter
  d. James Specter\n
Enter Your Choice: `),
      answer: "a",
      correctAnswer: "Marcus Specter",
    },
    {
      question: chalk.green(`At the beginning of the series, why does Mike agree to deliver the briefcase for Trevor ? 
  a. So that Trevor would help him get a job.
  b. He needs money to pay for his grandmother’s nursing home care.
  c. He needs money to pay for college tuition.
  d. He has a family member in trouble with the law.\n
Enter Your Choice: `),
      answer: "b",
      correctAnswer:
        "He needs money to pay for his grandmother’s nursing home care.",
    },
    {
      question: chalk.green(`Who sends the tip to the U.S. Attorney’s office that Mike is a fraud ?
  a. Anita Gibbs
  b. Sean Cahill
  c. Charles Forstman
  d. Sheila Sazs\n
Enter Your Choice:`),
      answer: "d",
      correctAnswer: "Sheila Sazs",
    },
    {
      question: chalk.green(`What clue finally makes Louis realize Mike didn’t go to Harvard ?
  a. The Order of the Coif
  b. Harvard Medal of Honor
  c. Quill and Dagger
  d. Law School Trophy\n
Enter Your Choice: `),
      answer: "a",
      correctAnswer: "The Order of the Coif",
    },
    {
      question: chalk.green(`When Mike pleads guilty to committing fraud, he is sentenced to prison for how many years ?
  a. six months
  b. one year
  c. two years
  d. three years\n
Enter Your Choice: `),
      answer: "c",
      correctAnswer: "two years",
    },
  ];

  var highScorers = [
    {
      name: "Shreyas",
      points: "\t80",
    },
    {
      name: "Siddharth",
      points: "\t78",
    },
    {
      name: "Prajakta",
      points: "\t76",
    },
    {
      name: "Abhishek",
      points: "\t70",
    },
    {
      name: "Sushant",
      points: "\t59",
    },
  ];

  function play(question, answer, correctAnswer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log(chalk.bold.bgBlue("You're Right"));
      score = score + 5;
      console.log(chalk.bold.yellow("Your Score is ", score));
      console.log("\n");
    } else {
      console.log(chalk.bold.bgRed("You're Wrong"));
      console.log(chalk.red("The correct answer is ", correctAnswer));
      score = score - 2;
      console.log(chalk.bold.yellow("Your Score is ", score));
      console.log("\n");
    }
  }

  for (var i = 0; i < levelOneQuestions.length; i++) {
    play(
      levelOneQuestions[i].question,
      levelOneQuestions[i].answer,
      levelOneQuestions[i].correctAnswer
    );
  }
  totalScore(score);

  var levelOneScore = score;
  if (levelOneScore >= 23) {
    console.log(
      chalk.bold.bgYellow(
        "\nLETS BEGIN LEVEL 2 (4 Correct Answers & You go to next level)\n"
      )
    );
    for (var i = 0; i < levelTwoQuestions.length; i++) {
      play(
        levelTwoQuestions[i].question,
        levelTwoQuestions[i].answer,
        levelTwoQuestions[i].correctAnswer
      );
    }
    totalScore(score);
  }

  var levelTwoScore = score;
  if (levelTwoScore >= 41) {
    console.log(
      chalk.bold.bgYellow(
        "\nLETS BEGIN LEVEL 3 (4 Correct Answers & You WIN) \n"
      )
    );
    for (var i = 0; i < levelThreeQuestions.length; i++) {
      play(
        levelThreeQuestions[i].question,
        levelThreeQuestions[i].answer,
        levelThreeQuestions[i].correctAnswer
      );
    }
    totalScore(score);
  }
  // var finalScore = score;

  for (var k = 0; k < highScorers.length; k++) {
    var arrScores = [];
    arrScores.push(highScorers[k].points);
  }
  var minPoints = Math.min(arrScores);

  function totalScore(finalScore) {
    for (var k = 0; k < highScorers.length; k++) {
      if (finalScore > 0 && finalScore >= 23 && finalScore <= 30) {
        console.log(chalk.bold.blue("\nYAY! Your Total Score Is ", finalScore));
        console.log(chalk.bold.bgBlue("CONGRATS!! You are now in LEVEL 2"));
        break;
      } else if (finalScore >= 41 && finalScore <= 55) {
        console.log(chalk.bold.blue("\nYAY! Your Total Score Is ", finalScore));
        console.log(chalk.bold.bgBlue("CONGRATS!! You are now in LEVEL 3"));
        break;
      } else if (finalScore > 0 && finalScore >= highScorers[k].points) {
        console.log(chalk.bold.blue("\nYAY! Your Total Score Is ", finalScore));
        console.log(
          chalk.bold.bgBlue(
            "\nCONGRATULATIONS!! You Played Really Well. You Deserve A Place In Our Leaderboard."
          )
        );
        console.log(
          chalk.bold.bgRedBright("Kindly Share The Screenshot of Your Score.")
        );
        break;
      } else if (finalScore > 0 && finalScore < 20) {
        console.log(chalk.bold.blue("\nYour Total Score Is ", finalScore));
        console.log(chalk.bold.yellow("You didn't Qualify to Level 2"));
        console.log(chalk.bold.bgRed("Thanks for Playing!!"));
        break;
      } else if (finalScore > 23 && finalScore < 41) {
        console.log(chalk.bold.blue("\nYour Total Score Is ", finalScore));
        console.log(chalk.bold.yellow("You didn't Qualify to Level 3"));
        console.log(chalk.bold.bgRed("Thanks for Playing!!"));
        break;
      } else if (finalScore < 0) {
        console.log(
          chalk.bold.bgRed(
            "\nSeems like your Score is Negative. YOU LOSE THE QUIZ.. TRY AGAIN"
          )
        );
        break;
      }
    }
  }

  console.log(chalk.bold.bgYellow("\nLeaderBoard"));
  console.log(chalk.bold.bgCyan("Name \t Points"));
  for (var j = 0; j < highScorers.length; j++) {
    console.log(chalk.bold.red(highScorers[j].name, highScorers[j].points));
  }
} else {
  console.log(chalk.bgRedBright("\n Thank you!"));
}
