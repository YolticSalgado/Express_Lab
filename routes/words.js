const express = require('express');
const router = express.Router();  //Calling express as a function sets up server
const {readFile, writeFile} = require('fs').promises;

router.get('/', (req, res)=>{  // /words
    res.send('Word Homepage');
});
router.get('/wotd', (req, res)=>{   // /words/wotd
    res.render('wotd')
});

module.exports = router;