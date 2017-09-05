var express = require('express');
var router = express.Router();

// Require controller modules
var oig_controller = require('../controllers/oigController');
var candidate_controller = require('../controllers/candidateController');
var about_controller = require('../controllers/aboutController');

/* GET catalog home page. */
router.get('/', oig_controller.index);

/* POST request for Searching Candidate */
router.post('/', oig_controller.candidate_search_post);

/* GET candidates listing. */
router.get('/candidate/', candidate_controller.index);

/* GET candidates listing. */
router.get('/about/', about_controller.index);

module.exports = router;