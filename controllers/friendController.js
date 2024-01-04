const User = require('../models/User');

module.exports = {
    async makeFriend(req,res) {
        try{
            const newFriend = await User.findByIdAndUpdate(req.params.userId, { $addToSet: {'friends': req.params.friendId}}, {new:true})
            res.json(newFriend);
        }catch(err){
            res.status(500).json(err);
        }
    },
    async endFriend(req,res) {
        try{
            const endFriend = await User.findByIdAndUpdate(req.params.userId, { $pull: {'friends': req.params.friendId}}, {new:true})
            res.json(endFriend);
        }catch(err){
            res.status(500).json(err);
        }
    }
}