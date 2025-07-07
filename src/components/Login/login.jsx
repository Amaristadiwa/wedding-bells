import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Simulate login by saving a user to localStorage
    const dummyUser = { name: 'Demo User' };
    localStorage.setItem('user', JSON.stringify(dummyUser));

    // Update user state in App.jsx
    setUser(dummyUser);

    // Navigate to protected home page
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[url('https://i.pinimg.com/736x/5a/78/0e/5a780ea661152f90631e33ec3ac43cde.jpg')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-3xl p-6 w-full max-w-sm text-white shadow-xl">
        <img
          src="public/images/weddinglogo.png"
          alt="Wedding Bells Logo"
          className="w-20 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-6 text-pink-500 text-left">LOGIN</h2>

        <div className="mb-4">
          <div className="flex items-center bg-pink-50 px-3 py-2 rounded-xl">
            <Mail className="text-pink-500 mr-2  w-5 h-5" />
            <input
              type="text"
              placeholder="Email or username"
              className="bg-transparent outline-none text-sm w-full text-pink-500 placeholder-pink-500"
            />
          </div>
        </div>                                                                                                      

        <div className="mb-4">
          <div className="flex items-center bg-pink-50 px-3 py-2 rounded-xl">
            <Lock className="text-pink-500 mr-2 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-sm w-full text-pink-500 placeholder-pink-500"
            />
          </div>
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-white/70 hover:text-pink-200">
              Forgot password?
            </a>
          </div>
        </div>

        <button
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-full mt-4 transition-all"
          onClick={handleLoginClick}
        >
          Login
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-white/30" />
          <span className="mx-2 text-sm text-white/60">OR</span>
          <hr className="flex-grow border-white/30" />
        </div>

        <div className="flex justify-center gap-6">
          <i className="fab fa-google text-pink-500 text-xl hover:text-pink-200 cursor-pointer"></i>
          <i className="fab fa-facebook-f text-pink-500 text-xl hover:text-pink-200 cursor-pointer"></i>
          <i className="fab fa-twitter text-pink-500 text-xl hover:text-pink-200 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}