const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

const employee = require('../controllers/employee'); //FOR DEV PURPOSE ONLY
router.post('/newEmployee', employee.createEmployee); //FOR DEV PURPOSE ONLY

router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;