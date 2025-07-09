import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanning } from '../components/Context/Planningcontext';

export default function PlanSummary() {
  const { form } = usePlanning();
  const navigate = useNavigate();

  const handleConfirm = () => {
    localStorage.setItem('weddingPlan', JSON.stringify(form));
    navigate('/vendors'); // Go to vendors page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-lg w-full space-y-6">
        <h2 className="text-2xl font-bold text-center text-pink-600">Your Wedding Plan</h2>
        <ul className="space-y-4 text-sm text-gray-700">
          <li><strong>Names:</strong> {form.coupleNames}</li>
          <li><strong>Date:</strong> {form.weddingDate}</li>
          <li><strong>Location:</strong> {form.location}</li>
          <li><strong>Guest Count:</strong> {form.guestCount}</li>
          <li><strong>Theme:</strong> {form.theme}</li>
          <li><strong>Budget:</strong> ${form.budget}</li>
        </ul>
        <div className="text-center mt-6">
          <button
            onClick={handleConfirm}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full"
          >
            Confirm & Save
          </button>
        </div>
      </div>
    </div>
  );
}
