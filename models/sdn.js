var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var sdnSchema = Schema(
  {
    "ent_num": {type: Number, required: true},
    "SDN_Name": {type: String, max: 350 },
    "SDN_Type": {type: String, max: 12 },
    "Program": {type: String, max: 50 },
    "Title": {type: String, max: 200 },
    "Call_Sign": {type: String, max: 8 },
    "Vess_type": {type: String, max: 25 },
    "Tonnage": {type: String, max: 14 },
    "GRT": {type: String, max: 8 },
    "Vess_flag": {type: String, max: 40 },
    "Vess_owner": {type: String, max: 150 },
    "Remarks": {type: String, max: 1000 },
}
);

//Export model
module.exports = mongoose.model('sdn', sdnSchema);