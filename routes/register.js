var express = require('express');
var router = express.Router();
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
		res.render('register', { title: 'Se connecter' });
	}
});






module.exports = router;
