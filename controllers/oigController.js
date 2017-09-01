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

exports.catalog_search_post = function(req, res, next){
     //Check that the name field is not empty
     req.checkBody('name', 'Name is required').notEmpty(); 
     
     //Trim and escape the name field. 
     req.sanitize('name').escape();
     req.sanitize('name').trim();
     
     //Run the validators
     var errors = req.validationErrors();
     
     if (errors) {
         //If there are errors render the form again, passing the previously entered values and errors
         res.render('index', { title: '', candidate: candidate, errors: errors});
     return;
     } 
     else {
         // Data from form is valid.
         //Check if Genre with same name already exists
         oig.findOne({ 'lastname': req.body.name })
             .exec( function(err, found_genre) {
                  console.log('found_genre: ' + found_genre);
                  if (err) { return next(err); }
                  
                  if (found_genre) { 
                      //Genre exists, redirect to its detail page
                      res.redirect(found_genre.url);
                  }
                  
              });
     }
};
