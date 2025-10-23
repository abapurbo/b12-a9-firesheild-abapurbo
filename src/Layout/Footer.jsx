import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-50 to-purple-100 text-gray-700 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand Info */}
                <div>
                    <div className="text-2xl flex flex-row items-center space-x-1 mb-3  ">
                        <img className="w-10" src="https://i.ibb.co.com/KxdHw9XD/skill-Swap-Logo.png" alt="logo" />
                        <h2 className="text-2xl font-bold text-primary ">SkillSwap</h2>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        A smart platform to learn new skills by sharing what you already know.
                        Grow together through teaching and learning.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-primary transition">Home</a></li>
                        <li><a href="#" className="hover:text-primary transition">My Profile</a></li>

                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-primary transition">Help Center</a></li>
                        <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary transition">Feedback</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="p-3 bg-white rounded-full shadow hover:bg-primary hover:text-white transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="p-3 bg-white rounded-full shadow hover:bg-primary hover:text-white transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="p-3 bg-white rounded-full shadow hover:bg-primary hover:text-white transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="p-3 bg-white rounded-full shadow hover:bg-primary hover:text-white transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-200 mt-8 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} <span className="font-semibold text-primary">SkillSwap</span>. All rights reserved.
            </div>
        </footer>
    );
}
