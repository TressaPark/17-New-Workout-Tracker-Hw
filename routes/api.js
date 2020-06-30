const router = require("express").Router();
const Workout = require("../models/workout.js");


//api routes communucating with Workout Model
// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)

      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,{$push: {exercises:body}})

      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .limit(7)
    //   .sort({ date: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//html routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));

  });

module.exports = router;
