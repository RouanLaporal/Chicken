var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "Bienvenue sur l'API développé par Rouan Laporal" });
});

module.exports = router;
