import { useFormik } from 'formik';
import * as Yup from 'yup';

// Defina seus horários disponíveis aqui (exemplo):
const availableTimes = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  date: Yup.date().required('Data é obrigatória'),
  time: Yup.string().oneOf(availableTimes, 'Horário indisponível').required('Horário é obrigatório'),
});

export default function Schedule() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      // Aqui você envia para a API ou faz o que precisar
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Seu Nome"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name && <div>{formik.errors.name}</div>}

      <input
        type="email"
        name="email"
        placeholder="Seu Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <div>{formik.errors.email}</div>}

      <input
        type="text"
        name="phone"
        placeholder="Seu Telefone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      {formik.errors.phone && <div>{formik.errors.phone}</div>}

      <input
        type="date"
        name="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      {formik.errors.date && <div>{formik.errors.date}</div>}

      <select
        name="time"
        onChange={formik.handleChange}
        value={formik.values.time}
      >
        <option value="">Selecione o Horário</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {formik.errors.time && <div>{formik.errors.time}</div>}

      <button type="submit">Agendar</button>
    </form>
  );
}
