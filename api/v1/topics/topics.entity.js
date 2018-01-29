const mongoose = require('mongoose');


const TopicSchema = new mongoose.Schema({
    topicId: {type: String, required: true, unique: true },
    name: { type: String, required: true },
    addedOn: { type: Date, default: Date.now },
    keyword: { type: Array, },
    description: { type: String, required: true },
    logo: { type: String, },
    category: { type: String, required: true },
    leadingUsers: [
        {
            userId: { type: Number, required: true },
            score: { type: Number, required: true },
            rank: { type: Number, required: true },
            updatedOn: { type: Date, default: Date.now }
        }
    ],
    tags: []
}, { collection: 'topics' });

TopicSchema.index({
    postId: 1,
    playerId: 1,
    topicId: 1,
  }, {
    unique: true
  });

// TopicSchema.set('toJSON', { getters: true });
module.exports = mongoose.model("topics", TopicSchema);

// module.exports = Topics;


// module.exports.getListOfTopics = (root, { id }) => {
//     return new Promise((resolve, reject) => {
//         Topics.find({}).exec((err, res) => {
//             err ? reject(err) : resolve(res[id]);
//         })
//     });
// };

// module.exports.getTopicsByPosition = (root, { id }) => {
//     return new Promise((resolve, reject) => {
//         Topics.find({}).exec((err, res) => {
//             err ? reject(err) : resolve(res[id]);
//         })
//     });
// };





