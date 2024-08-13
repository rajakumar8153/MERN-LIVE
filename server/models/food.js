const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    calorieIntake: {
        type: Number,
        required: true,
    },
    session: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;