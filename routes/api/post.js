const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Post Route');
});

module.exports = router;
