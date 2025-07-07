import React from 'react';
import { Mail, User, Lock } from 'lucide-react';

export default function Signup() {
  return (
    <div className="min-h-screen bg-[url('https://i.pinimg.com/736x/5a/78/0e/5a780ea661152f90631e33ec3ac43cde.jpg')] bg-cover bg-center flex items-center justify-center px-4">
    <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-3xl p-6 w-full max-w-sm text-white shadow-xl">
        <img src="src/assets/images/weddinglogo.png" alt="Logo" className="w-20 mx-auto mb-4" />

        <h2 className="text-lg font-semibold text-gray-800 text-pink-500">Your journey starts here</h2>
        <p className="text-sm text-gray-500 mb-6 text-pink-500">Take the first step</p>

        <form className="space-y-3">
          <div className="flex items-center bg-pink-100 px-3 py-2 rounded-xl">
            <Mail className="text-pink-600 mr-2 w-5 h-5" />
            <input type="email" placeholder="E-mail" className="bg-transparent outline-none w-full text-sm text-pink-600" />
          </div>

          <div className="flex items-center bg-pink-100 px-3 py-2 rounded-xl">
            <User className="text-pink-600 mr-2 w-5 h-5" />
            <input type="text" placeholder="Username" className="bg-transparent outline-none w-full text-sm text-pink-600" />
          </div>

          <div className="flex items-center bg-pink-50 px-3 py-2 rounded-xl">
            <Lock className="text-pink-600 mr-2 w-5 h-5" />
            <input type="password" placeholder="Password" className="bg-transparent outline-none w-full text-sm text-pink-600" />
          </div>

          <div className="flex items-center bg-pink-50 px-3 py-2 rounded-xl">
            <Lock className="text-pink-600 mr-2 w-5 h-5" />
            <input type="password" placeholder="Confirm password" className="bg-transparent outline-none w-full text-sm text-pink-600" />
          </div>

          <button type="submit" className="bg-pink-600 text-white py-2 rounded-full w-full mt-2 text-sm font-medium hover:bg-pink-700">
            Sign up
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center space-x-6 text-pink-800">
          <i className="fab fa-facebook-f text-xl"></i>
          <i className="fab fa-apple text-xl"></i>
          <i className="fab fa-google text-xl"></i>
        </div>

        <p className="text-xs text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-pink-700 font-semibold underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}