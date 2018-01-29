const topicService = require('./topics.service');
// const vendorCtrl = require('../vendors/vendors.controller');
// const async = require('async');



// const submitReview = function(productCode, reviewObj, done) {
// 	productService.submitNewReview(productCode, reviewObj, done);
// }

const addnewTopic = function (newProduct, done) {
    topicService.addnewTopic(newProduct, done);
}

const getTopics = function (done) {
    topicService.getTopics(done);
}

const findTopicById = function(topicId, done) {
    topicService.findTopicById(topicId, done)
}

module.exports = {
    getTopics,
    addnewTopic,
    findTopicById
    //   addNewProduct,
    //   getProducts,
    //   submitReview,
    //   findProductByCode
}