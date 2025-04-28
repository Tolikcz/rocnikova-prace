const Reservation = require('../models/reservation');

exports.getAllReservations = async (req, res) => {
  try {
    const filter = req.query.date ? { date: req.query.date } : {};
    const reservations = await Reservation.find(filter);
    return res.status(200).send({ msg: 'Reservations fetched', payload: reservations });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Server error' });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).send({ error: 'Reservation not found' });
    }
    return res.status(200).send({ msg: 'Reservation found', payload: reservation });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Server error' });
  }
};

exports.createReservation = async (req, res) => {
  try {
    const { date, time, lane, name, email } = req.body;
    const newRes = await Reservation.create({ date, time, lane, name, email });
    return res.status(201).send({ msg: 'Reservation created', payload: newRes });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(409).send({ error: 'Slot already booked' });
    }
    return res.status(500).send({ error: 'Server error' });
  }
};


exports.updateReservation = async (req, res) => {
  try {
    const updated = await Reservation.findByIdAndUpdate(
      req.params.id,
      {
        date:  req.body.date,
        time:  req.body.time,
        lane:  req.body.lane,
        name:  req.body.name,
        email: req.body.email,
      },
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).send({ msg: 'Reservation not found' });
    }
    return res.status(200).send({ msg: 'Reservation updated', payload: updated });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ msg: 'Slot already booked' });
    }
    return res.status(500).send(error);
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const deleted = await Reservation.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).send({ msg: 'Reservation not found' });
    }
    return res.status(200).send({ msg: 'Reservation deleted' });
  } catch (error) {
    return res.status(500).send(error);
  }
};
