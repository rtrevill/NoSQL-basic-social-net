const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    async getThoughts(req,res) {
        try{
            const thoughts = await Thought.find();
            res.json(thoughts);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    async singleThought(req,res) {
        try{
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            res.json(thought);
        }catch(err){
            res.status(500).json(err);
        }
    },
    async newThought(req,res) {
        try{
            const thought = await Thought.create(req.body)
            .then(async (result)=> {
                const updUser = await User.findOneAndUpdate(
                    {username: req.body.username},
                    {$addToSet: {thoughts: result._id}},
                    {new:true});
                res.json(updUser)})
        } catch(err){
            res.status(500).json(err);
        }
    },
    async deleteThought(req,res) {
        try{
            const delThought = await Thought.deleteOne({_id: req.params.thoughtId})
            const updUser = await User.findOneAndUpdate({"thoughts": req.params.thoughtId}, 
                                                        { $pull: {
                                                            "thoughts": `${req.params.thoughtId}`
                                                        }});
            res.json(updUser);
        }catch(err){
            res.status(500).json(err);
        }
    },
    async modifyThought(req,res) {
        try{
            const changedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {new:true})
            res.json(changedThought);
        }catch(err){
            res.status(500).json(err);
        }
    }
}