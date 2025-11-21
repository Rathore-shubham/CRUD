import React, { useContext, useState } from 'react'
import API from '../API'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const { login } = useContext(AuthContext)
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventdefault()
        const res = await API.post("/auth/login", form);
        Login(res.data.token)
    }

    const handleChange = (e) => 
        setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input  placeholder='Email' value={form.email} onChange={handleChange} /><br />
            <input  type='password' placeholder='password' value={form.password} onChange={handleChange} /><br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login