const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.render('ResultEntering', { title: 'ResultEntering' });
});

module.exports = router;
