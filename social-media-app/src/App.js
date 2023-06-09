import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>  
      } />
      <Route path="/login/" element ={<Login />} />
      <Route path="/register/" element={<Registration />} />
    </Routes>
  );
}
export default App;
