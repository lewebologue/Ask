const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AES = require('../middleware/aes-encryption');

exports.signup = (req, res, next) =>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(406).json({error: 'missing fields'})
    }
    const cryptedMail = AES.encrypt(email);
    User.findOne({email : cryptedMail})
    .then(user => {
        if(user){
            return res.status(406).json({error : 'Email already used'})
        }
        bcrypt.hash(password, 12)
            .then(hashedPassword => {
                const user = new User({
                    email : cryptedMail,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    userName: req.body.firstName.charAt(0).toLowerCase() + req.body.lastName.toLowerCase(),
                    password : hashedPassword,
                    isAdmin : false,
                    service: req.body.service,
                    role: req.body.role,
                });
                user.save()
                    .then(() => res.status(201).json({message : 'User created !'}))
                    .catch(error => res.status(400).json({error : error}))
            })
            .catch(error => res.status(500).json({error : error}))
    })
    .catch(error => res.status(503).json({error : error}))
};

exports.login = (req, res, next) => {
    const {userName, password} = req.body;
    if(!userName || !password){
        return res.status(406).json({error: 'missing fields'})
    }
    User.findOne({userName : userName})
    .then(user => {
        if(!user){
            return res.status(404).json({error: 'USer not found'})
        }
        bcrypt.compare(password, user.password)
            .then(valid =>{
                if(!valid){
                    return res.status(401).json({error : 'Incorrect password'})
                }
                res.status(200).json({
                    userId: user.id,
                    isAdmin: user.isAdmin,
                    service: user.service,
                    token: jwt.sign({ userId: user.id, isAdmin: user.isAdmin, service:user.service}, process.env.TOKEN ,{ expiresIn: '24h' }) //Generation du token d'authentification
                });
            })
            .catch(error => res.status(500).json({error : error}))
    })
    .catch(error => res.status(500).json({error : error}))
};