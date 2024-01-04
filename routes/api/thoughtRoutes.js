const router = require('express').Router();

const {
    getThoughts,
    singleThought,
    newThought,
    deleteThought,
    modifyThought,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(newThought);

router.route('/:thoughtId').get(singleThought).delete(deleteThought).put(modifyThought);


router.use('/', (req,res) => {
    res.send('You made it!!')
});

module.exports = router;