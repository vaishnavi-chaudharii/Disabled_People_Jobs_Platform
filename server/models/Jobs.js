const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema({
    j_name: {
        type: String,
        required: [true, "Please Add a Job title"],
        unique: [true, "Please Add a unique Name"],
        trim: true,
        maxLength: [50, 'Name cannot be more than 50 characters']
    },
    j_slug: {
        type: String,
    },
    j_mode: { // WFH / Offline
        type: String,
        required: [true, "Please Add a Job Mode"],
    },
    j_startDate: {
        type: Date,
        required: [true, "Please Add a Start Date"],
    },
    j_salary: {
        type: String,
        required: [true, "Please Add a Salary"]
    },
    j_applyBy: {
        type: Date,
        required: [true, "Please add a last date to apply"]
    },
    j_desc: {
        type: String,
        required: [true, "Please Add a About Work"]
    },
    j_skills: [{
        type: String,
        required: [true, "Please Add a Skill"]
    }],
    j_whoCanApply: [{
        type: String,
        required: [true, "Please Add Who can apply"]
    }],
    j_website: {
        type: String,
        required: [true, "Please Add a Website"]
    },
    j_email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
    },
    j_address: {
        type: String,
        required: [true, 'Please add an address']
    },
    j_location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    j_averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must can not be more than 10']
    },
    j_photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Job', JobsSchema)

