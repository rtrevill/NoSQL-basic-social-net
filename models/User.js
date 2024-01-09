const { Schema, model } = require('mongoose');
const {Thought} = require('./Thought');

const validateEmail = (email)=>{
    let check = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return check.test(email)
};

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
            validate: [validateEmail, 'Please fill a validated email address'],
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: "thought",
            },
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: "user",
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    });

const User = model('user', userSchema);

module.exports = User;
