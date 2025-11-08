import { useEffect, useState } from 'react';
import api from '../api';

export default function Dashboard(){
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [datetime, setDatetime] = useState('');
  const [selectedDoc, setSelectedDoc] = useState('');

  async function loadDoctors(){
    try {
      const res = await api.get('/users?role=doctor');
      setDoctors(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  async function loadAppointments(){
    try {
      const res = await api.get('/appointments');
      setAppointments(res.data);
    } catch (err) { console.error(err); }
  }

  useEffect(()=>{
    loadDoctors();
    loadAppointments();
  }, []);

  const book = async () => {
    if (!selectedDoc || !datetime) return alert('Select doctor and datetime');
    try {
      await api.post('/appointments', { doctorId: selectedDoc, datetime });
      alert('Booked');
      setDatetime('');
      loadAppointments();
    } catch (err) {
      alert(err.response?.data?.message || 'Booking failed');
    }
  };

  const cancel = async (id) => {
    if (!window.confirm('Cancel appointment?')) return;
    try {
      await api.put(`/appointments/${id}/cancel`);
      loadAppointments();
    } catch (err) {
      alert(err.response?.data?.message || 'Cancel failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Hospital Appointment System</h1>
      {user ? <div>Welcome {user.name} ({user.role}) <button onClick={logout}>Logout</button></div> : <div>Please Login / Register</div>}

      <hr/>
      <h3>Available Doctors</h3>
      <select value={selectedDoc} onChange={e=>setSelectedDoc(e.target.value)}>
        <option value="">-- select doctor --</option>
        {doctors.map(d => <option key={d._id} value={d._id}>{d.name} {d.specialization ? `- ${d.specialization}` : ''}</option>)}
      </select>
      <br/>
      <input type="datetime-local" value={datetime} onChange={e=>setDatetime(e.target.value)} />
      <button onClick={book}>Book Appointment</button>

      <hr/>
      <h3>Your Appointments</h3>
      <table border="1" cellPadding="6">
        <thead>
          <tr><th>ID</th><th>Doctor</th><th>Patient</th><th>DateTime</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
          {appointments.map(a => (
            <tr key={a._id}>
              <td>{a._id}</td>
              <td>{a.doctor?.name}</td>
              <td>{a.patient?.name}</td>
              <td>{new Date(a.datetime).toLocaleString()}</td>
              <td>{a.status}</td>
              <td>{a.status === 'booked' && <button onClick={()=>cancel(a._id)}>Cancel</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
