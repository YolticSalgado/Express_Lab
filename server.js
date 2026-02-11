const express = require('express');
const app = express();  //Calling express as a function sets up server

app.get('/',(req, res)=>{
    console.log('Here');
    res.send('<h2>HELLO WORLD</h2>')
})
app.get('/potato',(req, res)=>{
    res.send('<p>Here are your potatoes</p>')
})
app.get('/status', (req, res)=>{
    res.download('server.js')
})
app.listen(3030);