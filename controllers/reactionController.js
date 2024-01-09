const User = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {
    async newReaction(req,res) {
        try{
            const findUser = await User.findOne({username: `${req.body.username}`})

            if(!findUser){
                return res.status(400).json({message: "No user with this username exists"})
            }
            
            const react = await Thought.findByIdAndUpdate(req.params.thoughtId, {
                                                            $addToSet : { 
                                                                'reactions': req.body
                                                            }
                                                        }, {new : true})
            res.json(react);
        }catch(err){
            res.status(500).json(err);
        }
    },
    async delReaction(req,res) {
        try{
            const delReact = await Thought.findByIdAndUpdate(req.params.thoughtId, {
                                                                $pull: {
                                                                    reactions: {
                                                                        reactionId: `${req.body.reactionId}`
                                                                    }}
                                                            }, {new:true});
            res.json(delReact);
        }catch(err){
            res.status(500).json(err);
        }
    }
}