import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanning } from '../components/Context/Planningcontext';
import StepWrapper from '../components/Stepwrapper';

export default function CoupleNames() {
  const navigate = useNavigate();
  const { form, setForm } = usePlanning();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/start/wedding-date');
  };

  return (
    <StepWrapper title="Your Names" onSubmit={handleNext}>
      <input
        type="text"
        name="coupleNames"
        value={form.coupleNames}
        onChange={(e) => setForm({ ...form, coupleNames: e.target.value })}
        placeholder="e.g. Tadiwa & Chipo"
        className="w-full px-4 py-2 rounded-xl border border-pink-300 focus:outline-none"
        required
      />
      <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full w-full">
        Next
      </button>
    </StepWrapper>
  );
}