let playerLives = 5
let computerLives = 5
let playerChoice
let computerSelection;

function computerPlay() {
    // randomly generate a number
    computerNumber = Math.floor(Math.random() * 3) + 1;
    // associate number with rock, paper, or scissors
    // if the computer number is 1, return rock
    if (computerNumber === 1) {
        return "Fire"; 
    }
    // if the computer number is 2, return paper
    if (computerNumber === 2) {
        return "Water"; 
    }
    // if the computer number is 3, return scissors
    if (computerNumber === 3) {
        return "Earth"; 
    }
};

// create a program that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // compare playerSelection and computerSelection
    if (playerSelection === "Fire") {
        if (computerSelection === "Water") {
            playerLives -= 1
            selection.textContent = "You shoot out a burst of fire. The computer jets out stream of water."
            results.textContent = "You Lose! " + computerSelection + ' beats ' + playerSelection;
            lives.textContent = "Player Lives: " + playerLives + " | " + "Computer Lives: " + computerLives;
        } else if (computerSelection === "Earth") {
            selection.textContent = "A fire tornado appears from your hands. The computer throws blades of grass towards you."
            computerLives -= 1
            results.textContent = "You Win! " + playerSelection + ' beats ' + computerSelection;
            lives.textContent = "Player Lives: " + playerLives + " | " + "Computer Lives: " + computerLives;
        } else {
            selection.textContent = "You shoot out a burst of flames. The computer counters with flames as well."
            results.textContent = "It's a tie! Computer has also selected " + playerSelection;
            lives.textContent = "Player Lives: " + playerLives + " | " + "Computer Lives: " + computerLives;
        }
    } else if (playerSelection === "Water") {
        if (computerSelection === "Fire") {
            selection.textContent = "You shoot out a jet of water. The computer hurls flames at you."
            computerLives -= 1
            results.textContent = "You Win! " + playerSelection + ' beats ' + computerSelection;
            lives.textContent = "Player Lives: " + playerLives + " | " + "Computer Lives: " + computerLives;
        } else if (computerSelection === "Earth") {
            selection.textContent = "You shoot out a jet of water. The computer throws blades of grass at you."
            playerLives -= 1
            results.textContent = "You Lose! " + computerSelection + ' beats ' + playerSelection;
            lives.textContent = "Player Lives: " + playerLives + " | " + "Computer Lives: " + computerLives;
        } else if (playerSelection === 'Water') {
            selection.textContent = "You shoot out a jet of water. The also streams a jet of water."
            results.textContent = "It's a tie! Computer has also selected " + playerSelection;
            lives.textContent = "Player Lives: " + playerLives + " | " + "Computer Lives: " + computerLives;
        }
    } else if (playerSelection === 'Earth') {
        if (computerSelection === "Water") {
            selection.textContent = "You shoot blades of grass from your palms. The computer streamlines water at you."
            computerLives -= 1
            results.textContent = "You Win! " + playerSelection + ' beats ' + computerSelection;
            lives.textContent = "Player Lives: " + playerLives + " | " + "Computer Lives: " + computerLives;
        } else if (computerSelection === "Fire") {
            selection.textContent = "You shoot blades of grass from your palms. The computer hurls flames at you."
            playerLives -= 1
            results.textContent = "You Lose! " + computerSelection + ' beats ' + playerSelection;
            lives.textContent = "Player Lives: " + playerLives + " | " + "Computer Lives: " + computerLives;
        } else if (playerSelection === 'Earth') {
            selection.textContent = "You shoot blades of grass from your palms. The computer also aims grass at you."
            results.textContent = "It's a tie! Computer has also selected " + playerSelection;
            lives.textContent = "Player Lives: " + playerLives + " | " + "Computer Lives: " + computerLives;

        }
}
};


const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id;
        let computerSelection = computerPlay();
        playRound(playerChoice, computerSelection);
        checkScores(playerLives, computerLives);
    })
});

function checkLives(playerLives, computerLives) {
    if (computerLives == 0) {
        finalScores.textContent = "You beat the computer. Congratulations!";
    } else if (playerLives == 0) {
        finalScores.textContent = "You have perished at the hands of the computer.";
    }
    alert("New Game?")
    reset()
    location.reload()
}

function reset() {
    computerLives = 0
    playerLives = 0
}
