const router = require('express').Router();

const {
    getThoughts,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts);


router.use('/', (req,res) => {
    res.send('You made it!!')
});

module.exports = router;