const mongoose = require("mongoose")

const bookSchema = new mongoose.bookSchema({
    name : String,
    createDAT: Date,
    updateDAT: Date
})

const bookModel = mongoose.model('test',bookSchema)

module.exports = bookModel