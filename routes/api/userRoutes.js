const router = require('express').Router();

const {
    getUsers,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers);

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