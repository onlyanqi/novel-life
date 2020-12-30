// @author : Rishabh Baheti

const express = require('express');
const router = express.Router();
const mentalService = require('../Controller/mentalController');

router.get('/', getAll);

function getAll(req, res, next) {
    mentalService.getAllMentalHelp()
        .then(users => res.json(users))
        .catch(err => next(err));
}

module.exports = router;