var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
	username: String,
}, {timestamps:true});

var QuestionSchema = mongoose.Schema({
	question_text: String,
	correct_answer: String,
	fake_answer1: String,
	fake_answer2: String
}, {timestamps: true});

var GameSchema = mongoose.Schema({
	player: String,
	score: {type:Number, default:0},
	percentage: {type:Number, default:0}
}, {timestamps:true});

mongoose.model('User', UserSchema);
mongoose.model('Question', QuestionSchema);
mongoose.model('Game', GameSchema);

