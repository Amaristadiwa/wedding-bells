import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Card from './components/card/card';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './components/Login/login';
import Signup from './components/signup/signup';


export default function App() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user'));
  });

  return (
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  );
}

