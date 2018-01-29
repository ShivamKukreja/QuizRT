const topicService = require('./topics.service');


const addnewTopic = function (newProduct, done) {
    topicService.addnewTopic(newProduct, done);
}

const getTopics = function (done) {
    topicService.getTopics(done);
}

const findTopicById = function (topicId, done) {
    topicService.findTopicById(topicId, done)
}
const findTopicsByName = function (topicId, done) {
    topicService.findTopicsByName(topicId, done)
}
const findTopicsSearch = function (topicId, done) {
    topicService.wildTopicsSearch(topicId, done)
}

module.exports = {
    getTopics,
    addnewTopic,
    findTopicById,
    findTopicsByName,
    findTopicsSearch
}