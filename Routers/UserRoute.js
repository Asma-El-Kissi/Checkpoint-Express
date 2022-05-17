const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../', '/pages/Home Page.html'));
});
router.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname,'../', '/pages/Contact Us.html'));
});
router.get('/services', (req, res)=>{
    res.sendFile(path.join(__dirname,'../', '/pages/Our Services.html'));
});
module.exports=router;