const express = require('express');
const router = express.Router();  //Calling express as a function sets up server

router.get('/', (req, res)=>{  // /users
    res.send('User List');
})
router.get('/new', (req, res)=>{   // /users/new
    res.send('User New Form');
})

module.exports = router;