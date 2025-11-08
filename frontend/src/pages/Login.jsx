import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [form, setForm] = useState({ username:'', password:''});
  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      nav('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };
  return (
    <form onSubmit={submit} style={{ padding: 20 }}>
      <h2>Login</h2>
      <input placeholder="Username" value={form.username} onChange={e=>setForm({...form, username:e.target.value})} required /><br/>
      <input type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required /><br/>
      <button>Login</button>
    </form>
  );
}
