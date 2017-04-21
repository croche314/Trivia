var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Game = mongoose.model('Game');

module.exports = {
	// Create New User
	createUser: function(req,res) {
		var newUser = new User({
			username: req.params.username
		});
		newUser.save(function(err) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json({message:"Error!", error:err})
			} else {
				res.json({message: 'New user created!', user: newUser});
			}
		});
	},
	// Create Question
	createQuestion: function(req,res) {
		var newQuestion = new Question({
			question_text: req.body.question_text,
			correct_answer: req.body.correct_answer,
			fake_answer1: req.body.fake_answer1,
			fake_answer2: req.body.fake_answer2
		});
		newQuestion.save(function(err) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json({message:"Error!", error:err})
			} else {
				res.json({message: 'New question created!', question: newQuestion});
			}
		});
	},
	// Create New Game
	createGame: function(req,res) {
		var newGame = new Game({
			player: req.body.player,
			score: req.body.score,
			percentage: req.body.percentage
		});
		newGame.save(function(err) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json({message:"Error!", error:err})
			} else {
				res.json({message: 'New game created!', game: newGame});
			}
		});
	},
	// Games Index
	gameIndex: function(req,res) {
		Game.find({}, function(err, all_games) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json({message:"Error!", error:err})
			} else {
				res.json({message:"Found all games", all_games:all_games});
			}
		});
	},
	// User Index
	userIndex: function(req,res) {
		User.find({}, function(err, all_users) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json({message:"Error!", error:err})
			} else {
				res.json({message:"Found all users!", all_users:all_users});
			}
		})
	},
	// Question Index
	questionIndex: function(req,res) {
		Question.find({}, function(err, all_questions) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json({message:"Error!", error:err})
			} else {
				res.json({message:"Found all questions!", all_questions:all_questions});
			}
		})
	},
	// Games Index
	gameIndex: function(req,res) {
		Game.find({}, function(err, all_games) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json({message:"Error!", error:err})
			} else {
				res.json({message:"Found all games", all_games:all_games});
			}
		});
	}
}