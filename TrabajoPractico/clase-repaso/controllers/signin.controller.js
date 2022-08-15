
const Signin = require ('../models/signin.model')
const sha1 = require('sha1');

const getSignin = async(req, res, next) => {
    try {

        res.render('signin', { title: 'Iniciar sesion'});

    } catch (error) {
        res.sendStatus(500);
    }
}

const authenticate = async(req, res, next) => {
    try {

    const {email, password } = req.body;
    const user = new Signin(email, sha1(password));

    const result = await user.login();

    if(result && result.length > 0){
        res.render('signin', { title: 'Iniciar sesion', message: 'Iniciaste sesion satisfactoriamente!'});
    } else {
        res.render('signin', { title: 'Inicar sesion', message: 'Por favor, volve a chequear las credenciales de ingreso.'});
    }
    
    } catch (error) {

        res.sendStatus(500);

    }
}

module.exports = {
    getSignin,
    authenticate
}