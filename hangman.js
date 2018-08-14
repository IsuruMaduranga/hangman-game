const express = require('express')

express()
.use(express.static(__dirname+'/public'))
.use((req,res,next)=>console.log(`${new Date().toString()} ${req.url}`))
.listen(3000,()=>{
    console.log('Game server is up on port 3000')
})