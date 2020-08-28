const express = require ('express');
const router = express.Router();
const { check, validationResult }  = require('express-validator/check');
const auth = require('../../middleware/auth');


//@route        GET api/posts
//@description  create a post
//@access       Private

router.post('/',
 [ auth ,
     [
       check('text', 'Text is required')
       .not()
       .isEmpty()
    ] 
 ],
  (req, res) => {

});


module.exports = router;