import express from 'express';

const route = express.Router();


route.get('/',(req,res)=>{
    res.render('inicio')
});

route.get('/nosotros',(req,res)=>{
    res.render('nosotros')
});

export default route;