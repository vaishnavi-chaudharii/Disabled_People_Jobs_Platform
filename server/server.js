const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ 
    path: './config/config.env'
})

const app = express();

app.get('/', async (req,res)=>{
    try {
        res.status(200).json({msg: "Hello From express"})
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} 🚀`);
});