//TODO PLAN
//* Create getComputerChoice() function that randomly returns "Rock", "Paper" or "Scissors"
//* Created playerSelection() function which takes user input 
//* Create playRound() function that takes two parameters. playerSelection for player choice and computerSelection for computer choice
//* The playRound() function contains game logic and returns a string stating the player as the winner or loser
//* Create function game() that loops the playRound() function five times
//* After each round, return round number and result

let round = 1;
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        return "Rock";
    }else if(choice === 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

const playerSelection = (selection) => {
    selection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    return selection;
}

const playRound = (playerSelection, computerSelection) => {
    switch (playerSelection) {
        case "rock":
            if(computerSelection === "Rock"){
                return "It's a tie!";
            }else if(computerSelection === "Paper"){
                computerScore++;
                return "You lose! Paper covers Rock!";
            }else{
                playerScore++;
                return "You win! Rock crushes Scissors!";
            }
        case "paper":
            if(computerSelection === "Rock"){
                playerScore++;
                return "You win! Paper covers Rock!";
            }else if(computerSelection === "Paper"){
                return "It's a tie!";
            }else{
                computerScore++;
                return "You lose! Scissors cut Paper!";
            }
        case "scissors":
            if(computerSelection === "Rock"){
                computerScore++;
                return "You lose! Rock crushes Scissors!";
            }else if(computerSelection === "Paper"){
                playerScore++;
                return "You win! Scissors cut Paper!"
            }else{
                return "It's a tie!";
            }
        default:
            return "You're playing the wrong game!";
    }
}

const game = () => {
    for(let i = 0; i < 5; i++){
        console.log(`Round ${round}`);
        round++;
        console.log(playRound(playerSelection(), getComputerChoice()));
    }
    console.log("Game Over");
    if(playerScore > computerScore){
        return "You are a legend!"
    }else{
        return "You lost to your foe!"
    }
}

console.log(game());