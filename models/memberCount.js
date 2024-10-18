
const mongoose = require('mongoose');

const memberCountSchema = new mongoose.Schema({
    school:{type:String,required:true,trim:true},
    idType:{type:String,required:true,trim:true},
    createdId: { type: Number, required: true,default:0 }
}, {
    versionKey: false,
    timestamps: true
});


const MemberCount = mongoose.model('MemberCount', memberCountSchema);

module.exports = MemberCount;

