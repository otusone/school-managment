const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
    parentId: { type: String, required: true, unique: true },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminSchool', required: true, },
    role: { type: String, enum: ['Parent'], default: "Parent" },
    father: {
        firstName: { type: String, trim: true },
        middleName: { type: String, trim: true },
        lastName: { type: String, trim: true },
        email: { type: String, trim: true },
        mobile: { type: String, trim: true },
        occupation: { type: String, trim: true },
        dateOfBirth: { type: Date },
        avatar: { type: String, trim: true }
    },

    mother: {
        firstName: { type: String, trim: true },
        middleName: { type: String, trim: true },
        lastName: { type: String, trim: true },
        email: { type: String, trim: true },
        mobile: { type: String, trim: true },
        occupation: { type: String, trim: true },
        dateOfBirth: { type: Date },
        avatar: { type: String, trim: true }
    },

    guardian: {
        relations: { type: String, required: true },
        firstName: { type: String, required: true, trim: true },
        middleName: { type: String, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true }, // Login email for guardian
        mobile: { type: String, required: true, trim: true },
        address: { type: String, required: true },
        occupation: { type: String, trim: true },
        dateOfBirth: { type: Date, required: true },
        avatar: { type: String, trim: true }
    },

    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],

    password: { type: String, required: true },
    deviceTokens: [{ type: String, trim: true }],
    token: [
        {
            token: { type: String, trim: true }
        }
    ],
    lastLogin: { type: Date, default: null },
    active: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false }
}, {
    versionKey: false,
    timestamps: true
});

// To remove password from the response
parentSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
};

// Generate JWT token
parentSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({
        _id: user._id.toString(),
        parentId: user.parentId,
        email: user.email,
        role: user.role,
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRE
    });

    if (user.tokens.length >= 2) {
        user.tokens.shift();
    }

    user.tokens = user.tokens.concat({ token });

    await user.save();
    return token;
}

userSchema.methods.removeExpiredTokens = async function () {
    const user = this;
    const currentTimestamp = Date.now() / 1000;
    user.tokens = user.tokens.filter(tokenObj => {
        try {
            const decoded = jwt.verify(tokenObj.token, process.env.JWT_SECRET);
            if (decoded.exp > currentTimestamp) {
                return true;
            }
        } catch (error) {
            console.error('Token verification error:', error);
        }

        return false;
    });
};
// Hash password before saving
parentSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

const Parent = mongoose.model('Parent', parentSchema);
module.exports = Parent;
