let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = ()=>{
    const options = ["rock","paper","scissor"];
    //rock , paer , scissor
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx]
};

const drawGame = () =>{
    msg.innerText = "GAME WAS DRAW";
    msg.style.backgroundColor ="yellow";
}
const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU lose ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice)=>{
    //genertate computer choice
    const compChoice = genComputerChoice();
    
    //draw game
    if(userChoice === compChoice){
      drawGame();
    } else{
        let userwin = true;
        if(userChoice==="rock"){
            //scissor,paer
            userwin = compChoice ==="paper"? false:true;
        } else if(userChoice === "paper"){
            //rock,scissor
            userwin = compChoice === "scissor"? false: ture;
        } else{
            //rock,paper
            userwin = compChoice==="rock"? false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});