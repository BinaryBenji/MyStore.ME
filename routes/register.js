var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
let bodyParser = require('body-parser');



// REGISTER - GET 
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Se connecter' });
});



// REGISTER - POST
router.post('/', function(req, res) {
	if (req.body.email === undefined || req.body.email === '' ||  
		req.body.password === undefined || req.body.password === '' ||
		req.body.nom === undefined || req.body.nom === '' ||
		req.body.prenom === undefined || req.body.prenom === '' ||
		req.body.repassword === undefined || req.body.repassword === ''){
		res.render('register', { title: 'Se connecter', error: 'Pas d\'entree' });
	}
	else if (/^[a-zA-Z]+$/.test(req.body.nom) == false){
		res.render('register', { title: 'Se connecter', error: 'Le nom entré est incorrect' });
	}
	else if (/^[a-zA-Z]+$/.test(req.body.prenom) == false){
		res.render('register', { title: 'Se connecter', error: 'Le prénom entré est incorrect' });
	}
	else if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(req.body.email) == false){
		res.render('register', { title: 'Se connecter', error: 'L\'email entré est incorrect' });
	}
	else if (req.body.password !== req.body.repassword){
		res.render('register', { title: 'Se connecter', error: 'Les deux mot de passe ne correspondent pas' });
	}
	else {
		console.log(req.body);
		var hashed_pass = bcrypt.hashSync(req.body.password);
		console.log(hashed_pass);
		codb.query('INSERT INTO clients SET nom = ?, prenom = ?, email = ?, password = ?', 
			[req.body.nom, req.body.prenom, req.body.email, hashed_pass]), (err, result) =>
		{
			if (err){ 
                res.redirect('/')
			}
		}
		res.render('register', { title: 'Se connecter' });
	}
});






module.exports = router;
