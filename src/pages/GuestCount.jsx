import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanning } from '..//components/Context/Planningcontext';
import StepWrapper from '../components/Stepwrapper';

export default function GuestCount() {
  const navigate = useNavigate();
  const { form, setForm } = usePlanning();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/start/theme');
  };

  return (
    <StepWrapper title="Guest Count" onSubmit={handleNext}>
      <input
        type="number"
        name="guestCount"
        value={form.guestCount}
        onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
        placeholder="e.g. 100"
        className="w-full px-4 py-2 rounded-xl border border-pink-300 focus:outline-none"
        required
      />
      <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full w-full">
        Next
      </button>
    </StepWrapper>
  );
}