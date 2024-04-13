require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000
const a=[1,2,3,4]
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("shahsharvendra")
})
app.get('/login',(req,res)=>{
    res.send('<h1> please login at backend </h1>')
})
app.get('/youtube',(req,res)=>{
     res.send('<h2>backend</h2>')
})
app.get('/github',(req,res)=>{
    res.json(a)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})