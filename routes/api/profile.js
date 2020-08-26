const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator/check');


//@route        GET api/profile/me
//@description  GET current users profile
//@access       Private
//whatever routes i want to protect needs to be added as a parameter
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',
            ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//@route        POST api/profile
//@description  CREATE OR UPDATE user profile
//@access       Private

router.post('/', [auth, [
    check('status', 'Status is required')
        .not()
        .isEmpty(),
    check('skills', 'Skills is required')
        .not()
        .isEmpty()
    ]
 ],
    async (req, res) => {
        const errors = vaidationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json( { errors: errors.array() } );
        }

    })




module.exports = router;
