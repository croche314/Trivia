app.factory('gameFactory', function($http) {
	var factory = {};

	if(factory.currentUser == "" || !factory.currentUser) {
		var username = prompt("Enter a username:");
		
		factory.currentUser = {
			username: username
		};
	}
	
	factory.message = "";

	factory.all_games = [];

	factory.logout = function(callback) {
		factory.currentUser.username = prompt("Enter a username");
		factory.message = "";
		callback();
	}

	factory.getAllQuestions = function(callback) {
		$http.get('/question/index').then(function(returned_data) {
			factory.all_questions = returned_data.data.all_questions;
			callback(returned_data);
		});
	};

	factory.getAllGames = function(callback) {
		$http.get('/game/index').then(function(returned_data) {
			factory.all_games = returned_data.data.all_games;
			callback(returned_data);
		});
	};

	factory.createQuestion = function(questionObj, callback) {
		$http.post('/question/new', questionObj).then(function(response) {
			factory.all_questions.push(response.data.question);
			callback(response);
		})
	};

	factory.createGame = function(gameObj, callback) {
		$http.post('/game/new', gameObj).then(function(response) {
			factory.all_games.push(response.data.game);
			callback(response);
		});
	}

	return factory;
});