import React from 'react';


function Card() {
  return (
  <div className="min-h-screen bg-[url('https://i.pinimg.com/736x/5a/78/0e/5a780ea661152f90631e33ec3ac43cde.jpg')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-3xl p-6 w-full max-w-sm text-white shadow-xl">
        <img
          src="public/images/weddinglogo.png"
          alt="Wedding Logo"
          className="w-20 sm:w-24 mx-auto mb-4 sm:mb-6"
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-3 sm:mb-4">
          Wedding Bells
        </h1>

        <div className="space-y-4">
          <a
            href="/login"
            className="block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-sm sm:text-base"
          >
            Login
          </a>
          <p className="text-sm sm:text-base text-pink-500">Don't have an account?</p>
          <a
            href="/signup"
            className="block border border-pink-500 text-pink-500 hover:bg-pink-50 py-2 px-4 rounded-full text-sm sm:text-base"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;