const Model = require('./player.entity');

// const savePost = function (post, done) {
// 	post.save(function(err, savedPost) {
// 		if (err) {
// 			console.error("Error in adding new post, ERROR::", err);
// 			return done(err);
// 		}
// 		done(null, savedPost);
// 	})	
// }

const createPlayerProfile = function (player, done) {
	post.save(function(err, createPlayerProfile) {
		if (err) {
			console.error("Error in adding new player, ERROR::", err);
			return done(err);
		}
		done(null, createPlayerProfile);
	})	
}
const playerInformation = function (newplayer, done) {
	let player = new Model();
	player.playerId = newplayer.playerId;
	player.playerName = newplayer.playerName.firstName + newplayer.playerName.LastName ;
	player.playerPhoto = newplayer.playerPhoto;
	player.playerGender = newplayer.playerGender;
	player.description = newplayer.description;
	player.playerRating = newplayer.playerRating;
	player.playerEmail = newplayer.playerEmail;
	player.palyerPassword = newplayer.palyerPassword;
	//save
	savePost(newplayer, done);
}
const SearchByPlayerName = function (playerName, done) {
	let query = { playerName: playerName };
	Model.find(query).exec((err, post) => {
		if (err) {
			console.error('Error in finding player by name %s ', playerName, ' and Error : ', err, ' and query : ', query);
			return done(err);
		}
		done(null, newplayer);
	});
}
const playerByRating = function (playerRating, done) {
	let query = { playerRating: playerRating };
	Model.find(query).exec((err, post) => {
		if (err) {
			console.error('Error in finding player with rating %s ', playerRating, ' and Error : ', err, ' and query : ', query);
			return done(err);
		}
		done(null, newplayer);
	});
}

module.exports = {
	createPlayerProfile:createPlayerProfile,
	SearchByPlayerName: SearchByPlayerName,
	playerByRating: findPplayerByRatingostsByPlayer
	
}