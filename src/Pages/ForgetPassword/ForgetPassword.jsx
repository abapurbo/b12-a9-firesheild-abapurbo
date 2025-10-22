import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { FaEnvelope } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

export default function ForgetPassword() {
    const { resetPassword } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    useEffect(() => {
        if (location?.state) {
            setEmail(location?.state);
        }
    }, [location.state]);

    const handleReset = (e) => {
        e.preventDefault();
        resetPassword(email)
            .then(() => {
                window.location.href = "https://mail.google.com";

            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100 px-4 py-10">
            <div className="w-full max-w-md bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/30">
                <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">
                    Reset Your Password 🔒
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Enter your registered email to receive a password reset link.
                </p>

                <form onSubmit={handleReset} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email Address
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white/80 focus-within:ring-2 focus-within:ring-indigo-400">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                className="w-full p-2 bg-transparent outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Reset Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-2 bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
                    >
                        Reset Password
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6 text-sm">
                    Remember your password?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-indigo-600 font-semibold hover:underline cursor-pointer"
                    >
                        Back to Login
                    </span>
                </p>
            </div>
        </div>
    );
}
