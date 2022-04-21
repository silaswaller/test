const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The Author's name is required!"],
        unique: [true, "This name is already taken!"],
        minlength: [3, "The Author's name must be at least 3 characters long!"],
    }
}, { timestamps: true });
AuthorSchema.plugin(uniqueValidator, { message: 'This name is already in our list!' });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;