const router = require('express').Router();

router.get('/api/v1/jobs', async (req,res)=>{
    try {
        res.status(200).json({msg: "Get Data"})
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
})

router.get('/api/v1/jobs/:id', async (req,res)=>{
    try {
        res.status(200).json({msg: "Get Job by ID"})
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
})

router.post('/api/v1/jobs', async (req,res)=>{
    try {
        res.status(201).json({msg: "Post Data"})
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
})

router.put('/api/v1/jobs/:id', async (req,res)=>{
    try {
        res.status(200).json({msg: "Update Data"});
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
})

router.delete('/api/v1/jobs/:id', async (req,res)=>{
    try {
        res.status(200).json({msg: "Delete Data"});
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
})

module.exports = router