const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    }
  }
);

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;