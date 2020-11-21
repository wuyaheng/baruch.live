const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const secret = require('../config/default.json').jwtSecret;

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

UserSchema.methods = {
    hashPassword: function (plainPW) {
        return bcrypt.hashSync(plainPW, secret)
    },
    checkPassword: function (plainPW) {
        return bcrypt.compareSync(plainPW, secret)
    }
}

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    
    this.password = this.hashPassword(this.password)
    next();
})

module.exports = mongoose.model('User', UserSchema);