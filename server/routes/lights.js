const express = require('express');
const router = express.Router();

const lightsController = require("../controllers/lights")

router.get('/',lightsController.getAllLights);

router.get('/:id',lightsController.getLightById);

router.post('/',lightsController.createLight);

router.put('/:id',lightsController.updateLight);

router.delete('/:id',lightsController.deleteLight);


module.exports = router;
