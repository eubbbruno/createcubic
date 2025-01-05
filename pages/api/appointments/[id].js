// pages/api/appointments/[id].js
import dbConnect from '../../../lib/dbConnect';
import Appointment from '../../../models/Appointment';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  if (req.method === 'DELETE') {
    try {
      await Appointment.findByIdAndDelete(id);
      return res.status(200).json({ success: true, message: 'Agendamento deletado com sucesso' });
    } catch (error) {
      return res.status(400).json({ success: false, message: 'Erro ao deletar agendamento' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Método não permitido' });
  }
}