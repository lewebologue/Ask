const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const deskController = require('../controllers/desk');

router.post('/new', auth, deskController.newRequest);
router.get('/list', auth, deskController.getAllRequests);
router.get('/:id', auth, deskController.getOnerequest);
router.patch('/:id', auth, deskController.editRequest);

module.exports = router;