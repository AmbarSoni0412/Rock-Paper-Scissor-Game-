let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let userScorePara = document.querySelector("#userscore");
let compScorePara = document.querySelector("#compscore");


let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++
        userScorePara.innerText = userScore
        message.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    } else {
        compScore++
        compScorePara.innerText = compScore
        message.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    }
}

let genCompChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    let randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = () => {
    message.innerText = "Game was Draw, Play Again";
}

let playGame = (userChoice) => {
    let compChoice = genCompChoice()

    if (userChoice === compChoice) {
        drawGame();
    } else {
    if(userChoice === "Rock") {
        userWin = compChoice === "Paper" ? false : true; 
    }
    else if(userChoice === "Paper") {
        userWin = compChoice === "Scissor" ? false : true;
    }
    else {
        userWin = compChoice === "Rock"? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
}


choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})