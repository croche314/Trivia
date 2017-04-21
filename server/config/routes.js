var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Game = mongoose.model('Game');
var controllers = require('../controllers/controller.js');

module.exports = function(app) {
	app.get('/', function(req,res) {
		console.log('Found / route');
	});

	// Create User
	app.post('/user/new/:username', controllers.createUser);

	// Create Question
	app.post('/question/new', controllers.createQuestion);

	// Create New Game
	app.post('/game/new/', controllers.createGame);

	// User Index
	app.get('/user/index', controllers.userIndex);

	// Question Index
	app.get('/question/index', controllers.questionIndex);

	// Games Index
	app.get('/game/index', controllers.gameIndex);
}