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
            .populate({path: 'thoughts', select: '-__v'})
            .populate({path: 'friends', select: '-__v'});

            if (!user) {
                return res.status(400).json({ message: 'No post with that ID' });
              }      
            res.status(200).json(user);
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createUser(req,res) {
        try{
            const createUser = await User.create(req.body);
            res.status(200).json(createUser);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req,res) {
        try{
            const userfinder = await User.findById(req.params.userId)

            if (!userfinder){
                return res.status(400).json({message: "No user with that Id exists"});
            }
            const thoughtFinder = await Thought.find({username: userfinder.username})
            const user = await User.deleteOne({_id: req.params.userId})
            const thought = await Thought.deleteMany({username: userfinder.username})
            res.status(200).json({Message: "User and associated thoughts deleted"});

        } catch(err){
            res.status(500).json(err);
        }
    },
    async updateUser(req,res) {
        try{
            const updUser = await User.findOneAndUpdate({_id: req.params.userId},req.body,{ new: true })

            if(!updUser){
                return res.status(400).json({message: "No user with this ID exists"})
            }

            res.json(updUser);
        } catch(err){
            res.status(500).json(err);
        }
    }
};