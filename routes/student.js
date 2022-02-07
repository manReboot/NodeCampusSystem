const express = require('express')
const path = require('path')
const router = express.Router();
const helper = require('../util/rootpath')

router.use('/add',(req,res,next)=>{

    console.log('in 2 the middle of server')
    res.sendFile(path.join(helper,'views','add-student.html'))

})

router.post('/registered',(req,res,next)=>{
    console.log(req.body)
     console.log(req.body['title'])
      res.sendFile(path.join(helper,'views','student-registered.html'))
})

router.post('/list',(req,res,next)=>{
      res.send('<h1>This student listing</h1>')
})

module.exports = router