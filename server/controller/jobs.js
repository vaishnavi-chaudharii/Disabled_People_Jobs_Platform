// @desc    Get All Jobs
// @route   GET /api/v1/jobs
// @access  Public
exports.getJobs = (req,res,next) => {
    try {
        res.status(200).json({msg: "Get Data"})
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
}

// @desc    Get Single Job
// @route   GET /api/v1/job/:id
// @access  Public
exports.getJob = (req,res,next) => {
    try {
        res.status(200).json({msg: "Get Job by ID"})
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
}

// @desc    Create a new Job
// @route   POST /api/v1/jobs
// @access  Private
exports.createJob = (req,res,next) => {
    try {
        res.status(201).json({msg: "Post Data"})
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
}

// @desc    Update a Job
// @route   PUT /api/v1/jobs
// @access  Private
exports.updateJob = (req,res,next) => {
    try {
        res.status(200).json({msg: "Update Data"});
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
}

// @desc    Delete a Job
// @route   DELETE /api/v1/jobs
// @access  Private
exports.deleteJob = (req,res,next) => {
    try {
        res.status(200).json({msg: "Delete Data"});
    } catch (err) {
        return res.status(500).json({err: err.message});
    }
}