const { Schema, model } = require('mongoose');
const {Thought} = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            trimmed: true,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validated: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const User = model('user', userSchema);

module.exports = User;
