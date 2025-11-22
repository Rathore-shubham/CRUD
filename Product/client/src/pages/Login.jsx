import React, { useContext, useState } from 'react'
import API from '../API'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();


    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await API.post("/auth/login", form);
        login(res.data.token)
        navigate("/dashboard")
    }

    const handleChange = (e) => 
        setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input name='email' placeholder='Email' value={form.email} onChange={handleChange} /><br />
            <input name='password' type='password' placeholder='password' value={form.password} onChange={handleChange} /><br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login