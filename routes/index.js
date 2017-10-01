var express = require('express');
var router = express.Router();
let bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');


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
		codb.query('SELECT email, password FROM clients WHERE email = ? LIMIT 1', [req.body.email], (err, rows) => {
			if (err){
				console.log(err);
			}
			else if (rows[0]){
				if (bcrypt.compareSync(req.body.password, rows[0].password)){
					res.render('index', { title: 'Se connecter', error: 'Connecté' });
				}
				else {
					res.render('index', { title: 'Se connecter', error: 'Mauvais email/mot de passe.' });
				}
			}
			else{
				res.render('index', { title: 'Se connecter' });
			}
		})
		console.log(req.body);
	}
});




// ELSE
module.exports = router;
