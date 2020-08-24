const express = require ('express');
const router = express.Router();
//to validate if the data is correct from Users.js
const {check, validationResult} = require('express-validator/check');

//@route        POST api/users
//@description  Register user
//@access       Public

//second parameter forf validator
//check in documentation express validator
//VALIDATION
router.post('/',[
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check(
        'password',
         'Please enter a password with 6 or more characters')
         .isLength({ min:6 })

],(req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    res.send('User route');
});
//then test on postman
//keep endpoints RESTFUL

module.exports = router;