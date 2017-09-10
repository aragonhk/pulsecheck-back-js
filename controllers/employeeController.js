var jsf = require('json-schema-faker');
var schemaData = require('../models/fakerData');
  
var samples = jsf(schemaData);

exports.index = function(req, res) { 
    res.render('employee', {title: 'Employees', employee_list: samples.users});
};
