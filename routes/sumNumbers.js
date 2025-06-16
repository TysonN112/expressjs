const express = require('express'); 

const router = express.Router();

router.get("/", (req,res) => {
    const num1 = parseFloat(req.query.num1); 
    const num2 = parseFloat(req.query.num2);


    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({error: 'Invalid Inputs'});
    }
    res.json({sum: num1 + num2});
});

module.exports = router;