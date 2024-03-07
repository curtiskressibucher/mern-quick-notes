const express = require('express');
const noteController = require('../../controllers/notes.js');
const ensureLoggedIn = require('../../middleware/ensure-logged-in.js');

const router = express.Router();

router.get('/', ensureLoggedIn, noteController.show);
router.post('/', ensureLoggedIn, noteController.create);

module.exports = router;
