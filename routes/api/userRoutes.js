const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);
// router.route('/', (req,res) => {
//     res.send("What's Wrong?");
// })

router.route('/abc')
    .get(function (req, res, next) {
        console.log("GET request called");
        res.send("abc successful");
    });

router.use('/', (req,res) => {
    res.send("Whats Wrongy??");
});

module.exports = router;