const express = require('express')
const app = express()
const port = 3000

app.use(express.static('resume'))
app.get('/',(req,res)=>res.sendFile('Hello World!'))

app.listen(port,()=>console.log('app listening on port'+port))
