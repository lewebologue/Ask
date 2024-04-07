const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const employeeSchema = mongoose.Schema({
    employeeCode : {type : String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    sector: {type: String, required: true},
    function: {type: String, required: true}
});

employeeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Employee', employeeSchema);