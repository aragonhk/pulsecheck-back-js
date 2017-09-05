var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var oigSchema = Schema(
  {
    LASTNAME: {type: String, max: 100},
    FIRSTNAME: {type: String, max: 100},
    MIDNAME:  {type: String, max: 100},
    BUSNAME: {type: String, max: 100},
    GENERAL: {type: String, max: 100},
    SPECIALTY: {type: String, max: 100},
    UPIN: {type: String, max: 100},
    NPI: {type: String, max: 100},
    DOB: {type: String, max: 100},
    ADDRESS: {type: String, max: 100},
    CITY: {type: String, max: 100},
    STATE: {type: String, max: 2},
    ZIP: {type: String, max: 5},
    EXCLTYPE: {type: String, max: 100},
    EXCLDATE: {type: Date},
    REINDATE: {type: Date},
    WAIVERDATE: {type: Date},
    WVRSTATE: {type: String, max: 100},    
  }
);

oigSchema
.virtual('dob_formatted')
.get(function () {
  return this.DOB ? moment(this.DOB).format('YYYY-MM-DD') : '';
});

//Export model
module.exports = mongoose.model('oig', oigSchema);