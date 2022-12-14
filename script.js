let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  let rand = Math.floor(Math.random() * 9);
  return rand;
}

function compareGuesses(hguess, cguess, sguess){
const humanAns = Math.abs(sguess - hguess);
const computerAns = Math.abs(sguess - cguess);
return humanAns <= computerAns;
}


function updateScore(status){
  if(status === 'human'){
    humanScore++;
} else if (status === 'computer'){
    computerScore++;
}
}

function advancedRound(){
  currentRoundNumber++;
}
