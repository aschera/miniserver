const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.render('resultat', { title: 'Resultat' });
});

module.exports = router;
