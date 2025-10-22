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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-indigo-100">

        {/* Left Section (Brand / Banner) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white p-10 relative overflow-hidden">
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="text-yellow-300">SkillSwap</span>
          </h1>
          <p className="text-lg opacity-90 text-center leading-relaxed">
            Empower your community through shared skills — teach, learn, 
            and grow together with people near you.
          </p>

          {/* Decorative Circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Right Section (SignUp Form) */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <div className="mb-8 text-center">
            <h2 className="md:text-3xl text-xl font-bold text-indigo-700 mb-2">
              Join the SkillSwap Community
            </h2>
            <p className="text-gray-500 text-sm">
              Share your skills, learn from others, and connect through collaboration.
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Profile Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="https://your-photo-link.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
            >
              Create My SkillSwap Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-800 font-medium transition"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6 md:text-sm text-[12px]">
            Already part of SkillSwap?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
