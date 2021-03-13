//HANDLES DATABASE CREDENTIALS
const mongoose = require('mongoose');

require('dotenv').config(); //gets credentials
const connection = process.env.ATLAS_URI;

mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));