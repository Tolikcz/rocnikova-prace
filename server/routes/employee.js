var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    employee: [
      {
        firstname: "a",
        surname: "b",
        bornIn: "c",
        startedAt: 200,
      },
    ],
  });
});
router.get("/:id", function (req, res, next) {
  res.status(200).send({
    firstname: "a",
    surname: "b",
    bornIn: "c",
    startedAt: "200",
  });
});
router.post("/", function (req, res, next) {
  const employee = {
    firstname: req.body.firstname,
    surname: req.body.surname,
    bornIn: req.body.bornIn,
    startedAt: req.body.startedAt,
  };
  res.status(200).send(employee);
});

router.put("/:id", function (req, res, next) {
  const employee = {
    id: req.params.id,
    firstname: req.body.firstname,
    surname: req.body.surname,
    bornIn: req.body.bornIn,
    startedAt: req.body.startedAt,
  };
  res.status(200).send(employee);
});
router.patch("/:id", function (req, res, next) {
  const employee = {
    id: req.params.id,
    firstname: req.body.firstname,
  };
  res.status(200).send(employee);
});
router.delete("/:id", function (req, res, next) {
  res.status(200).send({
    message: `Úspěšně smazane ${req.params.id}`,
  });
});
module.exports = router;
