const TopicModel = require('./topics.entity');
const {generateGuid} = require('../../../utils/index')


const addnewTopic = function (newTopic, done) {
    const topic = new TopicModel();
    topic.topicId = generateGuid();
    topic.name = newTopic.name;
    topic.keyword = newTopic.keyword;
    topic.description = newTopic.description;
    topic.logo = newTopic.logo;
    topic.category = newTopic.category;
    topic.leadingUsers = newTopic.leadingUsers;
    topic.tags = newTopic.tags;

    

    topic.save(function (err, savedDoc) {
        if (err) {
            console.error("Error in adding new product, ERROR::", err);
            done(err);
        } else {
            done(null, savedDoc);
            return
        }
    });
}

const getTopics = function (done) {
    // const query = {};
    TopicModel
        .find()
        .exec((err, colln) => {
            console.log(colln)
            if (err) {
                console.error('Error in finding products, ERROR::', err, ' queries for ', query);
                done(err);
                return;
            }
            done(null, colln);
        });
}

// const findProductByCode = function (productCode, done) {
//     // @TODO
//     let query = { "code": productCode }
//     TopicModel
//         .findOne(query)
//         .exec((err, res) => {
//             if (err) {
//                 console.error('Error in finding products, ERROR::', err, ' queries for ', query);
//                 done(err);
//                 return;
//             }
//             done(null, res);
//         });
// }

// const submitNewReview = function (productCode, reviewObj, done) {
//     let query = { code: productCode }; ``
//     let modification = {
//         $push: {
//             reviews: {
//                 rank: reviewObj.rank,
//                 reviewer: reviewObj.reviewer,
//                 comments: reviewObj.comments
//             }
//         }
//     };
//     let options = {
//         new: true, //return the updated document
//         upsert: false, //don't insert if not found
//     };

//     ProductModel.findOneAndUpdate(query, modification, options,
//         function (err, updatedDoc) {
//             if (err) {
//                 console.error("Error in submitting review, ERROR::", err);
//                 done(err)
//                 return;
//             }
//             return done(null, updatedDoc);
//         });
// }

module.exports = {
    getTopics,
    addnewTopic
    // getProducts,
    // submitNewReview,
    // findProductByCode
}