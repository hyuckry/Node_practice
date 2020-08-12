const express = require('express');
const morgan = require('morgan');
const bodyParser=require('body-parser');
const app = express();
const userRouter=require('./api/user');


const mw = (req,res,next)=>{
    console.log('mw');
    //throw Error('error!');
    next();
}

const errorMw = (err,req, res,next)=>{
    console.log(err.message);
}
//app.use(mw);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/users', userRouter);
//app.use(errorMw);


//app.listen(3000,()=>{    console.log('running');});

module.exports = app;