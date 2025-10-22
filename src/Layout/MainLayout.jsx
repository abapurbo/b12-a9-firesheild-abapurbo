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
    <div>
      <div className='z-50 '>
        <Navbar></Navbar>
      </div>
      <div className='z-20 mt-20'>
        {
          loading ? <Loading></Loading> : <Outlet></Outlet>
        }
      </div>
      <div>
        <Footer></Footer>
      </div>


    </div>
  )
}
