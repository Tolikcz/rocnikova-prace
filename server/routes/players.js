const express = require('express');
const router = express.Router();

const playersController = require("../controllers/players")

router.get('/',playersController.getAllPlayers);

router.get('/:id',playersController.getPlayerById);

router.post('/',playersController.createPlayer);

router.put('/:id',playersController.updatePlayer);

router.delete('/:id',playersController.deletePlayer);


module.exports = router;
