function getComputerChoice() {
	let rand = Math.floor(Math.random() * 3);
	let compChoice = rand === 0 ? "rock"
		: rand === 1 ? "paper"
		: "scissors";
	
	return compChoice;
}

function getHumanChoice() {
	let humanChoice = prompt("Write your hand signal: rock, paper, scissors");

	humanChoice = humanChoice.toLowerCase();

	return humanChoice;
}

function playRound(humanChoice, computerChoiche) {
	if(humanChoice === computerChoiche) {
		console.log("It's a draw!");
		if(humanChoice === "rock") {
			console.log("Both choose rock!");
		}
		else if(humanChoice === "paper") {
			console.log("Both choose paper!");
		}
		else {
			console.log("Both choose scissors!");
		}

		return "draw";
	}
	else{
		switch(humanChoice) {
			case "rock":
				if(computerChoiche === "paper") {
					console.log("You lose! Paper beats rock");

					return "computer";
				}
				else {
					console.log("You win! Rock beats scissors");

					return "player";
				};
			case "paper":
				if(computerChoiche == "scissors") {
					console.log("You lose! Scissors beats paper");

					return "computer";
				}
				else {
					console.log("You win! Paper beats rock");

					return "player";
				};
			case "scissors":
				if(computerChoiche === "rock") {
					console.log("You lose! Rock beats scissors");

					return "computer";
				}
				else {
					console.log("You win! Scissors beats paper");

					return "player";
				};
		}
	}
}

function playGame() {
	const totalRounds = 5;
	let humanScore = 0;
	let computerScore = 0;
	let roundResult;

	for(let i = 0; i < totalRounds; i++) {
		roundResult = playRound(getHumanChoice(), getComputerChoice());

		if(roundResult === "player") {
			humanScore += 1;
		}
		else if(roundResult === "computer") {
			computerScore += 1;
		}

		console.log("Your Score: " + humanScore);
		console.log("Computer Score: " + computerScore);
	}

	console.log("Your final score is " + humanScore);
	console.log("The computer final score is " + computerScore);

	if(humanScore === computerScore) {
		console.log("It was a draw!");
	}
	else if(humanScore > computerScore) {
		console.log("You won!");
	}
	else{
		console.log("You lost!")
	}
}

playGame();
