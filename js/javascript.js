function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    // Random # between 0 & 3

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
    // Prompt for their choice
    let choice = prompt("Please choose either 'rock', 'paper', or 'scissors':").toLowerCase();

    // Validate the input
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice! Please choose either 'rock', 'paper', or 'scissors':").toLowerCase();
    }

    // Return the choice
    return choice;
}


console.log(getHumanChoice());
