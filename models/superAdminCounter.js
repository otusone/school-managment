
const mongoose = require('mongoose');

const superAdminCounterSchema = new mongoose.Schema({
    counterType:{type:String,required:true,trim:true},
    counter: { type: Number, required: true,default:0 }
}, {
    versionKey: false,
    timestamps: true
});


const SuperAdminCounter = mongoose.model('SuperAdminCounter', superAdminCounterSchema);

module.exports = SuperAdminCounter;

