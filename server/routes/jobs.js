const router = require('express').Router();
const {getJobs, getJob, createJob, updateJob, deleteJob} = require('../controller/jobs')

router.route('/').get(getJobs).post(createJob)
router.route('/:id').get(getJob).put(updateJob).delete(deleteJob)

module.exports = router