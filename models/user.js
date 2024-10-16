
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, },
    name: { type: String,required: true,},
    dob: { type: Date, required: true },
    password:{type:String},
    email: { type: String, lowercase: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    nationality: { type: String, required: true, enum: ['INDIAN', 'FOREIGNER'], default: 'INDIAN' },
    role: { type: String,enum: ['USER',"VENDOR","ADMIN","MANAGER"], uppercase: true,default:"USER" },
    isOtpVerified:{type:Boolean,default:false},
    isSignupVerified:{type:Boolean,default:false},
    isDetailsFilled:{type:Boolean,default:false},
    otpCreatedAt:{type:Date,default:null},
    gstNo:{ type: String, },
    address:{ type: String,required: true,},
    isActive: { type: Boolean, default: true }, 
    deviceToken:{type:String},
    token:{type:String},
    avatar: {
        type: String
    },

    socialMedia:{type: String,trim: true },
    familyContact:{type: String,trim: true },
    alternateContact:{type: String,trim: true },
    emergencyContact:{type: String,trim: true },

    refrenceName:{type: String,trim: true },
    refrenceContact:{type: String,trim: true },

    panNumber: { type: String, trim: true },
    aadharCardNumber: { type: String, trim: true },
    aadharCardFrontImg: { type: String, trim: true },
    aadharCardBackImg: { type: String, trim: true },
    dlImg: { type: String, trim: true },
    dlNumber: { type: String, trim: true },
    dlExpiry: { type: Date },
    dlType:{type:String,trim:true,enum:["NT","TR","Internation driving permit"]},
    dlCode:{type:String,trim:true,enum:["LMV","HGV","TRANS",]},

// For Foreign users
    passportNumber: { type: String, trim: true },
    passportImg: { type: String, trim: true },
    foreignDLNumber: { type: String, trim: true },
    foreignDLImg: { type: String, trim: true },
    foreignDLExpiry: { type: Date },
    foreigndlType:{type:String,trim:true,},
    foreigndlCode:{type:String,trim:true},
}, {
    versionKey: false,
    timestamps: true
});


userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    return userObject
}
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString(), }, process.env.JWT_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRE
    })
    user.token=token
    await user.save()
    return token
}



userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10)
    }

    next();
})


const User = mongoose.model('User', userSchema);

module.exports = User;

