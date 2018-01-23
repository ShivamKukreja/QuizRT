const router = require('express').Router();
const controller = require('./posts.controller');

router.post('/', function (req, res) {
    try {
        let newPost = req.body;
        controller.addNewPost(newPost, function (err, result) {
            if (err) {
                console.error('Error in adding new post, ERROR::', err);
                // res.status(400).send(err);
                res.status(400).send({ error: 'Something went wrong, please check and tray again..!' });
                return;
            }
            res.status(201).send(result);
            return;
        })
    } catch (err) {
        console.error('Unexpected error in adding new post, ERROR::', err);
        res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
        return;
    }
});

router.get('/:playerId', function (req, res) {
    try {
        console.log('Request :: ', req.params);
        let playerId = req.params.playerId;
        controller.findPostsByPlayer(playerId, function (err, result) {
            if (err) {
                console.error('Error in fetching the posts for playerId %s ', playerId, 'ERROR:: ', err);
                // res.status(400).send(err);
                res.status(400).send({ error: 'Something went wrong, please check and try again..!' });
                return;
            }
            res.status(201).send(JSON.stringify(result, null, "\t"));
            return;
        });
    } catch (err) {
        console.error("Fetch posts for player id failed coz : ", err);
        res.status(500).send({ error: 'Unexpected internal error, please try later ..!' });
        return;
    }
})

router.get('/:topicId', function (req, res) {
    try {
        console.log('Request :: ', req.params);
        let topicId = req.params.topicId;
        controller.findPostsByTopic(topicId, function (err, result) {
            if (err) {
                console.error('Error in fetching the posts for topicId %s ', topicId, 'ERROR:: ', err);
                // res.status(400).send(err);
                res.status(400).send({ error: 'Something went wrong, please check and try again..!' });
                return;
            }
            res.status(201).send(JSON.stringify(result, null, "\t"));
            return;
        });
    } catch (err) {
        console.error("Fetch posts for topic id failed coz : ", err);
        res.status(500).send({ error: 'Unexpected internal error, please try later ..!' });
        return;
    }
})

router.put("/:postId", function (req, res) {
    try {
        let postId = req.params.postId,
            postData = req.body;
        controller.updatePost(postId, postData, function (err, result) {
            if (err) {
                console.error('Error in updating post details, ERROR::', err);
                res.status(400).send({ error: 'Something went wrong, please try later..!' });
                return;
            }
            res.status(201).send(JSON.stringify(result, null, "\t"));
            return;
        })
    } catch (err) {
        console.error('Unexpected error in updating post details, ERROR::', err);
        res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
        return;
    }
});

module.exports = router;