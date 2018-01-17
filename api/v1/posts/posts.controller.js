const productService = require('./posts.service');
const async = require('async');

module.exports = {
  addNewProduct,
  getProducts,
  submitReview,
  findProductByCode
}