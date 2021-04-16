
const Signup = require('../models/signup.model');
const uuid = require ('node-uuid');
const sha1 = require('sha1');

const getSignup = async(req, res, next) => {
    try {
        
        res.render('signup', {title: 'Registrate'});
        
    } catch (error) {
        res.sendStatus(500);
    }
}


const createUser = async(req, res, next) => {
    try {

        const {email, password} = req.body;
        const verify_code = uuid();
        const user = new Signup(email, sha1(password), verify_code);
        const result = await user.create();
        console.log(result);
        if(result.affectedRows > 0) {

        res.render(
            'signup',
             {
                 title: 'Registrate',
                 message: { text:'Se registro con exito', status: 'primary ' }
             }
             );
              
        } else {
            res.render(
                'signup',
                {
                    title: 'Registrate',
                    message: { text:'Hubo un error en el registro.', status: 'danger ' }
                }
            );
            }            


    } catch (error) {
        res.sendStatus(500)
    }
}

module.exports = {
    getSignup,
    createUser
}