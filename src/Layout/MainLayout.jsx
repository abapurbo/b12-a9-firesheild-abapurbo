import React, { useEffect, useState } from 'react'
import Loading from '../Components/Loading'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router'

export default function MainLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="z-50 h-16">
        <Navbar />
      </div>

      {/* Main Content */}
      <div
        className="z-20 grow  bg-linear-to-br from-white via-gray-50 to-blue-50 "
      >
        {loading ? <Loading /> : <Outlet />}
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>

  )
}
