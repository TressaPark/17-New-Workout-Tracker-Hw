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
        distance:{
          type: Number,
          trim: true,
          required: "Enter distance"
      },
  }
],
  day: {
    type: Date,
    default: Date.now
  }
});

workoutSchema.methods.totalDuration= function(){
  return this.totalDur = this.exercises.reduce((total, exercise)=>
  {
    return total + exercise.duration;
  },0);
  console.log(this.totalDur)
  };




const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
