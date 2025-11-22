import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
             path="/dashboard" 
             element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
             }
          />

          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
