const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const myAnswer = document.getElementById("myAnswer");
const AIAnswer = document.getElementById("AIAnswer");
const myScore = document.getElementById("scoreNum1");
const AIScore = document.getElementById("scoreNum2");

let arr = ["rockImage", "paperImage", "scissorsImage"]

const randomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

let myScoreValue = 0;
let AIScoreValue = 0;

rock.onclick = function () {

    let myPick = "rock";
    let aiAnswer = randomItem(arr);

    myAnswer.innerHTML = "<div id='rockImage'></div>";
    AIAnswer.innerHTML = "<div id=" + aiAnswer + "></div>";

    if (aiAnswer == `${myPick}Image`) {
        document.getElementById("myH1").textContent = "Draw!";
        document.getElementById("myH1").style.color = "darkblue";
    }

    else if (aiAnswer == 'paperImage') {
        document.getElementById("myH1").textContent = "You lost!";
        document.getElementById("myH1").style.color = "red";
        AIScore.textContent = AIScoreValue++;
    }

    else{
        document.getElementById("myH1").textContent = "You won!";
        document.getElementById("myH1").style.color = "green";
        myScore.textContent = myScoreValue++;
    }
}

paper.onclick = function () {

    let myPick = "paper";
    let aiAnswer = randomItem(arr);

    myAnswer.innerHTML = "<div id='paperImage'></div>";
    AIAnswer.innerHTML = "<div id=" + aiAnswer + "></div>";

    if (aiAnswer == `${myPick}Image`) {
        document.getElementById("myH1").textContent = "Draw!";
        document.getElementById("myH1").style.color = "darkblue";
    }

    else if (aiAnswer == 'scissorsImage') {
        document.getElementById("myH1").textContent = "You lost!";
        document.getElementById("myH1").style.color = "red";
        AIScore.textContent = AIScoreValue++;
    }

    else{
        document.getElementById("myH1").textContent = "You won!";
        document.getElementById("myH1").style.color = "green";
        myScore.textContent = myScoreValue++;
    }
}

scissors.onclick = function () {

    let myPick = "scissors";
    let aiAnswer = randomItem(arr);

    myAnswer.innerHTML = "<div id='scissorsImage'></div>";
    AIAnswer.innerHTML = "<div id=" + aiAnswer + "></div>";

    if (aiAnswer == `${myPick}Image`) {
        document.getElementById("myH1").textContent = "Draw!";
        document.getElementById("myH1").style.color = "darkblue";
    }

    else if (aiAnswer == 'rockImage') {
        document.getElementById("myH1").textContent = "You lost!";
        document.getElementById("myH1").style.color = "red";
        AIScore.textContent = AIScoreValue++;
    }

    else{
        document.getElementById("myH1").textContent = "You won!";
        document.getElementById("myH1").style.color = "green";
        myScore.textContent = myScoreValue++;
    }
}