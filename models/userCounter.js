
const mongoose = require('mongoose');

const userCounterSchema = new mongoose.Schema({
    school:{type:String,required:true,trim:true},
    counterType:{type:String,required:true,trim:true},
    counter: { type: Number, required: true,default:0 }
}, {
    versionKey: false,
    timestamps: true
});


const UserCounter = mongoose.model('UserCounter', userCounterSchema);

module.exports = UserCounter;

