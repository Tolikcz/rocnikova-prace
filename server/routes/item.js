var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    item: [
      {
        name: "a",
        material: "b",
        weight: 34,
        price: 200,
      },
    ],
  });
});
router.get("/:id", function (req, res, next) {
  res.status(200).send({
    name: "a",
    material: "b",
    weight: 34,
    price: 200,
  });
});
router.post("/", function (req, res, next) {
  const item = {
    name: req.body.name,
    material: req.body.material,
    weight: req.body.weight,
    price: req.body.price,
  };
  res.status(200).send(item);
});

router.put("/:id", function (req, res, next) {
  const item = {
    id: req.params.id,
    name: req.body.name,
    material: req.body.material,
    weight: req.body.weight,
    price: req.body.price,
  };
  res.status(200).send(item);
});
router.patch("/:id", function (req, res, next) {
  const item = {
    id: req.params.id,
    name: req.body.name,
  };
  res.status(200).send(item);
});
router.delete("/:id", function (req, res, next) {
  res.status(200).send({
    message: `Úspěšně smazane ${req.params.id}`,
  });
});
module.exports = router;
