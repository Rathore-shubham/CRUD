
import express, { Router } from "express"
import auth from "../middlewares/authMiddleware.js"
import appointmentModel from "../models/appointmentModel.js";

const router = express.Router()

router.post('/', auth, async (req, res) => {
  try {
    // const { doctorId, datetime, notes } = req.body;
    // if (!doctorId || !datetime) return res.status(400).json({ message: 'Missing fields' });

    // const doctor = await User.findById(doctorId);
    // if (!doctor || doctor.role !== 'doctor') return res.status(400).json({ message: 'Invalid doctor' });

    // const appt = new Appointment({
    //   patient: req.user._id,
    //   doctor: doctor._id,
    //   datetime: new Date(datetime),
    //   notes
    // });
    // await appt.save();

    const appointment = await appointmentModel.create(req.body);


    res.status(201).json({ message: 'Appointment booked', appointment });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  const getAppointment = await appointmentModel.find();
  res.json(getAppointment);
});

router.put('/:id/cancel', auth, async (req, res) => {
  try {
    const appt = await appointmentModel.findById(req.params.id);

    appt.status = 'cancelled';
    await appt.save();
    res.json({ message: 'Appointment cancelled', appointment: appt });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;