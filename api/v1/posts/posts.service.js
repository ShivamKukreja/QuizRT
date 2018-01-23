const Model = require('./posts.entity');

const savePost = function (post, done) {
	post.save(function(err, savedPost) {
		if (err) {
			console.error("Error in adding new post, ERROR::", err);
			return done(err);
		}
		done(null, savedPost);
	})	
}
const addNewPost = function (newPost, done) {
	let post = new Model();
	post.postId = newPost.postId;
	post.playerId = newPost.playerId;
	post.topicId = newPost.topicId;
	post.message = newPost.message;
	post.title = newPost.title;
	post.tags = newPost.tags;
	post.comments = post.comments;
	post.created = post.created;

	//save
	savePost(post, done);
}
const findPostsByPlayer = function (playerId, done) {
	let query = { playerId: playerId };
	Model.find(query).exec((err, post) => {
		if (err) {
			console.error('Error in finding post by player %s ', playerId, ' and Error : ', err, ' and query : ', query);
			return done(err);
		}
		done(null, post);
	});
}
const findPostsByTopic = function (topicId, done) {
	let query = { topicId: topicId };
	Model.find(query).exec((err, post) => {
		if (err) {
			console.error('Error in finding post for topic %s ', topicId, ' and Error : ', err, ' and query : ', query);
			return done(err);
		}
		done(null, post);
	});
}
const updatePost = function (postId, postData, done) {
	let query = { postId: postId };
	Model.findOne(query).exec((err, post) => {
		if(err) {
			console.error('Error in finding post for id %s ', postId, ' and Error : ', err, ' and query : ', query);
			return done(err);			
		}
		// warning : deep or reference copy will not work with assign
		Object.assign(post, postData);
		//save
		savePost(post, done);
	})
	
}
module.exports = {
	addNewPost: addNewPost,
	findPostsByPlayer: findPostsByPlayer,
	findPostsByTopic: findPostsByTopic,
	updatePost: updatePost
}