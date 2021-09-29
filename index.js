const express = require('express');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'debug';

const port = 3000;

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

const helloRouterV1 = require('./src/api/v1/hello');
app.use('/api/v1', helloRouterV1);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
