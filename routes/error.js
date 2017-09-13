const express = require('express');
const router = express.Router();

router.get('*', (request, response) => {
  response.status(404).render('error', {title: '404'});
});

module.exports = router;
