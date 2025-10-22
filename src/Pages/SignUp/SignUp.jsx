import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";

export default function SignUp() {
  const { googleProvider, createUser } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log({ name, email, photo, password });
  };

  const handleGoogleSignIn = () => {
    googleProvider();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-indigo-100 px-4 py-10">
      <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
        
        {/* Left Section - Brand */}
        <div className="bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 p-10 flex flex-col justify-center text-white relative overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-300">SkillSwap</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
            Learn, share, and grow together! Join our professional community to exchange skills and expand your knowledge.
          </p>
          <p className="text-sm font-semibold opacity-80">
            Already have an account?{" "}
            <a href="/login" className="underline text-yellow-300 hover:text-yellow-200">
              Login here
            </a>
          </p>

          {/* Decorative Blur Circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Right Section - SignUp Form */}
        <div className="bg-white/70 backdrop-blur-lg p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Your Account
          </h2>

          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 bg-white/80"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 bg-white/80"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 bg-white/80"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 bg-white/80"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center text-gray-500">or continue with</div>

          {/* Google SignIn */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3 bg-white/30 rounded-lg border border-gray-200 hover:bg-white/40 text-gray-800 font-medium transition"
          >
            <FcGoogle className="text-2xl" />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
