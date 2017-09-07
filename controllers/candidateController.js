var jsf = require('json-schema-faker');
var schemaData = require('../models/fakerData');
  
var samples = jsf(schemaData);

exports.index = function(req, res) { 
    res.render('candidate', {title: 'Candidates', candidate_list: samples.users});
};
