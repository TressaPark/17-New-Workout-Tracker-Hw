const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
 
  exercises: [
    {
        type:{
            type: String,
            trim:true,
            required: "Enter type of workout"
        },
        name:{
            type: String,
            trim: true,
            required: "Enter workout name"
        },
        duration:{
            type: Number,
            trim: true,
            required: "Enter duration"
        },
        weight:{
            type: Number,
            trim: true,
            required: "Enter weight"
        },
        reps:{
            type: Number,
            trim: true,
            required: "Enter reps"
        },
        sets:{
            type: Number,
            trim: true,
            required: "Enter sets"
        },
  }
],
  day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
