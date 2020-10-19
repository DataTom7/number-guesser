let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const getAbsoluteDistance = (guess, target) => {
    return Math.abs(guess - target)
}

const compareGuesses = (userGuess, computerGuess, target) => {
    getAbsoluteDistance(userGuess, target) > getAbsoluteDistance(computerGuess, target) ? true : false;
}

const updateScore = (winner) => {
    winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => {
    currentRoundNumber++;
}

