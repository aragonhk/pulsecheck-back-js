var express = require('express');
var router = express.Router();

// Require controller modules
var oig_controller = require('../controllers/oigController');
var employee_controller = require('../controllers/employeeController');
var about_controller = require('../controllers/aboutController');

/* GET catalog home page. */
router.get('/', oig_controller.index);

/* POST request for Searching employees */
router.post('/', oig_controller.employee_search_post);

/* GET employees listing. */
router.get('/employee/', employee_controller.index);

/* GET employees listing. */
router.get('/about/', about_controller.index);

module.exports = router;