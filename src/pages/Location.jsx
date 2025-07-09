import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanning } from '../components/Context/Planningcontext';
import StepWrapper from '../components/Stepwrapper';

export default function Location() {
  const navigate = useNavigate();
  const { form, setForm } = usePlanning();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/start/guest-count');
  };

  return (
    <StepWrapper title="Wedding Location" onSubmit={handleNext}>
      <input
        type="text"
        name="location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        placeholder="e.g. Victoria Falls"
        className="w-full px-4 py-2 rounded-xl border border-pink-300 focus:outline-none"
        required
      />
      <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full w-full">
        Next
      </button>
    </StepWrapper>
  );
}