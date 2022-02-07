const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const subjectRoutes = require('./routes/subject')
const studentRoutes = require('./routes/student')
const helper = require('./util/rootpath')
const path = require('path')

const app = express();
//top to bottom
app.use(express.static(path.join(helper,'public')))

app.use(bodyParser.urlencoded({extended:true}));

app.use('/subject',subjectRoutes)
app.use('/student',studentRoutes)

app.get('/',(req,res,next)=>{
   console.log('in 2 the middle of server')
   res.sendFile(path.join(helper,'views','home.html'))
})

app.use((req,res,next)=>{
    res.status(400).sendFile(path.join(helper,'views','404.html'))
})

/*const server = http.createServer(app)
server.listen(9090)*/
app.listen(9090)
console.log("started")