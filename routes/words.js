const express = require('express');
const router = express.Router();  //Calling express as a function sets up server
const {readFile, writeFile} = require('fs').promises;   //Destructuring

router.get('/', (req, res)=>{  // /words
    res.send('Word Homepage');
});
router.get('/wotd', async (req, res)=>{   // /words/wotd
    let wordArray = await getWordFromDictionary();
    let [word, part, definition] = wordArray;
    res.render('wotd', {word:word, part:part, definition:definition});
});

let getWordFromDictionary = async ()=>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let randomNumber = parseInt(Math.random()*lines.length);
        let randomLine = lines[randomNumber];
        let wordArray = randomLine.split('\t');
        console.log(wordArray);
        return wordArray;
    }
    catch(err){
        console.log("There was an error reading the file:", err);
    }
}

module.exports = router;