const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema([{
  day: {
    type: String,
    // trim: true,
    // required: "Enter a name for transaction"
  },
  exercises: [ {
    type: {
      type: String,
      // trim: true,
      // required: "Workout Type"
    },
    name: {
      type: String,
      // trim: true,
      // required: "Workout Name"
    },
    duration: {
      type: Number,
      // trim: true,
      // required: "Enter the duration you worked out"
    },
    weight: {
      type: Number,
      // required: "Enter an amount"
    },
    reps: {
      type: Number,
      // required: "Enter an amount"
    },
    sets: {
      type: Number,
      // required: "Enter an amount"
    },
    distance: {
      type: Number,
      // required: "Enter an amount"
    }
  }
  ]
  
}],

{
  toJSON: {
    virtuals: true
}
}):



const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;