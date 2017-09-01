var oig = require('../models/oig');
var sam = require('../models/sam');
var async = require('async');

exports.index = function(req, res) { 
    async.parallel({
        oig_count: function(callback) {
            oig.count(callback);
        },
        sam_count: function(callback) {
            sam.count(callback);
        },
     
    }, function(err, results) {
        res.render('index', { title: 'Pulsecheck', error: err, data: results });
    });
};

// Display list of all Authors
exports.author_list = function(req, res) {


};

// Display detail page for a specific Author
exports.author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: OIG detail: ' + req.params.id);
};

// Display Author create form on GET
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Display Author delete form on GET
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle Author delete on POST
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Display Author update form on GET
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};