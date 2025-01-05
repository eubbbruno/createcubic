import { useEffect, useState } from 'react';

export default function AdminAgendamentos() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      if (data.success) {
        setAppointments(data.data);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Agendamentos</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Data</th>
            <th className="px-4 py-2">Horário</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td className="border px-4 py-2">{appointment.name}</td>
              <td className="border px-4 py-2">{appointment.email}</td>
              <td className="border px-4 py-2">{new Date(appointment.date).toLocaleDateString()}</td>
              <td className="border px-4 py-2">{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}