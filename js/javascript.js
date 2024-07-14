function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const choices = ["rock", "paper", "scissors"];

    for (let i = 0; i < 5; i++) {
        // Prompt user for choice
        let humanChoice = prompt(`Round ${i + 1}: Please choose either 'rock', 'paper', or 'scissors':`).toLowerCase();
        
        // Validate user input
        while (!choices.includes(humanChoice)) {
            humanChoice = prompt("Invalid choice! Please choose either 'rock', 'paper', or 'scissors':").toLowerCase();
        }

        // Generate computer's choice
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        // Determine round winner and update scores
        if (humanChoice === computerChoice) {
            console.log("Round is a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win the round! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`Computer wins the round! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        console.log(`Score: You ${humanScore} - ${computerScore} Computer\n`);
    }

    // Determine overall winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lose the game. Better luck next time!");
    } else {
        console.log("The game ends in a tie!");
    }
}

// Example usage:
playGame();
