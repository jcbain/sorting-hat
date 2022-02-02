const express = require('express');
const morgan = require('morgan');

const { models, connectDb } = require('./src/models');

const PORT = process.env.PORT || 8080;

(async () => {
  const app = express();

  app.use(morgan('dev'));

  await connectDb();

  app.get('/', (req, res) => {
    res.send('hello from the server');
  });
  
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
})();

