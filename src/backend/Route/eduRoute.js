// @author : Rishabh Baheti

const express = require('express');
const router = express.Router();
const eduService = require('../Controller/eduController');

router.get('/', getAll);

function getAll(req, res, next) {
    eduService.getAllHelp()
        .then(users => res.json(users))
        .catch(err => next(err));
}

module.exports = router;