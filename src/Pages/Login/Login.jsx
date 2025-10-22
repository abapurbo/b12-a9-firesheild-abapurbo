import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaLock, FaEnvelope } from "react-icons/fa";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-50 to-blue-100 px-4 py-10">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/30">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Login to your account and continue your journey!
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3  focus-within:ring-2 focus-within:ring-indigo-400">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2  outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3  focus-within:ring-2 focus-within:ring-indigo-400">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 bg-transparent outline-none"
                required
              />
            </div>
            <div className=" mt-2">
              <a
                href="/reset"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium transition"
        >
          <FcGoogle className="text-2xl" />
          Login with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
