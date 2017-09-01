var express = require('express');
var router = express.Router();

// Require controller modules
var oig_controller = require('../controllers/oigController');

/// BOOK ROUTES ///

/* GET catalog home page. */
router.get('/', oig_controller.index);

module.exports = router;