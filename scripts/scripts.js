let x = 'You lose!'
let y = 'You win!'
let z = 'Draw!'
let  computerScore = 0
let  playerScore = 0

function computerPlay () {
let computerPick = ["rock","paper","scissors"];
let randComputerPick = computerPick[Math.floor(Math.random() * computerPick.length)]
return randComputerPick
}

function playRound(playerSelection, computerSelection) {
   //play a single round

   //prompt player for hand
   //if player picks rock
   if(playerSelection.toLowerCase() === 'rock'){
       if(computerSelection === 'paper'){
        console.log(x)
        computerScore++
       }
       else if(computerSelection === 'scissors'){
        console.log(y)
        playerScore++
       }
       else{
        console.log(z)
       }
   }
    //if player picks paper
    else if(playerSelection.toLowerCase() === 'paper'){
        if(computerSelection === 'scissors'){
            console.log(x)
            computerScore++ 
        }
        else if(computerSelection === 'rock'){
            console.log(y)
            playerScore++
        }
        else{
            console.log(z)
        }
    }
    //if player picks scissors
    else if(playerSelection.toLowerCase() === 'scissors'){
        if(computerSelection === 'rock'){
            console.log(x)
            computerScore++
        }
        else if(computerSelection === 'paper'){
            console.log(y)
            playerScore++
        }
        else{
            console.log(z)
        }
    }
    else{
        prompt('Rock, Paper, Scissors?')
    }
}
function game(){
    computerScore = 0
    playerScore = 0
    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose Rock Paper or Scissors!');
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
          
    }
    if(playerScore > computerScore){
        console.log('You win the game')
    }
    else if(playerScore < computerScore){
        console.log('You lose the game')
    }
    else if(playerScore === computerScore){
        console.log('Draw')
    }
}

game() 
