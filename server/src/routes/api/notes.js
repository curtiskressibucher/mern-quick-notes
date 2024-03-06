const express = require('express');
const noteController = require('../../controllers/notes.js');
const ensureLoggedIn = require('../../middleware/ensure-logged-in.js');

const router = express.Router();

router.post('/', noteController.create);

module.exports = router;
