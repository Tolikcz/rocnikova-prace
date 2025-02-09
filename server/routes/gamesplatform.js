const express = require('express');
const router = express.Router();

const gamesplatformController = require("../controllers/gamesplatform")

router.get('/',gamesplatformController.getAllPlatforms);

router.get('/:id',gamesplatformController.getPlatformById);

router.post('/',gamesplatformController.createPlatform);

router.put('/:id',gamesplatformController.updatePlatform);

router.delete('/:id',gamesplatformController.deletePlatform);


module.exports = router;
