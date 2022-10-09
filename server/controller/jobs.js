const Job = require('../models/Jobs')

// @desc    Get All Jobs
// @route   GET /api/v1/jobs
// @access  Public
exports.getJobs = async (req,res,next) => {
    try {
        const job = await Job.find();
        if(job){
            res.status(200).json({
                success: true,
                data: job
            })
        }
        } catch (err) {
        return res.status(400).json({
            success: false,
            err: err.message
        });
    }
}

// @desc    Get Single Job
// @route   GET /api/v1/job/:id
// @access  Public
exports.getJob = async (req,res,next) => {
    try {
        const job = await Job.findById(req.params.id)

        if(!job){
            return res.status(400).json({
                success: false,
                data: "Job Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: job
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            err: err.message
        });
    }
}

// @desc    Create a new Job
// @route   POST /api/v1/jobs
// @access  Private
exports.createJob = async (req,res,next) => {
    try {
        const job = await Job.create(req.body)
        
        res.status(201).json({
            success: true,
            data: job
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            err: err.message
        });
    }
}

// @desc    Update a Job
// @route   PUT /api/v1/jobs
// @access  Private
exports.updateJob = async (req,res,next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!job){
            return res.status(400).json({
                success: false,
                data: "Job Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: job
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            err: err.message
        });
    }
}

// @desc    Delete a Job
// @route   DELETE /api/v1/jobs
// @access  Private
exports.deleteJob = async (req,res,next) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if(job){
            res.status(200).json({
                success: true,
                data: "Job Deleted Successfully"
            })
        }
    } catch (err) {
        return res.status(400).json({
            success: false,
            err: err.message
        });
    }
}