function main() {
    const MAX_NUM_GAMES = 5;

    const buttons = document.querySelectorAll('.main-button');
    buttons.forEach(btn => {
        btn.addEventListener('click', clickHandler);
    });
    
}

function clickHandler(e) {
    const buttonType = this.getAttribute('id');

    const [resultMsg, result] = playRound(buttonType, computerPlay());

    const msgEle = document.querySelector('#result-msg');
    msgEle.textContent = resultMsg;
    
    const scoreBoard = document.querySelector('#scoreboard');
    let [playerScore, computerScore] = scoreBoard.textContent.split(':').map(n => parseInt(n));

    if (result === 1)
        playerScore++;
    if (result === -1)
        computerScore++;
    scoreBoard.textContent = playerScore + ":" + computerScore;

    // TODO refactor
    const buttons = document.querySelectorAll('.main-button');
    // condition for end game
    if (playerScore >= 5 || computerScore >= 5)
        buttons.forEach(btn => btn.setAttribute('disabled', 'true'));
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.trim().toLowerCase();

    if (playerSelection === computerSelection) {
        return ["It's tie!", 0];
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper")
            return ["You lose! Paper beats rock", -1];
        else if (computerSelection === "scissors")
            return ["You win! Rock beats scissors", 1];
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock")
            return ["You win! Paper beats rock", 1];
        else if (computerSelection === "scissors")
            return ["You lose! Scissors beat paper", -1];
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock")
            return ["You lose! Rock beats scissors", -1];
        else if (computerSelection === "paper")
            return ["You win! Scissors beat paper", 1];
    }
}

function computerPlay() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}



main();
