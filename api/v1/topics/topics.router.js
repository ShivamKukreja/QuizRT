const router = require('express').Router();
const topicCtrl = require('./topics.controller');

/**
 * Effective URL is POST /topics/
 *
 * This API adds a new topic to the catalog
 */
router.post('/', function(req, res) {
  try {
    const newTopic = req.body;
    topicCtrl.addnewTopic(newTopic, function(err, result) {
      if (err) {
        console.error('Error in adding new topic, ERROR::', err);
        res.status(400).send({ error: 'Something went wrong, please check and tray again..!' });
        return;
      }
      res.status(201).send(result);
      return;
    })
  } catch (err) {
    console.error('Unexpected error in adding new topic, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/**
 * Effective URL is GET /topics/
 *
 * This API finds topic(s) in the catalog
 */
router.get('/', function(req, res) {
  try {
    topicCtrl.getTopics(function(err, result) {
      if (err) {
        console.error('Error in GET of topics, ERROR::', err);
        res.status(400).send({error: 'Something went wrong, please try later..!'});
        return;
      }
      res.send(result);
      return;
    })
  } catch (err) {
    console.error('Unexpected error in GET of topics, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

router.get('/:topicId', function(req, res) {
  try {
    const topicId = req.params.topicId
    topicCtrl.findTopicById(topicId,function(err, result) {
      if (err) {
        console.error('Error in GET of topic, ERROR::', err);
        res.status(400).send({error: 'Something went wrong, please try later..!'});
        return;
      }
      res.send(result);
      return;
    })
  } catch (err) {
    console.error('Unexpected error in GET of topics, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});


router.get('/name/:topicName', function(req, res) {
  try {
    const topicName = req.params.topicName
    topicCtrl.findTopicsByName(topicName,function(err, result) {
      if (err) {
        console.error('Error in GET of topic, ERROR::', err);
        res.status(400).send({error: 'Something went wrong, please try later..!'});
        return;
      }
      res.send(result);
      return;
    })
  } catch (err) {
    console.error('Unexpected error in GET of topics, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});


router.get('/search/:searchName', function(req, res) {
  try {
    const searchName = req.params.searchName
    topicCtrl.findTopicsSearch(searchName,function(err, result) {
      if (err) {
        console.error('Error in GET of topic, ERROR::', err);
        res.status(400).send({error: 'Something went wrong, please try later..!'});
        return;
      }
      res.send(result);
      return;
    })
  } catch (err) {
    console.error('Unexpected error in GET of topics, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

// router.post('/:topicCode/reviews', function(req, res) {
//   try {
//     let reviewObj = req.body;
//     topicCtrl.submitReview(req.params.topicCode, reviewObj, function(err, result) {
//       if (err) {
//         console.error('Error in submitting review of topic, ERROR::', err);
//         res.status(400).send({error: 'Something went wrong, please try later..!'});
//         return;
//       }
//       res.send(result);
//       return;
//     })
//   } catch (err) {
//     console.error('Unexpected error in submitting review of topic, ERROR::', err);
//     res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
//     return;
//   }
// });

module.exports = router;