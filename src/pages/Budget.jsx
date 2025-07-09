import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanning } from '../components/Context/Planningcontext';
import StepWrapper from '../components/Stepwrapper';

export default function Budget() {
  const navigate = useNavigate();
  const { form, setForm } = usePlanning();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/plan');
  };

  return (
    <StepWrapper title="Wedding Budget" onSubmit={handleNext}>
      <input
        type="number"
        name="budget"
        value={form.budget}
        onChange={(e) => setForm({ ...form, budget: e.target.value })}
        placeholder="e.g. 5000"
        className="w-full px-4 py-2 rounded-xl border border-pink-300 focus:outline-none"
        required
      />
      <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full w-full">
        Finish
      </button>
    </StepWrapper>
  );
}