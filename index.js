
require('dotenv').config()
const express = require('express')
const app = express()
const port = 500;
app.get('/', (req,res)=>{
 res.send('Hello bacha')

});

app.get('/aboutus',(req,res)=>{
    res.send(`you are on about us page`)
})
app.get('/contactus',(req,res)=>{
    res.send(`you are contact6 us  on my page`)
})

app.get('/youtube',(req,res)=>{
    res.send(`you are contact6 us  on my page`)
})
app.listen(process.env.PORT , ()=>{

    console.log (   `listening on Port ${process.env.PORT}`)
})