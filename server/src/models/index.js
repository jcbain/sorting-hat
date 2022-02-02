const mongoose = require('mongoose');
const Question = require('./questions');

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const db = process.env.MONGO_DB;

const connectionString = `mongodb+srv://${user}:${password}@${host}/${db}?retryWrites=true&w=majority`

const connectDb = () => {
  return mongoose.connect(connectionString);
};

const models = { Question };

module.exports = { 
  connectDb, 
  models 
};