import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../API";

const Products = () => {
  const { logout } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: "", price: "" });
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState("");

  const fetchProducts = async () => {
    const res = await API.get("/product");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("price", form.price);
    if (file) fd.append("img", file);

    if (editId) {
      await API.put(`/product/${editId}`, fd);
    } else {
      await API.post("/product", fd);
    }

    setEditId("");
    setForm({ title: "", price: "" });
    setFile(null);
    fetchProducts();
  };

  const handleEdit = (p) => {
    setEditId(p._id);
    setForm({ title: p.title, price: p.price });
  };

  const handleDelete = async (id) => {
    await API.delete(`/product/${id}`);
    fetchProducts();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Products</h2>

      <button onClick={logout}>Logout</button>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <br />
        <input
        name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />{" "}
        <br />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />{" "}
        <br />
        <button>{editId ? "Update" : "Create"}</button>
      </form>

      <hr />

      {products.map((p) => (
        <div>
          <h3>
            {p.title} -- {p.price}
          </h3>

          {p.image && (
            <img src={`http://localhost:5000/uploads/${p.image}`} alt="" />
          )}
          <br />

          <button onClick={() => handleEdit(p)}>Edit</button>
          <button onClick={() => handleDelete(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
