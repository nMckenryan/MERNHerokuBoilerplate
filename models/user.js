const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//EXAMPLE SCHEMA FOR DB

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("User", userSchema, "users")