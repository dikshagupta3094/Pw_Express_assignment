
const express = require('express');
const app = express();
const port = 4030
app.get('/',(req,res)=>{
    res.send('Home page')
})

app.get('/random',(req,res)=>{
    const randomNum = Math.round(Math.random()*10+1);
    res.json({'random':`${randomNum}`})
})

app.listen(port,()=>{
    console.log(`Server is running on port number:${port}`);
})