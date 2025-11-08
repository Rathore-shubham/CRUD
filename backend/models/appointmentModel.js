
// const mongoose = require('mongoose');
import mongoose from "mongoose";


const AppointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  datetime: { type: Date, required: false },
  status: { type: String, enum: ['booked','cancelled'], default: 'booked' },
  notes: { type: String }
}, { timestamps: true });


const Appointment = mongoose.model("Appointment", AppointmentSchema); 
export default Appointment;