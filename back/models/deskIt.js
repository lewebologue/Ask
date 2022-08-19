const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const deskItSchema = mongoose.Schema({
    number: {type: String, required: true, unique: true},
    type: {type: String, required: true},
    user: {type: String, required: true},
    failureLocation: {type: String, required: true},
    failureDescription: {type: String, required: true},
    status: {type: String, required: true, default: "Demande envoyée"},
    userInCharge: {type: String},
    actionsDone: {type: String},
});

deskItSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Forklift', deskItSchema);