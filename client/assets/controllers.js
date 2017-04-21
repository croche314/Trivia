//*********** Dashboard Controller ***********
app.controller('DashboardController', function($scope, $location, gameFactory) {
	console.log("Found DashboardController");
	$scope.username = gameFactory.currentUser.username;
	$scope.message = gameFactory.message;
	
	if($location.url() == '/logout') {
		gameFactory.logout(function() {
			$location.url('/');
		});
	}
	
	// Get all questions
	gameFactory.getAllQuestions(function(response) {
		$scope.all_questions = gameFactory.all_questions;
	});

	// Get all games
	gameFactory.getAllGames(function(response) {
		$scope.all_games = gameFactory.all_games;
	});
});

//*********** Question Controller ***********
app.controller('QuestionController', function($scope, $location, gameFactory) {
	console.log("Found QuestionController");
	$scope.createQuestion = function() {
		gameFactory.createQuestion($scope.question, function(response) {
			console.log(response.data.message);
			gameFactory.message = "New Question Added!";
			$location.url('/#!/');
		});
	}
});

//*********** Game Controller ***********
app.controller('GameController', function($scope, $location, gameFactory) {
	console.log('Found GameController');
	$scope.all_questions = [];
	$scope.game_questions = [];
	$scope.used_questions = [];
	var currentUser = gameFactory.currentUser.username;
	$scope.username = gameFactory.currentUser.username;

	gameFactory.getAllQuestions(function(response) {
		$scope.all_questions = response.data.all_questions;
		console.log($scope.all_questions);
		while($scope.game_questions.length < 3) {
			$scope.addQuestionToGame();
		}
		console.log('game questions:',$scope.game_questions)
	});

	$scope.addQuestionToGame = function() {
		console.log('length:', $scope.all_questions.length);
		var randomNum = Math.floor(Math.random()* $scope.all_questions.length);
		console.log('num:',randomNum);

		var questionObj = $scope.all_questions[randomNum];
		$scope.game_questions.push(questionObj);
		$scope.all_questions.splice(randomNum,1);
		console.log("updated game_questions:", $scope.game_questions);
		
	};

	$scope.finishGame = function() {
		console.log('answer1:', $scope.answer1);
		console.log('answer2:', $scope.answer2);
		console.log('answer3:', $scope.answer3);

		var answers = [];
		answers.push($scope.answer1, $scope.answer2, $scope.answer3);
		console.log('answers:', answers);
		var score = 0;
		var percentage = 0;
		for(var i=0; i<answers.length;i++) {
			if(answers[i] == 'correct') {
				score++;
			}
		};
		console.log('user:', currentUser);
		console.log('score:', score);
		percentage = Math.floor((score / 3) * 100);
		console.log('percentage:', percentage);
		var gameObj = {
			player: currentUser,
			score: score,
			percentage: percentage
		};
		gameFactory.createGame(gameObj, function(response) {
			console.log(response.data.message);
			gameFactory.message = "Good job! You scored " + score + " out of 3 (" + percentage + "%)";
			$location.url('/#!/');
		});

	}

});