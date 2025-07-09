import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Card from './components/card/card';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './components/Login/login';
import Signup from './components/signup/signup';

import CoupleNames from './pages/CoupleNames';
import WeddingDate from './pages/WeddingDate';
import Location from './pages/Location';
import GuestCount from './pages/GuestCount';
import Theme from './pages/Theme';
import Budget from './pages/Budget';
import PlanSummary from './pages/PlanningSummary';
import ChooseVendors from './pages/ChooseVendors'; 

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

      
      <Route path="/start/couple-names" element={<CoupleNames />} />
      <Route path="/start/wedding-date" element={<WeddingDate />} />
      <Route path="/start/location" element={<Location />} />
      <Route path="/start/guest-count" element={<GuestCount />} />
      <Route path="/start/theme" element={<Theme />} />
      <Route path="/start/budget" element={<Budget />} />
      <Route path="/plan" element={<PlanSummary />} />
      <Route path="/vendors" element={<ChooseVendors />} />
    </Routes>
  );
}



