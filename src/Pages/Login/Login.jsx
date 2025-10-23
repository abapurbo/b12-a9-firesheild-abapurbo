import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

export default function Login() {
  const { loginUser, handleGoogleSignIn } = useAuth()
  const [show, setShow] = useState(true)
  const [userEmail,setUserEmail]=useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const errorObj = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // password validation
    const upperCaseReg = /[A-Z]/;
    const lowerCaseReg = /[a-z]/;

    if (!upperCaseReg.test(password)) {
      toast.error("Password must contain at least one uppercase letter.", { errorObj });
      return;
    }
    if (!lowerCaseReg.test(password)) {
      toast.error("Password must contain at least one lowercase letter.", { errorObj });
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.", { errorObj });
      return;
    }

    // login user in firebase
    loginUser(email, password)
      .then(result => {
        navigate(location.state || '/')
      })
      .catch((error) => {
        if (error) {
          toast.error(error.message, { errorObj });
        }
      });


  };
  const handleGoogleLogin = async () => {
    await handleGoogleSignIn()
    await navigate(location.state || '/')

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100 px-4 py-10">
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
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={(e)=>setUserEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-gray-700  font-medium mb-1">
              Password
            </label>

            <div className="relative">
              
               <input
                type={show ? 'password' : 'text'}
                name="password"
                placeholder="Enter your password"
                className="w-full px-3 text-sm py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                required
               />
               <p onClick={() => setShow(!show)} className="absolute right-3 top-3 cursor-pointer">
                {
                  show ? <FaRegEye /> : <FaRegEyeSlash />

                }
                </p>
                <div className="mt-1 ml-1">
                  <Link to='/forgetPassword' state={userEmail} className="hover:text-blue-600 cursor-pointer text-sm">Forgot password?</Link>
                </div>

            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="grow border-t border-gray-300"></div>
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
