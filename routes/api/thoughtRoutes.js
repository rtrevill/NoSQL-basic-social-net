const router = require('express').Router();

const {
    getThoughts,
    singleThought,
    newThought,
    deleteThought,
    modifyThought,
} = require('../../controllers/thoughtController.js');

const {
    newReaction,
    delReaction,
} = require('../../controllers/reactionController.js');

router.route('/').get(getThoughts).post(newThought);

router.route('/:thoughtId').get(singleThought).delete(deleteThought).put(modifyThought);

router.route('/:thoughtId/reactions').post(newReaction).delete(delReaction);

module.exports = router;