var express = require('express');
var router = express.Router();
let bodyParser = require('body-parser');



// HOME PAGE - GET
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Se connecter' });
});



// HOME PAGE - POST
router.post('/', function(req, res) {
	if (req.body.email === undefined || req.body.email === '' ||  
		req.body.password === undefined || req.body.password === ''){
		res.render('index', { title: 'Se connecter', error: 'Pas d\'entree' });
	}
	else {
		console.log(req.body);
		res.render('index', { title: 'Se connecter' });
	}
});




// ELSE
module.exports = router;
