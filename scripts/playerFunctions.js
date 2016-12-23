function playerExists(players, name) {
	console.log('playerExists reached');
	for (i=0; i < players.length; i++) {
		if (players[i].name == name) {
			return true;
		}
	}
	
	return false;
}

function createPlayer(name) {
	console.log('createPlayer reached');
	return {
		name:name,
		wins:0,
		score:0,
		roundDetails:[]
	}
}

function populateCalculator(name, playerIndex) {
	console.log('populateCalulator reached');
	return {
		name:name,
		playerIndex:playerIndex,
		score:0,
		roundDetails:[]
	}
}

function removePlayer(players, playerToRemove) {
	console.log('removePlayer reached');
	for (i=0; i < players.length; i++) {
		if (players[i].name == playerToRemove.name) {
			players.splice(i, 1);
			
			break;
		}
	}
}

function selectWinner(player) {
	console.log('selectWinner reached');
	player.wins += 1;
}

function insertRoundScore(roundDetailsContainer, roundScore, operator) {
	console.log('insertRoundScore reached');
	var gameScore = calculateWithOperator(calculateScore(roundDetailsContainer), roundScore, operator);
	
	roundDetailsContainer.roundDetails.push({roundScore:roundScore,roundOperator:operator,gameScore:gameScore});
	roundDetailsContainer.score = gameScore;
}

function isValidScore(roundScore) {
	if (undefined !== typeof roundScore && null !== typeof roundScore && !isNaN(parseFloat(roundScore)) && isFinite(roundScore)) {
		return true;
	} else {
		return false;
	}
}

function resetScores(players) {
	console.log('resetScores reached');
	for (i = 0; i < players.length; i++) {
		players[i].score = 0;
		players[i].roundDetails = [];
	}
	
	return players;
}

function calculateScore(player) {
	console.log('calculateScore reached');
	var gameScore = 0;
	
	for (i = 0; i < player.roundDetails.length; i++) {
		gameScore = calculateWithOperator(gameScore, player.roundDetails[i].roundScore, player.roundDetails[i].roundOperator);
	}
	
	return gameScore;
}

function calculateWithOperator(total, roundScore, roundOperator) {
	console.log('calculationWithOperator reached');
	if (roundOperator == 'add') {
		total = total + roundScore;
	} else if (roundOperator == 'subtract') {
		total = total - roundScore;
	} else if (roundOperator == 'multiply') {
		total = total * roundScore;
	} else if (roundOperator == 'divide') {
		total = total / roundScore;
	}
	
	return total;
}