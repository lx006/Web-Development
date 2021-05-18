/*Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results. */

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput==='rock' || userInput ==='paper' || userInput==='scissors')
  {
    return userInput;
  }
  else
  {
    console.log("Error");
  }
}

const getComputerChoice = () =>{
  let num = Math.floor(Math.random()*3);
  if(num==0)
  {
    return 'rock';
  }
  else if(num==1)
  {
    return 'paper';
  }
  else
  {
    return 'scissors';
  }
}
const determineWinner = (userChoice,computerChoice) =>{
  if(userChoice===computerChoice)
  {
    return 'Game was a tie';
  }
  else if(userChoice==='rock')
  {
    if(computerChoice==='paper')
    {
      return 'Computer won';
    }
    else
    {
      return 'User won';
    }
  }
  else if(userChoice==='paper')
  {
    if(computerChoice==='scissors')
    {
      return 'Computer won';
    }
    else
    {
      return 'User won';
    }
  }
  else if(userChoice==='scissors')
  {
    if(computerChoice==='rock')
    {
      return 'Computer won';
    }
    else
    {
      return 'User won';
    }
  }
}

function playGame()
{
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('User choice '+userChoice);
  console.log('Computer choice '+computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
