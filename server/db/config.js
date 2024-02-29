const mongoose = require('mongoose');
const config = require('dotenv').config()

mongoose.connect(process.env.db_url).then(() => console.log('DB connected'))