const router = require("express").Router();

let Exchange = require("../models/exchange.model");

router.route("/").get((req, res) => {
  Exchange.find()

    .then(exhanges => res.json(exchanges))

    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const description = req.body.description;

  const duration = Number(req.body.duration);

  const date = Date.parse(req.body.date);

  const newExchange = new Exchange({
    username,

    description,

    duration,

    date
  });

  newExchange
    .save()

    .then(() => res.json("Exercise added!"))

    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Exchange.findById(req.params.id)

    .then(exercise => res.json(exercise))

    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Exchange.findByIdAndDelete(req.params.id)

    .then(() => res.json("Exercise deleted."))

    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exchange.findById(req.params.id)

    .then(exchange => {
      exchange.username = req.body.username;

      exchange.description = req.body.description;

      exchange.duration = Number(req.body.duration);

      exchange.date = Date.parse(req.body.date);

      exchange
        .save()

        .then(() => res.json("Exchange updated!"))

        .catch(err => res.status(400).json("Error: " + err));
    })

    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
