const express = require('express')

const app =  express();
const port = 4001;
app.get('/',(req,res)=>{
    res.json({msg: 'i am home page'})
})

app.get('/about',(req,res)=>{
    res.json({msg: 'i am about page'})
})

app.get('/contact', (req,res)=>{
    res.json({msg:'support@pwskills.com'})
})
app.listen(port, ()=>{
    console.log(`${port}`);
})