import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function SignUp() {
  const { handleGoogleSignIn, createUser } = useAuth();
  const [show, setShow] = useState(true)
  const navigate = useNavigate()

  // error toastify
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

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
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


    createUser(email, password)
      .then((result) => {
        // console.log(result.user)
        navigate('/')
      })
      .catch((error) => {
        if (error) {
          toast.error(error.message, { errorObj });
        }
      });

  };

  const handleGoogleLogin = async () => {
    await handleGoogleSignIn()
    await navigate('/')
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-sky-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-indigo-100">
        <title>
           SkillSwap || Sign Up
        </title>
        <div className="hidden md:flex flex-col justify-center items-center bg-linear-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white p-10 relative overflow-hidden">
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="text-yellow-300">SkillSwap</span>
          </h1>
          <p className="text-lg opacity-90 text-center leading-relaxed">
            Empower your community through shared skills — teach, learn,
            and grow together with people near you.
          </p>

          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="p-10 md:p-14 flex flex-col justify-center">
          <div className="mb-8 text-center">
            <h2 className="md:text-3xl text-xl font-bold text-indigo-700 mb-2">
              Welcome to SkillSwap!
            </h2>
            <p className="text-gray-500 text-sm">
              Create your account to start sharing your skills, learning new ones, and connecting with your local community.
            </p>
          </div>


          <form onSubmit={handleSignUp} className="space-y-5">
            <div>
              <label className="block text-gray-700  font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700  font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-700  font-medium mb-1">
                Profile Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
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
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="grow border-t border-gray-300"></div>
          </div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-800 font-medium transition"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

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
