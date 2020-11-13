const router = require("express").Router();
const Workout = require("../models/workouts");
// const db = require("")

router.get("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
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
router.put("/api/workouts/:id", ({ body }, res) => {
    // workout = get workout with id :id
    // add the exercise (body) to the workout.exercises
    // save the workout to save the addition
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

// app.post("/api/workouts", )