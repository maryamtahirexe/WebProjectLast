const express = require('express');
const Community = require('../models/Community');

const router = express.Router();

router.get('/', async (req, res) => {
  // Add the GET communities code here.
});

router.post('/', async (req, res) => {
  // Add the POST create community code here.
});

router.post('/join', async (req, res) => {
  // Add the join community code here.
});

module.exports = router;
