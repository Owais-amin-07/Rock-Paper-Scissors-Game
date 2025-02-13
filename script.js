let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

// Generating computer choice
const genCompChoice = () => {
    const optoins = ["rock","paper","scissors"];
   const rndmidx = Math.floor(Math.random()*3);
    return optoins[rndmidx];
}

// Deciding winner
const Winner = (userWin,userChoice,compChoice) => {
    document.querySelector("#userscore");
    if(userWin){
        console.log("You Win");
        userScore++;
        document.querySelector("#userscore").innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;

        msg.style.backgroundColor = "chocolate";
    }else{
        console.log("You Lose");
        compScore++;
        document.querySelector("#compscore").innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

//Updating Winner number



// Playing Game 
const playGame = (userChoice) => {
    console.log("User choice is =", userChoice);
    compChoice=genCompChoice();
    console.log("Computer choice is =", compChoice);

// comparing user and computer choices
    if(userChoice === compChoice){
        console.log("Game was Draw");
        msg.innerText = "Game was Draw! please play again";
        msg.style.backgroundColor = "cornflowerblue";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{// userChoice scissors
            userWin = compChoice === "rock" ? false : true;
        }
        Winner(userWin,userChoice,compChoice);
    }
    
}



//accessing main component
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});


// Restarting the Game 
const resetBtn = document.querySelector("#resetScore");

resetBtn.addEventListener("click", () => {
    // Reset scores to 0
    userScore = 0;
    compScore = 0;

    // Update the displayed scores
    document.querySelector("#userscore").innerText = userScore;
    document.querySelector("#compscore").innerText = compScore;

    // Reset the message to its initial state
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "rgb(52, 69, 61)"; // Reset to the original background color
});


