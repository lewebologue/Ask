const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const vScanSchema = mongoose.Schema({
    number: {type: String, required: true, unique: true},
    user: {type: String, required: true},
    failureLocation: {type: String, required: true},
    failureDescription: {type: String, required: true},
    status: {type: String, required: true, default: "Demande envoyée"},
    userInCharge: {type: String},
    actionsDone: {type: String},
});

vScanSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Vscan', vScanSchema);
