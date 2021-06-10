const MAX_NUM_GAMES = 5;

const buttons = document.querySelectorAll('.main-button');
const restartBtn = document.querySelector('#restart-button');
const playerScoreEle = document.querySelector('#player-score');
const computerScoreEle = document.querySelector('#computer-score');
const msgEle = document.querySelector('#result-msg');

buttons.forEach(btn => btn.addEventListener('click', clickHandler));

restartBtn.addEventListener('click', restartGame);
    

function clickHandler(e) {
    const buttonType = this.getAttribute('id');

    const [resultMsg, result] = playRound(buttonType, computerPlay());

    msgEle.textContent = resultMsg;

    let playerScore = parseInt(playerScoreEle.textContent);
    let computerScore = parseInt(computerScoreEle.textContent);
    
    if (result === 1) playerScore++;
    if (result === -1) computerScore++;

    playerScoreEle.textContent = playerScore;
    computerScoreEle.textContent = computerScore;

    // condition for end game
    if (isEndGame(playerScore, computerScore)) {
        buttons.forEach(btn => btn.setAttribute('disabled', 'true'));
        
        restartBtn.style.display = 'block';
        restartBtn.style.opacity = 1;
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.trim().toLowerCase();

    if (playerSelection === computerSelection) {
        return ["It's tie!", 0];
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return ["You lose! Paper beats rock", -1];
        }
        else if (computerSelection === "scissors") {
            return ["You win! Rock beats scissors", 1];
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return ["You win! Paper beats rock", 1];
        }
        else if (computerSelection === "scissors") {
            return ["You lose! Scissors beat paper", -1];
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return ["You lose! Rock beats scissors", -1];
        }
        else if (computerSelection === "paper") {
            return ["You win! Scissors beat paper", 1];
        }
    }
}

function computerPlay() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function isEndGame(playerScore, computerScore) {
    return playerScore >= MAX_NUM_GAMES || computerScore >= MAX_NUM_GAMES;
}

function restartGame() {
    playerScoreEle.textContent = 0;
    computerScoreEle.textContent = 0;
    msgEle.textContent = '';

    buttons.forEach(btn => btn.removeAttribute('disabled'));
}


