//TODO PLAN v.1
//* Create getComputerChoice() function that randomly returns "Rock", "Paper" or "Scissors"
//* Created playerSelection() function which takes user input 
//* Create playRound() function that takes two parameters. playerSelection for player choice and computerSelection for computer choice
//* The playRound() function contains game logic and returns a string stating the player as the winner or loser
//* Create function game() that loops the playRound() function five times
//* After each round, return round number and result

//* Elements
//Scores
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#comp-score");
//Player Selections
const playerChoice = document.querySelector("#player-choice");
const compChoice = document.querySelector("#comp-choice");
//Rounds & Final Message
const gameMsg = document.querySelector("#game-message");
//Buttons
const roundBtn = document.querySelector("#play");
const resetBtn = document.querySelector("#reset");
//Choices
const playerChoices = document.querySelectorAll(".player-choices-icon");

//* Counters & Other Variables
//Scores
let playerScoreCounter = 0;
playerScore.textContent = playerScoreCounter;
let compScoreCounter = 0;
compScore.textContent = compScoreCounter;
//Round Counter
let roundCounter = 1;
gameMsg.textContent = `Round ${roundCounter}`;
//Choices
let choiceMade = false;

//* Functions
//Selects a random number between 0 - 2 and returns a string as a game option
//Changes icon according to number of choice
function computerSelection(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        compChoice.setAttribute("d", "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9");
        return "rock";  
    }else if(choice === 1){
        compChoice.setAttribute("d", "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z");  
        return "paper";
    }else{
        compChoice.setAttribute("d", "M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664");
        return "scissors";
    }
}
//Triggers as player selects an option and uses the result of computerSelection returned string value 
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        if(playerSelection === "rock"){
            rockIcon();
        }else if(playerSelection === "paper"){
            paperIcon();
        }else{
            scissorsIcon();
        }
        gameMsg.textContent = "It's a tie!";
      } else if (playerSelection === "rock") {
        rockIcon();
        if (computerSelection === "paper") {  
          compScoreCounter++;
          compScore.textContent = compScoreCounter;
          gameMsg.textContent = "You lost!";
        } else {  
          playerScoreCounter++;  
          playerScore.textContent = playerScoreCounter;
          gameMsg.textContent = "You won!";
        }
      } else if (playerSelection === "paper") {
        paperIcon();
        if (computerSelection === "scissors") {
          compScoreCounter++;  
          compScore.textContent = compScoreCounter;
          gameMsg.textContent = "You lost!";
        } else {
          playerScoreCounter++;  
          playerScore.textContent = playerScoreCounter;
          gameMsg.textContent = "You won!";
        }
      } else if (playerSelection === "scissors") {
        scissorsIcon();
        if (computerSelection === "rock") {
          compScoreCounter++;
          compScore.textContent = compScoreCounter;
          gameMsg.textContent = "You lost!";
        } else {
          playerScoreCounter++;
          playerScore.textContent = playerScoreCounter;
          gameMsg.textContent = "You won!";
        }
      }
    //Shows next round buton after player chooses an option  
    roundBtn.classList.toggle("hidden");

    //The first player to 5 pts wins
    if(playerScoreCounter === 5){
        confetti({
            particleCount: 100,
            spread: 70
        });
        gameMsg.textContent = "You Win!";
        roundBtn.classList.add("hidden");
    }else if(compScoreCounter === 5){
        gameMsg.textContent = "You lose!";
        roundBtn.classList.add("hidden");
    }

}
//Functions for changing icons as they are selected by the player
function rockIcon(){
    playerChoice.setAttribute("d","M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9");
}
function paperIcon(){
    playerChoice.setAttribute("d", "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"); 
}
function scissorsIcon(){
    playerChoice.setAttribute("d", "M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664");
}
function resetIcons(){
    playerChoice.setAttribute("d","M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z");
    compChoice.setAttribute("d","M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z");
}
//Goes to next round if there is not a winner yet
function nextRound(){
    roundBtn.classList.toggle("hidden");
    choiceMade = false;
    roundCounter++;
    gameMsg.textContent = `Round ${roundCounter}`;
    resetIcons();
}
//Resets Game
function resetGame(){
    if(!roundBtn.classList.contains("hidden"))roundBtn.classList.add("hidden");
    choiceMade = false;
    playerScoreCounter = 0;
    playerScore.textContent = playerScoreCounter;
    compScoreCounter = 0;
    compScore.textContent = compScoreCounter;
    roundCounter = 1;
    gameMsg.textContent = `Round ${roundCounter}`;
    resetIcons();
}

//* Event Listeners
//Choices Buttons
playerChoices.forEach(choice => {
    choice.addEventListener("click", function(){
        if(!choiceMade){
            choiceMade = true;
            const choices = choice.id;
            playRound(choices, computerSelection());
        }
    });
});
//Next Round Button
roundBtn.addEventListener("click",nextRound);
//Reset Game Button
resetBtn.addEventListener("click",resetGame);

//* v.1 Code Working in Console

/* let round = 1;
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

console.log(game()); */