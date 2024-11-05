const express = require('express')
const Port = 4770

const app = express()

app.use(express.json())

app.get('/', (req, res)=> {
    res.status(200).json("Hello");
})

app.listen(Port, ()=>{
    console.log(`Server is running in Port : ${Port}`)
    //console.log("Server is running in Port : " + Port)
    
})