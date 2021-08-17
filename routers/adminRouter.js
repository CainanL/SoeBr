const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');

router.get('/admin', auth, (req, res)=>{

    if(req.user.admin){
        res.send('Admin, access successfully');
    }else{
        res.send('access danied, you are a not admin')
    }
})

router.get('/free', auth, (req, res)=>{
    res.send('this data just can be read to loged user')
})

module.exports = router;