var express = require('express')
var app = express()
var path = require('path')
var port = process.env.PORT
if(port==null || port==''){
    port=8000
}
app.use(express.static(path.join(__dirname, '../NATOURS')))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(port,()=>{

    console.log("at 3000");
})