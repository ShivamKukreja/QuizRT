const service = require('./player.service');
//const async = require('async');

const createPlayerProfile = function (player, done) {
    servce.createPlayerProfile(player, done);
}

const SearchByPlayerName = function (playerName, done) {
    service.SearchByPlayerName(playerName, done);
}

const playerByRating = function (pplayerRating, done) {
    service.playerByRating(playerRating, done);
}

module.exports = {
    createPlayerProfile: createPlayerProfile,
    SearchByPlayerName: SearchByPlayerName,
    playerByRating: playerByRating
}