
const mongoose = require('mongoose');

const memberCountSchema = new mongoose.Schema({
    previousUserId: { type: Number, required: true,default:0 }
}, {
    versionKey: false,
    timestamps: true
});


const MemberCount = mongoose.model('MemberCount', memberCountSchema);

module.exports = MemberCount;

