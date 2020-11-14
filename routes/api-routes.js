const router = require("express").Router();
const Workouts = require("../models/workouts");
// const db = require("")

// Returns all workouts from collection
router.get("/api/workouts", ({ body }, res) => {
    Workouts.find({})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    }); 
});

// Create a new workout
router.post("/api/workouts", ({ body }, res) => {
    Workouts.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Add exercise buttons sends data to this route 
// The front end sends exercise data in the body.
// {"type":"resistance","name":"","weight":0,"sets":0,"reps":0,"duration":0}
router.put("/api/workouts/:id", (req, res) => {
    let exercise = req.body;

    // get workout id from the params :id
    let workoutId = req.params.id;

    Workouts.findById(workoutId)
    .then(workout => {
        workout.exercises.push(exercise);
        workout.save()
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
          });
    });
});

// Returns all the workouts
router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})
    .sort({ date: -1 })
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

// app.post("/api/workouts", )