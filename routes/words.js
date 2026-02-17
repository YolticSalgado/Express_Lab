const express = require('express');
const router = express.Router();  //Calling express as a function sets up server

router.get('/', (req, res)=>{  // /words
    res.send('Word Homepage');
})
router.get('/wotd', (req, res)=>{   // /words/wotd
    res.send('Here Is The Word of The Day: ');
})

module.exports = router;