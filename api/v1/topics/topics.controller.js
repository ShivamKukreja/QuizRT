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

// const findProductByCode = function(productCode, done) {
// 	async.waterfall([
// 		productService.findProductByCode.bind(null, productCode),
// 		// vendorCtrl.findVendorByCode
// 	], (err, result) => {
// 		done(null,result)
// 	});
// }

module.exports = {
    getTopics,
    addnewTopic
    //   addNewProduct,
    //   getProducts,
    //   submitReview,
    //   findProductByCode
}