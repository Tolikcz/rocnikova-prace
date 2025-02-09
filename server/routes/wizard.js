var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    wizard: [
      {
        name: "a",
        staff: "b",
        element: "c",
        lv: 200,
        race: "d",
      },
    ],
  });
});
router.get("/:id", function (req, res, next) {
  res.status(200).send({
    name: "a",
    staff: "b",
    element: "c",
    lv: 200,
    race: "200",
  });
});
router.post("/", function (req, res, next) {
  const wizard = {
    name: req.body.name,
    staff: req.body.staff,
    element: req.body.element,
    lv: req.body.lv,
    race: req.body.race,
  };
  res.status(200).send(wizard);
});

router.put("/:id", function (req, res, next) {
  const wizard = {
    id: req.params.id,
    name: req.body.name,
    staff: req.body.staff,
    element: req.body.element,
    lv: req.body.lv,
    race: req.body.race,
  };
  res.status(200).send(wizard);
});
router.patch("/:id", function (req, res, next) {
  const wizard = {
    id: req.params.id,
    name: req.body.name,
  };
  res.status(200).send(wizard);
});
router.delete("/:id", function (req, res, next) {
  res.status(200).send({
    message: `Úspěšně smazane ${req.params.id}`,
  });
});
module.exports = router;
