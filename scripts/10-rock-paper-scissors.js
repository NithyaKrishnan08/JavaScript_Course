let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length); 
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    score.ties++;
    // alert(`User choice: ${userChoice}; Computer choice: ${computerChoice}; Tie; Score: ${score.wins} wins, ${score.losses} losses, ${score.ties} ties`);
    document.querySelector('.js-result').innerHTML = `You tied!`;
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${userChoice}-emoji.png" class="move-icon"><img src="images/${computerChoice}-emoji.png" class="move-icon"> Computer`;
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    score.wins++;
    // alert(`User choice: ${userChoice}; Computer choice: ${computerChoice}; You win; Score: ${score.wins} wins, ${score.losses} losses, ${score.ties} ties`);
    document.querySelector('.js-result').innerHTML = `You win!`;
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${userChoice}-emoji.png" class="move-icon"><img src="images/${computerChoice}-emoji.png" class="move-icon"> Computer`;
  } else {
    score.losses++;
    // alert(`User choice: ${userChoice}; Computer choice: ${computerChoice}; Computer wins; Score: ${score.wins} wins, ${score.losses} losses, ${score.ties} ties`);
    document.querySelector('.js-result').innerHTML = `You lost!`;
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${userChoice}-emoji.png" class="move-icon"><img src="images/${computerChoice}-emoji.png" class="move-icon"> Computer`;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
}

function clickedRock() {
  const userChoice = 'rock';
  const computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
}

function clickedPaper() {
  const userChoice = 'paper';
  const computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
}

function clickedScissors() {
  const userChoice = 'scissors';
  const computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
}

function clickedReset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  updateScoreElement();
  localStorage.removeItem('score');
  // alert('Score reset');
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
