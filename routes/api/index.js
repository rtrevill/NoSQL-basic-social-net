const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);

router.use('/', (req,res) => {
    res.send("You're getting there")
}
);

module.exports = router;
