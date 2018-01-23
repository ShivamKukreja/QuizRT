const Model = require('./posts.entity');

const addNewPost = function (newPost, done) {
	let post = new Model();
	post.id = newPost.id;
	post.title = newPost.title;
	post.text = newPost.text;
	post.player = newPost.player;
	post.topics = newPost.topics;
	post.comments = newPost.comments;
	post.save(function(err, savedDoc) {
		
	})
}
const getPosts = function (done) {

}

module.exports = {
}