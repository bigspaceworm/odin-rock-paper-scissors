const parentBtnsChoice = document.querySelector("#playerButtons");
const buttonChoice = parentBtnsChoice.querySelectorAll("button");
const buttonReset = document.querySelector(".clear");
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
const WIN_TOTAL = 5;

buttonChoice.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.className, getComputerChoice());
		endGame();
	});
});

buttonReset.addEventListener("click", () => {
	humanScore = 0;
	computerScore = 0;
	clearTextResults();
	updateWinner("");
});

function playRound(hChoice, pcChoice){
	let winner = getRoundResult(hChoice, pcChoice);

	switch(winner) {
		case "player":
			humanScore += 1;
			break;
		case "computer":
			computerScore += 1;
			break;
		default:
			drawScore += 1;
	}

	updateCounter(humanScore, computerScore, drawScore);
	updateResults(winner, hChoice, pcChoice);
}

function clearTextResults() {
	const container = document.querySelector("#results");
	const choices = container.querySelector(".choices");
	const results = container.querySelector(".roundResult");

	choices.textContent = "";
	results.textContent = "";

	updateCounter(0, 0, 0);
}

function updateCounter(hScore, pcScore, dScore){
	const counterScore = document.querySelector("#results").querySelector(".score");

	counterScore.textContent = "PLAYER: " + hScore + " | PC: " + pcScore + 
	" | DRAWS: " + dScore;
}

function updateWinner(winner) {
	const containerWinner = document.querySelector("#results").querySelector(".winner");
	if(winner) {
		containerWinner.textContent = winner.toUpperCase() + " WINS!";
	}
	else {
		containerWinner.textContent = "";
	}
}

function updateResults(roundResult, hChoice, pcChoice) {
	const container = document.querySelector("#results");
	const playersChoice = container.querySelector(".choices");
	const textResult = container.querySelector(".roundResult");

	playersChoice.textContent = "You selected " + hChoice + ". The computer selected " + pcChoice;
	
	switch(roundResult){
		case "draw":
			textResult.textContent = "It's a draw!";
			break;
		case "player":
			textResult.textContent = "You win!";
			break;
		case "computer":
			textResult.textContent = "You lose!";
			break;
	}
	
}

function getComputerChoice() {
	let rand = Math.floor(Math.random() * 3);
	let compChoice = rand === 0 ? "rock"
		: rand === 1 ? "paper"
		: "scissors";
	
	return compChoice;
}

function getRoundResult(humanChoice, computerChoice) {
	if(humanChoice === computerChoice) {
		return "draw";
	}
	else{
		switch(humanChoice) {
			case "rock":
				if(computerChoice === "paper") {
					return "computer";
				}
				else {
					return "player";
				};
			case "paper":
				if(computerChoice == "scissors") {
					return "computer";
				}
				else {
					return "player";
				};
			case "scissors":
				if(computerChoice === "rock") {
					return "computer";
				}
				else {
					return "player";
				};
		}
	}

}

function getWinner(){
	if(humanScore > computerScore){
		return "PLAYER";
	} else{
		return "COMPUTER";
	}
}

function endGame(){
	if(humanScore === 5 || computerScore === 5) {
		updateWinner(getWinner());
		humanScore = 0;
		computerScore = 0;
		drawScore = 0;
		clearTextResults();
	}
}