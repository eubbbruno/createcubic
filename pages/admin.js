// pages/admin.js
import { useEffect, useState } from 'react';

export default function Admin() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await fetch('/api/appointments');
      const data = await res.json();
      if (data.success) {
        setAppointments(data.data);
      }
    };
    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    if (confirm('Tem certeza que deseja deletar esse agendamento?')) {
      const res = await fetch(`/api/appointments/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setAppointments(appointments.filter((appointment) => appointment._id !== id));
      } else {
        alert('Falha ao deletar o agendamento');
      }
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4">Gerenciamento de Agendamentos</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">E-mail</th>
            <th className="px-4 py-2">Telefone</th>
            <th className="px-4 py-2">Data</th>
            <th className="px-4 py-2">Hora</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td className="border px-4 py-2">{appointment.name}</td>
              <td className="border px-4 py-2">{appointment.email}</td>
              <td className="border px-4 py-2">{appointment.phone}</td>
              <td className="border px-4 py-2">{new Date(appointment.date).toLocaleDateString()}</td>
              <td className="border px-4 py-2">{appointment.time}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(appointment._id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}