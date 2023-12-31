const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema)
module.exports  = User