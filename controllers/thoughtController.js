const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    async getThoughts(req,res) {
        try{
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    async singleThought(req,res) {
        try{
            const thought = await Thought.findOne({_id: req.params.thoughtId})

            if (!thought){
                return res.status(400).json({message: "Sorry that thought doesn't exist"});
            }
            
            res.status(200).json(thought);
            
        }catch(err){
            console.log(err);
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

            if(!updUser){
                await Thought.findByIdAndDelete(result._id)
                return res.status(400).json({message: "This username is incorrect"})
            }
                res.status(200).json(updUser)
        })
        } catch(err){
            res.status(500).json(err);
        }
    },
    async deleteThought(req,res) {
        try{
            const delThought = await Thought.findByIdAndDelete(req.params.thoughtId);

            if(!delThought){
                return res.status(400).json({message: "This thought does not exist"})
            }

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

            if(!changedThought){
                return res.status(400).json({message: "This thought does not exist"})
            }
            res.status(200).json(changedThought);
        }catch(err){
            res.status(500).json(err);
        }
    }
}