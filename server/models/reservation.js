const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationSchema = new Schema({
  date:  { type: String, required: true }, 
  time:  { type: String, required: true },  
  lane:  { type: Number, required: true },  
  name:  { type: String, required: true },  
  email: { type: String, required: true }  
}, {
  timestamps: true
});

reservationSchema.index({ date: 1, time: 1, lane: 1 }, { unique: true });

module.exports = mongoose.model('Reservation', reservationSchema);
