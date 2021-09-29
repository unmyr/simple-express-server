const express = require('express');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'debug';

const router = express.Router();

router.post('/hello', (req, res) => {
  logger.debug(req.body);
  logger.debug(`GET: /api/v1/hello ${JSON.stringify(req.body)}`);
  res.json({ message: `Hello ${req.body.name}` });
});

router.get('/hello', (_req, res) => {
  logger.debug('GET: /api/v1/hello');
  res.json({ message: 'Hello World! (GET)' });
});

module.exports = router;
