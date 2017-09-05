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

exports.candidate_search_post = function(req, res){
    //req.checkBody('first_name', 'First name must be specified.').notEmpty(); //We won't force Alphanumeric, because people might have spaces.
    req.checkBody('last_name', 'Family name must be specified.').notEmpty();
    req.checkBody('last_name', 'Family name must be alphanumeric text.').isAlpha();
    //req.checkBody('date_of_birth', 'Invalid date').optional({ checkFalsy: true }).isDate();

    req.sanitize('last_name').escape();
    req.sanitize('first_name').escape();
    req.sanitize('last_name').trim();
    req.sanitize('first_name').trim();   
    req.sanitize('date_of_birth').toDate();
    
    var errors = req.validationErrors();
    console.log(errors);

    if (errors) {
        res.render('index', { title: 'error', errors: errors});
        return;
    } 
    else {
        var OIGQuery = req.body.first_name.length > 0 ? {'LASTNAME': req.body.last_name.toUpperCase(), 'FIRSTNAME':req.body.first_name.toUpperCase()} : {'LASTNAME': req.body.last_name.toUpperCase()};
        var SAMQuery = req.body.first_name.length > 0 ? {'Last': req.body.last_name.toUpperCase(), 'First':req.body.first_name.toUpperCase()} : {'Last': req.body.last_name.toUpperCase()};
        console.log("OIGQuery: "+ OIGQuery);
        console.log("SAMQuery: "+ SAMQuery);
        
    // Data from form is valid
        async.parallel({
            oig_candidate: function(callback) {
            oig.find(OIGQuery)
                .exec(callback);
            },
            sam_candidate: function(callback) {
            sam.find(SAMQuery)
                .exec(callback);
            },
        }, function(err, results) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('index', { title: 'Results', candidate_oig_list: results.oig_candidate, candidate_sam_list: results.sam_candidate });
        });
    }
};
