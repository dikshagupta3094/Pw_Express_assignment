const express = require('express')
const app = express()
const port = 4050;
let counter = 0;
app.get('/',(req,res)=>{
  res.json({'counter': `${counter}`})
})

app.get('/increment',(req,res)=>{
    counter++;
    res.json({'counter':`${counter}`})
})

app.get('/decrement', (req,res)=>{
    counter--;
    res.json({'counter': `${counter}`})
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})