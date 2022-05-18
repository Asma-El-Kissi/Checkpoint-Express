const express = require('express');
const app = express();
const port = 5000;
const userRoute=require('./Routers/userRoute')
const authMiddleware = (req, res, next)=>{
    const hour= new Date().getHours();
    const day = new Date().getDay();
    if ((day > 0 && day < 6) && (hour >= 9 && (hour) <= 17)){
        console.log("app is open 🕖");
        next()
    } else {
        console.log("app error ⛔");
        console.log('We are not working');
        res.sendFile(__dirname + '/pages/Close.html');
        next()
    }
    // console.log(day)
    // console.log(hour)
}

app.use(authMiddleware)
app.use('/',userRoute)

app.use(express.static(__dirname + '/pages'));

app.listen(port, (err)=> err ? console.error (err):console.log('The server is running ' , port));