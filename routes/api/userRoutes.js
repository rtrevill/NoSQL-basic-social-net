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

router.route('/:userId/friends/:friendId').post(makeFriend).delete(endFriend);


module.exports = router;