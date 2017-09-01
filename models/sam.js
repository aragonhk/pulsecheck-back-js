var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var samSchema = Schema(
  {
    "Classification": {type: String, max: 100},
    "Name": {type: String, max: 100},
    "Prefix": {type: String, max: 100},
    "First": {type: String, max: 100},
    "Middle": {type: String, max: 100},
    "Last": {type: String, max: 100},
    "Suffix": {type: String, max: 100},
    "Address 1":  {type: String, max: 100},
    "Address 2": {type: String, max: 100},
    "Address 3": {type: String, max: 100},
    "Address 4": {type: String, max: 100},
    "City":  {type: String, max: 100},
    "State / Province":  {type: String, max: 100},
    "Country": {type: String, max: 100} ,
    "Zip Code": {type: String, max: 100} ,
    "DUNS": {type: String, max: 100},
    "Exclusion Program": {type: String, max: 100} ,
    "Excluding Agency":  {type: String, max: 100},
    "CT Code": {type: String, max: 100},
    "Exclusion Type":  {type: String, max: 100},
    "Additional Comments": {type: String, max: 100},
    "Active Date":  {type: Date},
    "Termination Date":  {type: Date},
    "Record Status": {type: String, max: 100},
    "Cross-Reference": {type: String, max: 100},
    "SAM Number":  {type: String, max: 100},
    "CAGE": {type: String, max: 100},
    "NPI": {type: String, max: 100}, 
}
);

//Export model
module.exports = mongoose.model('sam', samSchema);