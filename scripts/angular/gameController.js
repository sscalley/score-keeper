angular.module('scoreKeeperApp', []).controller('gameController', function($scope) {
	//$scope.players = [];
	
	$scope.players= [
		{
			name:'Shawn',
			wins:0,
			score:0,
			roundDetails:[]
		}
	]
	
	$scope.roundScores = [];
	
	$scope.addNewPlayer = function() {
		console.log('addNewPlayer reached');
		var newPlayerName = $scope.newPlayerName;
		var players = $scope.players;
		
		if (!newPlayerName) {
			alert('Player name not entered');
			return;
		} else if (playerExists(players, newPlayerName)) {
			alert('Player already exists');
			return;
		}  else {
			players.push(createPlayer(newPlayerName));	
		}

		$scope.newPlayerName = "";
	}
	
	$scope.removePlayer = function() {
		console.log('removePlayer reached');
		var selectedPlayer = $scope.selectedToRemove;
		
		if (!selectedPlayer) {
			alert("Please select a player to remove");
			return;
		}
		removePlayer($scope.players, selectedPlayer)
		
		$scope.selectedToRemove = null;
	}
	
	$scope.addToGame = function(playerIndex) {
		console.log('addToGame reached');
		var player = $scope.players[playerIndex];
		var roundScore = $scope.roundScores[playerIndex];
		
		if (!isValidScore(roundScore)) {
			alert("Enter a valid round score");
			return;
		}
		
		insertRoundScore(player, roundScore, 'add');
		
		$scope.roundScores[playerIndex] = null;
	}
	
	$scope.subtractFromGame = function(playerIndex) {
		console.log('subtractFromGame reached');
		var player = $scope.players[playerIndex];
		var roundScore = $scope.roundScores[playerIndex]
		
		if (!isValidScore(roundScore)) {
			alert("Enter a valid round score");
			return;
		}

		insertRoundScore(player, roundScore, 'subtract');
		
		$scope.roundScores[playerIndex] = null;
	}
	
	$scope.multiplyGame = function(playerIndex) {
		console.log('multiplyGame reached');
		var player = $scope.players[playerIndex];
		var roundScore = $scope.roundScores[playerIndex]
		
		if (!isValidScore(roundScore)) {
			alert("Enter a valid round score");
			return;
		}

		insertRoundScore(player, roundScore, 'multiply');
		
		$scope.roundScores[playerIndex] = null;
	}
		
	$scope.divideGame = function(playerIndex) {
		console.log('divideGame reached');
		var player = $scope.players[playerIndex];
		var roundScore = $scope.roundScores[playerIndex]
		
		if (!isValidScore(roundScore)) {
			alert("Enter a valid round score");
			return;
		}

		insertRoundScore(player, roundScore, 'divide');
		
		$scope.roundScores[playerIndex] = null;
	}
	
	$scope.resetScoreToZero = function(playerIndex) {
		console.log('resetScoreToZero reached');
		var player = $scope.players[playerIndex];
		var roundScore = player.score * -1;
		
		insertRoundScore(player, roundScore, 'add');
	}
	
	$scope.selectWinner = function() {
		console.log('selectWinner reached');
		var selectedWinner = $scope.selectedWinner;
		
		if (!selectedWinner) {
			alert("Please select a winner");
			return;
		}
		
		selectWinner(selectedWinner);
		
		$scope.selectedWinner = null;
	}
	
	$scope.startNewGame = function() {
		console.log('startNewGame reached');
		resetScores($scope.players);
	}
	
	/* 
	* Calculator Modal
	*/
	$scope.calculateRound = function(playerIndex) {
		console.log('calculateRound reached');
		$scope.calulatorRoundScore = null;
		$scope.calculator = populateCalculator($scope.players[playerIndex].name, playerIndex);
	}
	
	$scope.addToCalculator = function() {
		console.log('addToCalculator reached');
		var roundScore = $scope.calculatorRoundScore;
		
		if (!isValidScore(roundScore)) {
			alert("Enter a valid round score");
			return;
		}
		
		insertRoundScore($scope.calculator, roundScore, 'add');
		
		$scope.calculatorRoundScore = null;
	}
	
	$scope.subtractFromCalculator = function() {
		console.log('subtractFromCalculator reached');
		var roundScore = $scope.calculatorRoundScore;
		
		if (!isValidScore(roundScore)) {
			alert("Enter a valid round score");
			return;
		}
		
		insertRoundScore($scope.calculator, roundScore, 'subtract');
		
		$scope.calculatorRoundScore = null;
	}
		
	$scope.multiplyCalculator = function() {
		console.log('multiplyCalculator reached');
		var roundScore = $scope.calculatorRoundScore;
		
		if (!isValidScore(roundScore)) {
			alert("Enter a valid round score");
			return;
		}
		
		insertRoundScore($scope.calculator, roundScore, 'multiply');
		
		$scope.calculatorRoundScore = null;
	}
	
	$scope.divideCalculator = function() {
		console.log('divideCalculator reached');
		var roundScore = $scope.calculatorRoundScore;
		
		if (!isValidScore(roundScore)) {
			alert("Enter a valid round score");
			return;
		}
		
		insertRoundScore($scope.calculator, roundScore, 'divide');
		
		$scope.calculatorRoundScore = null;
	}
	
	$scope.resetCalculatorToZero = function() {
		console.log('resetCalculatorToZero reached');
		var calculator = $scope.calculator;
		var roundScore = calculator.score * -1;
		
		insertRoundScore(calculator, roundScore, 'add');
	}
	
	$scope.saveCalculator = function() {
		console.log('saveCalculator reached');
		var calculator = $scope.calculator;
		var player = $scope.players[calculator.playerIndex];
		
		insertRoundScore(player, calculator.score, 'add');
	}
});