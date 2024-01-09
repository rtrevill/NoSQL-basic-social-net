const { Schema,  mongoose } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: new mongoose.Types.ObjectId(),
            auto: true,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: reformattedDate
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

function reformattedDate(createdAt){
    return createdAt.toString();
};

module.exports = reactionSchema;