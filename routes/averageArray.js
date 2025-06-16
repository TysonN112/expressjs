const express = require('express'); 

const router = express.Router();

router.post('/', (req, res) => {
const { numbers } = req.body; 

if (!Array.isArray(numbers) || numbers.length === 0){ 
    return res.status(400).json({error: 'invalid input'});
    }

    const valid = numbers.filter(n => typeof n === 'number');
    const total = valid.reduce((sum,n) => sum + n, 0);
    const avg = total / valid.length;

res.json({average: avg});
});

module.exports = router;