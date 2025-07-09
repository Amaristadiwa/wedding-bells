import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanning } from '../components/Context/Planningcontext';
import StepWrapper from '../components/Stepwrapper';

export default function WeddingDate() {
  const navigate = useNavigate();
  const { form, setForm } = usePlanning();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/start/location');
  };

  return (
    <StepWrapper title="Wedding Date" onSubmit={handleNext}>
      <input
        type="date"
        name="weddingDate"
        value={form.weddingDate}
        onChange={(e) => setForm({ ...form, weddingDate: e.target.value })}
        className="w-full px-4 py-2 rounded-xl border border-pink-300 focus:outline-none"
        required
      />
      <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full w-full">
        Next
      </button>
    </StepWrapper>
  );
}