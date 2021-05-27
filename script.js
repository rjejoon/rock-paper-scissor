

function game() {
    
    const numGames = 5;

    for (let i=0; i<numGames; i++) {
        let playerSelection = prompt("Choose one: Rock, Paper, Scissors");
        console.log(playRound(playerSelection, computerPlay()));    // Does not handle invalid inputs
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.trim().toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's tie!";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper")
            return "You lose! Paper beats rock";
        else if (computerSelection === "scissors")
            return "You win! Rock beats scissors";
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock")
            return "You win! Paper beats rock";
        else if (computerSelection === "scissors")
            return "You lose! Scissors beat paper";
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock")
            return "You lose! Rock beats scissors";
        else if (computerSelection === "paper")
            return "You win! Scissors beat paper";
}

function computerPlay() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}


game();
