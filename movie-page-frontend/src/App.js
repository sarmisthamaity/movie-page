import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoutes from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>

  );
}

export default App;

