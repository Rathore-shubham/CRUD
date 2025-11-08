import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [form, setForm] = useState({ name:'', username:'', password:'', role:'patient', specialization:''});
  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      alert('Registered. Please login.');
      nav('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };
  return (
    <form onSubmit={submit} style={{ padding: 20 }}>
      <h2>Register</h2>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required /><br/>
      <input placeholder="Username" value={form.username} onChange={e=>setForm({...form, username:e.target.value})} required /><br/>
      <input type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required /><br/>
      <select value={form.role} onChange={e=>setForm({...form, role:e.target.value})}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select><br/>
      {form.role==='doctor' && <input placeholder="Specialization" value={form.specialization} onChange={e=>setForm({...form, specialization:e.target.value})} />}
      <br/><button>Register</button>
    </form>
  );
}
