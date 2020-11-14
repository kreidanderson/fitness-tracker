const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema([{
  day: {
    type: Date,
    default: Date.now
    // trim: true,mong
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
  ],

  totalDuration: { type: Number }
  
}],
{
  toJSON: {
    virtuals: true
}
});

workoutSchema.pre('save', function() {
  // loop over the exercises
  let totalDuration = 0;
  // add up all the durations
  this.exercises.forEach(exercise => {
    totalDuration += exercise.duration;
  });
  
  this.set( {totalDuration: totalDuration} );
  // set to total duration
  console.log('set totalDuration');
});

const Workouts = mongoose.model("workouts", workoutSchema);

module.exports = Workouts;