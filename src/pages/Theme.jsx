import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanning } from '../components/Context/Planningcontext';
import StepWrapper from '../components/Stepwrapper';

const themes = [
  { name: 'Rustic', img: 'https://i.pinimg.com/736x/cd/7d/04/cd7d04fc0bc2483ce0948287ccebc781.jpg0' },
  { name: 'Boho', img: 'https://i.pinimg.com/736x/bd/ef/84/bdef84aa905dad69ae717c830c40f234.jpg' },
  { name: 'Modern', img: 'https://i.pinimg.com/736x/2a/f0/4b/2af04b0196e22755f7dc3f28c4716a90.jpg' },
  { name: 'Mafia', img: 'https://i.pinimg.com/736x/7b/9c/6e/7b9c6ea0236913325a3fb9a95d78eaba.jpg' },
  { name: 'Vintage', img: 'https://i.pinimg.com/736x/ce/cf/0e/cecf0e11a43a54010aaa5c6a4673ced8.jpg' },
];

export default function Theme() {
  const navigate = useNavigate();
  const { form, setForm } = usePlanning();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/start/budget');
  };

  const selectTheme = (themeName) => {
    setForm({ ...form, theme: themeName });
  };

  return (
    <StepWrapper title="Wedding Theme" onSubmit={handleNext}>
      <input
        type="text"
        name="theme"
        value={form.theme}
        onChange={(e) => setForm({ ...form, theme: e.target.value })}
        placeholder="e.g. Rustic, Boho, Modern"
        className="w-full px-4 py-2 rounded-xl border border-pink-300 focus:outline-none mb-6"
        required
      />

      {/* Theme pictures */}
      <div className="flex space-x-4 mb-6">
        {themes.map(({ name, img }) => (
          <div
            key={name}
            onClick={() => selectTheme(name)}
            className={`cursor-pointer rounded-xl border-4 ${
              form.theme === name ? 'border-pink-600' : 'border-transparent'
            } overflow-hidden shadow-md transition-transform hover:scale-105`}
            style={{ width: 100, height: 100 }}
            title={name}
          >
            <img
              src={img}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full w-full">
        Next
      </button>
    </StepWrapper>
  );
}
