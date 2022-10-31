'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '💥Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12225;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

//DEFINE THE SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //WHEN IS NO INPUT
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '💥 Correct Number';
    displayMessage('💥 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    // IMPLEMEENT HIGHSCORE
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS TO HIGH
  } else if (guess < 0) {
    // document.querySelector('.message').textContent ='❌ Number is lower than 1';
    displayMessage('❌ Number is lower than 1');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > secretNumber ? '⬆ Too High' : '⬇ Too Low';
      displayMessage(guess > secretNumber ? '⬆ Too High' : '⬇ Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').style.backgroundColor = 'red';
      document.querySelector('.message').style.color = 'black';
      displayMessage('💤 You lost the game!!!');
      document.querySelector('body').style.backgroundColor = 'salmon';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⬆ Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💤 You lost the game';
  //       document.querySelector('body').style.backgroundColor = 'salmon';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // WHEN GUESS IS TO LOW
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⬇ Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💤 You lost the game';
  //       document.querySelector('body').style.backgroundColor = 'salmon';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').style.backgroundColor = '#222';
  document.querySelector('.message').style.color = '#eee';
  //   document.querySelector('.message').textContent = 'Start quessing...';
  displayMessage('Start quessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///Coding Challenge #1

/*
Implement a game reset functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
