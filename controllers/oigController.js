var oig = require('../models/oig');
var sam = require('../models/sam');
var sdn = require('../models/sdn');
var nonsdn = require('../models/nonsdn')
var async = require('async');

exports.index = function(req, res) { 
    async.parallel({
        oig_count: function(callback) {
            oig.count(callback);
        },
        sam_count: function(callback) {
            sam.count(callback);
        },
        sdn_count: function(callback) {
            sdn.count(callback);
        },
        nonsdn_count: function(callback) {
            nonsdn.count(callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'Pulsecheck', error: err, data: results });
    });
};

exports.employee_search_post = function(req, res){
    //req.checkBody('first_name', 'First name must be specified.').notEmpty(); //We won't force Alphanumeric, because people might have spaces.
    req.checkBody('last_name', 'Last name must be specified.').notEmpty();
    req.checkBody('last_name', 'Last name must be alphanumeric text.').isAlpha();
    //req.checkBody('date_of_birth', 'Invalid date').optional({ checkFalsy: true }).isDate();

    req.sanitize('last_name').escape();
    req.sanitize('first_name').escape();
    req.sanitize('last_name').trim();
    req.sanitize('first_name').trim();   
    req.sanitize('date_of_birth').toDate();
    
    req.getValidationResult().then(function(result){
        if(!result.isEmpty()) {
            console.log(result.array());
            res.render('index', { title: 'error', errors: result.array()});
            return;
        }
        else {
            var OIGQuery = req.body.first_name.length > 0 ? {'LASTNAME': req.body.last_name.toUpperCase(), 'FIRSTNAME':req.body.first_name.toUpperCase()} : {'LASTNAME': req.body.last_name.toUpperCase()};
            var SAMQuery = req.body.first_name.length > 0 ? {'Last': req.body.last_name.toUpperCase(), 'First':req.body.first_name.toUpperCase()} : {'Last': req.body.last_name.toUpperCase()};
            var SDNQuery = {'SDN_Name': { "$regex": req.body.last_name.toUpperCase(), "$options": "i" } };
            var NONSDNQuery = {'SDN_Name': { "$regex": req.body.last_name.toUpperCase(), "$options": "i" } };

            console.log("OIGQuery: "+ JSON.stringify(OIGQuery));
            console.log("SAMQuery: "+ JSON.stringify(SAMQuery));
            console.log("SDNQuery: "+ JSON.stringify(SDNQuery));
            console.log("NON-SDNQuery: "+ JSON.stringify(NONSDNQuery));
            
        // Data from form is valid
            async.parallel({
                oig_employee: function(callback) {
                oig.find(OIGQuery)
                    .exec(callback);
                },
                sam_employee: function(callback) {
                sam.find(SAMQuery)
                    .exec(callback);
                },
                sdn_employee: function(callback) {
                    sdn.find(SDNQuery)
                        .exec(callback);
                    },
                nonsdn_employee: function(callback) {
                    nonsdn.find(NONSDNQuery)
                        .exec(callback);
                    },
            }, function(err, results) {
                if (err) { return next(err); }
                //Successful, so render
                res.render('index', { title: 'Pulsecheck', employee_oig_list: results.oig_employee, employee_sam_list: results.sam_employee, employee_sdn_list: results.sdn_employee, employee_nonsdn_list: results.nonsdn_employee });
            });
        }
    });
};
