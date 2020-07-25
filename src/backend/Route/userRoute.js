// @author : Vidya Boghara

const express = require('express');
const router = express.Router();
const userService = require('../Controller/userController');

// routes
router.post('/authenticate', authenticate)
router.post('/logout', logout)
router.post('/register', register);
router.get('/', getAll);
router.post('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);
router.get('/forgotpassword/:id', forgotPassword);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function logout(req, res, next) {
    userService.logout(req.body)
        .then(() => res.status(400).json({ message: 'User logged out' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then((user) => user ? res.json(user ) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
    
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function forgotPassword(req, res, next){
    userService.forgotPassword(req.params.id)
        .then(() => res.json({message: 'Password has been send to email'}))
        .catch(err => next(err));
}