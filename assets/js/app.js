const sp1Button1 = document.querySelector('#btnTeam01Plus1');
const sp1Button2 = document.querySelector('#btnTeam01Plus2');
const sp1Button3 = document.querySelector('#btnTeam01Plus3');

const sp2Button1 = document.querySelector('#btnTeam02Plus1');
const sp2Button2 = document.querySelector('#btnTeam02Plus2');
const sp2Button3 = document.querySelector('#btnTeam02Plus3');

const resetButton = document.querySelector('#reset');

const sp1Display = document.querySelector('#pointsTeam1');
const sp2Display = document.querySelector('#pointsTeam2');

let sp1Score = 0;
let sp2Score = 0;
let winningScore = 99;
let isGameOver = false;

var info = alert("Please enter the names of the teams before the game starts!");
var teamOne = prompt("Team One:", "");
var teamTwo = prompt("Team Two:", "");


function requiredFunction() {
    document.getElementById("team01").innerHTML = teamOne;
    document.getElementById("team02").innerHTML = teamTwo;
}
requiredFunction();

btnTeam01Plus1.addEventListener('click', function () {
    if (!isGameOver) {
        sp1Score += 1;
        if (sp1Score === winningScore) {
            isGameOver = true;
            sp1Display.classList.add('winer');
            sp2Display.classList.add('loser');
            alert(teamOne.toUpperCase() + " , YOU WIN!")
        }
        sp1Display.textContent = sp1Score;
    }
})

btnTeam01Plus2.addEventListener('click', function () {
    if (!isGameOver) {
        sp1Score += 2;
        if (sp1Score === winningScore) {
            isGameOver = true;
            sp1Display.classList.add('winer');
            sp2Display.classList.add('loser');
            alert(teamOne.toUpperCase() + " , YOU WIN!")
        }
        sp1Display.textContent = sp1Score;
    }
})

btnTeam01Plus3.addEventListener('click', function () {
    if (!isGameOver) {
        sp1Score += 3;
        if (sp1Score === winningScore) {
            isGameOver = true;
            sp1Display.classList.add('winer');
            sp2Display.classList.add('loser');
            alert(teamOne.toUpperCase() + " , YOU WIN!")
        }
        sp1Display.textContent = sp1Score;
    }
})

btnTeam02Plus1.addEventListener('click', function () {
    if (!isGameOver) {
        sp2Score += 1;
        if (sp2Score === winningScore) {
            isGameOver = true;
            sp2Display.classList.add('winer');
            sp1Display.classList.add('loser');
            alert(teamTwo.toUpperCase() + " , YOU WIN!")
        }
        sp2Display.textContent = sp2Score;
    }
})

btnTeam02Plus2.addEventListener('click', function () {
    if (!isGameOver) {
        sp2Score += 2;
        if (sp2Score === winningScore) {
            isGameOver = true;
            sp2Display.classList.add('winer');
            sp1Display.classList.add('loser');
            alert(teamTwo.toUpperCase() + " , YOU WIN!")
        }
        sp2Display.textContent = sp2Score;
    }
})

btnTeam02Plus3.addEventListener('click', function () {
    if (!isGameOver) {
        sp2Score += 3;
        if (sp2Score === winningScore) {
            isGameOver = true;
            sp2Display.classList.add('winer');
            sp1Display.classList.add('loser');
            alert(teamTwo.toUpperCase() + " , YOU WIN!")
        }
        sp2Display.textContent = sp2Score;
    }
})

resetButton.addEventListener('click', reset)
function reset() {
    isGameOver = false;
    sp1Score = 0;
    sp2Score = 0;
    sp1Display.textContent = 0;
    sp2Display.textContent = 0;
    sp1Display.classList.remove('winer', 'loser');
    sp2Display.classList.remove('winer', 'loser');
}
