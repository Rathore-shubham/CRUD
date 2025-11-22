import React, { useState } from "react";
import API from "../API";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/auth/register", form);
        console.log("Registered ")
    }

    const onChange = (e) => 
        setForm({ ...form, [e.target.name]: e.target.value})

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={onChange} /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} /><br />
        <input name="password" placeholder="Password" type="password" value={form.password} onChange={onChange} /><br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
