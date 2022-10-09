const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')
const colors = require('colors')

dotenv.config({ 
    path: './config/config.env'
})

connectDB();

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/jobs', require('./routes/jobs'))

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} 🚀`.yellow.bold);
});

//Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => {
        process.exit(1)
    });
})

