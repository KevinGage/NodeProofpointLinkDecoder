const express = require('express');
const router = express.Router();
const decoder = require('../controllers/url_decoder.js');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.post('/', function(req,res) {
  decoder.decode(req.body.encoded, function(err, decoded) {
    if (!err) {
      res.status(200).send(decoded);
    } else {
      res.status(500).send('Internal Server Error: '+ err);
    }
  });
}); 

module.exports = router;