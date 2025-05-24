const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const gameStatusDiv = document.getElementById("game-status");
const choiceButtons = document.querySelectorAll(".choice-button"); // Select all choice buttons
const resetButton = document.getElementById("reset-button");

let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const computerCode = Math.floor(Math.random() * 3) + 1; // 1-Rock, 2-Paper, 3-Scissors
    switch (computerCode) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

// Function to play a round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = "";

    // Determine the winner
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        result = `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
        computerScore++;
        result = `You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
    }

    // Update scores and status display
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    gameStatusDiv.textContent = result;
}

// Helper function to capitalize the first letter for display
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Add event listeners to choice buttons
choiceButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        // Determine player choice based on the id of the span inside the button
        const playerChoiceId = event.currentTarget.querySelector('span[id]').id;
        let playerChoice;

        if (playerChoiceId === 'rock') {
            playerChoice = 'rock';
        } else if (playerChoiceId === 'paper') {
            playerChoice = 'paper';
        } else if (playerChoiceId === 'mkasi') { // Assuming 'mkasi' means scissors
            playerChoice = 'scissors';
        }

        if (playerChoice) {
            playRound(playerChoice);
        }
    });
});

// Add event listener for the reset button
resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    gameStatusDiv.textContent = "Choose your move!";
});