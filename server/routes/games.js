var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    game: [
      {
        name: "a",
        company: "b",
        hasDlc: "c",
        price: 200,
      },
    ],
  });
});
router.get("/id", function (req, res, next) {
  res.status(200).send({
    name: "a",
    company: "b",
    hasDlc: "c",
    price: "200",
  });
});
router.post("/", function (req, res, next) {
  const game = {
    name: req.body.name,
    company: req.body.brand,
    hasDlc: req.body.rounds,
    price: req.body.price,
  };
  res.status(200).send(game);
});

router.put("/:id", function (req, res, next) {
  const game = {
    id: req.params.id,
    name: req.body.name,
    company: req.body.brand,
    hasDlc: req.body.rounds,
    price: req.body.price,
  };
  res.status(200).send(game);
});
router.patch("/:id", function (req, res, next) {
  const game = {
    id: req.params.id,
    name: req.body.name,
  };
  res.status(200).send(game);
});
router.delete("/:id", function (req, res, next) {
  res.status(200).send({
    message: `Úspěšně smazane ${req.params.id}`,
  });
});
module.exports = router;
