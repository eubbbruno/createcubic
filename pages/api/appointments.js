// pages/api/appointments.js
import dbConnect from '../../lib/dbConnect';
import Appointment from '../../models/Appointment';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { name, email, phone, date, time } = req.body;

      const appointment = new Appointment({
        name,
        email,
        phone,
        date,
        time,
      });

      await appointment.save();
      return res.status(201).json({ success: true, data: appointment });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}