const router = require('express').Router();

router.use('/posts', require('./posts'));
router.use('/topics', require('./topics'));
module.exports = router;