const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlegth: 1,

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: reformatted
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    });

function reformatted(createdAt){   
    return createdAt.toString();
}

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
