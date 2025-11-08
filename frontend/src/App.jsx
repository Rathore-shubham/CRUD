// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';

import { useEffect, useState } from "react";

// function App(){
//   return (
//     <BrowserRouter>
//       <nav style={{ padding: 12 }}>
//         <Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Dashboard/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/register" element={<Register/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);


  useEffect(() => {
    const dummy = [
      { _id: 1, name: "Aarav", email: "aarav@mail.com" },
      { _id: 2, name: "Vihaan", email: "vihaan@mail.com" },
      { _id: 3, name: "Reyansh", email: "rey@mail.com" },
      { _id: 4, name: "Advik", email: "advik@mail.com" },
      { _id: 5, name: "Kabir", email: "kabir@mail.com" },
      { _id: 6, name: "Ishaan", email: "ishaan@mail.com" },
      { _id: 7, name: "Ayaan", email: "ayaan@mail.com" },
      { _id: 8, name: "Krishna", email: "krish@mail.com" },
      { _id: 9, name: "Rudra", email: "rudra@mail.com" },
    ];
    setUsers(dummy)
  }, []);


  const filteredUsers = users
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b) => 
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <h2>User management</h2>
      <input
        type="text"
        placeholder="search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sort */}
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sort: A - Z </option>
        <option value="desc">Sort: Z - A </option>
      </select>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {currentUsers.map((user) => {
              <tr>
                <td>
                  {user.name}
                </td>
                <td>
                  {user.email}
                </td>
              </tr>
            })}
        </tbody>
      </table>

      {/* pagination */}
      <div>
        {
          Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default App;
