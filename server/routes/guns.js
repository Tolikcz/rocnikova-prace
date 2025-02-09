var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    guns: [
      {
        name: "a",
        brand: "b",
        rounds: "c",
        price: "d",
        ownerld: "e",
      },
    ],
  });
});
router.get("/:id", function (req, res, next) {
  res.status(200).send({
    name: "a",
    brand: "b",
    rounds: "c",
    price: "d",
    ownerld: "e",
  });
});
router.post("/", function (req, res, next) {
  const gun = {
    name: req.body.name,
    brand: req.body.brand,
    rounds: req.body.rounds,
    price: req.body.price,
    ownerld: req.body.ownerld,
  };
  res.status(200).send(gun);
});

router.put("/:id", function (req, res, next) {
  const gun = {
    id: req.params.id,
    name: req.body.name,
    brand: req.body.brand,
    rounds: req.body.rounds,
    price: req.body.price,
    ownerld: req.body.ownerld,
  };
  res.status(200).send(gun);
});
router.patch("/:id", function (req, res, next) {
  const gun = {
    id: req.params.id,
    name: req.body.name,
  };
  res.status(200).send(gun);
});
router.delete("/:id", function (req, res, next) {
  res.status(200).send({
    message: `Úspěšně smazane ${req.params.id}`,
  });
});
module.exports = router;
