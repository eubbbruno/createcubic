// /components/Calendar.js
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/appointments')
      .then((response) => response.json())
      .then((data) => setAvailableDates(data));
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true); // Abre o modal para confirmar
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAppointment = { name, email, date: selectedDate };
    await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAppointment),
    });
    setIsModalOpen(false);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <Calendar
        onClickDay={handleDateClick}
        tileDisabled={({ date }) =>
          availableDates.some((d) => new Date(d.date).getTime() === date.getTime())
        }
      />

      {/* Modal para confirmar agendamento */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirme seu Agendamento</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Seu Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p>Data selecionada: {selectedDate.toLocaleDateString()}</p>
              <button type="submit">Confirmar</button>
              <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;