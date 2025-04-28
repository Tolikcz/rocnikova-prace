var express = require('express');
var router  = express.Router();

const reservationsController = require('../controllers/reservations');

// GET /reservations
router.get('/', reservationsController.getAllReservations);

// GET /reservations/:id
router.get('/:id', reservationsController.getReservationById);

// POST /reservations
router.post('/', reservationsController.createReservation);

// PUT /reservations/:id
router.put('/:id', reservationsController.updateReservation);

// DELETE /reservations/:id
router.delete('/:id', reservationsController.deleteReservation);

module.exports = router;
