// Global variables to store scores
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please choose either 'rock', 'paper', or 'scissors':").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice! Please choose either 'rock', 'paper', or 'scissors':").toLowerCase();
    }
    return choice;
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++; // Increment humanScore if the human wins
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++; // Increment computerScore if the computer wins
    }

    // Log current scores after each round
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
}




// Example usage:
playRound();
