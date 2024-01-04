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
// const User = model('user', userSchema);

module.exports = User;
