var express = require('express')
var app = express()
var path = require('path')
app.use(express.static(path.join(__dirname, '../NATOURS')))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(8080,()=>{

    console.log("at 3000");
})