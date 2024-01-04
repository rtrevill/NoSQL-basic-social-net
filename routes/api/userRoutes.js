const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
} = require('../../controllers/userController.js');

const {
    makeFriend,
    endFriend,
} = require('../../controllers/friendController.js')

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);
// router.route('/', (req,res) => {
//     res.send("What's Wrong?");
// })
router.route('/:userId/friends/:friendId').put(makeFriend).delete(endFriend);

router.route('/abc')
    .get(function (req, res, next) {
        console.log("GET request called");
        res.send("abc successful");
    });

router.use('/', (req,res) => {
    res.send("Whats Wrongy??");
});

module.exports = router;