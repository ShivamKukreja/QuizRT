const service = require('./posts.service');
//const async = require('async');

const addNewPost = function (newPost, done) {
    servce.addNewPost(newPost, done);
}

const findPostsByPlayer = function (playerId, done) {
    service.findPostsByPlayer(playerId, done);
}

const findPostsByTopic = function (topicId, done) {
    service.findPostsByTopic(topicId, done);
}

const updatePost = function (postId, postData, done) {
    service.updatePost(postId, postData, done);
}

module.exports = {
    addNewPost: addNewPost,
    findPostsByPlayer: findPostsByPlayer,
    findPostsByTopic: findPostsByTopic,
    updatePost: updatePost
}