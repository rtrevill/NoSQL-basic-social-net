const User = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {
    async getUsers(req,res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req,res) {
        try{
            const user = await User.findOne({_id: req.params.userId})
            .populate({path: 'thoughts', select: '-__v'});
            // res.json(user);

            if (!user) {
                return res.status(404).json({ message: 'No post with that ID' });
              }
        
            res.json(user);
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createUser(req,res) {
        try{
            const createUser = await User.create(req.body);
            res.json(createUser);
        } catch(err) {
            res.status(500).json(err);
        }
    }
};