const mongoose = require('mongoose');

const aiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An AI must have a name'],
    default: 'GPT',
  },
  image: {
    type: String,
    required: [true, 'An AI must have an image'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  modifiedAt: {
    type: Date,
    default: Date.now(),
  },
  prompt: {
    type: String,
    required: [true, 'An AI must have a prompt'],
  },
});

const AI = mongoose.model('AI', aiSchema);

module.exports = AI;
