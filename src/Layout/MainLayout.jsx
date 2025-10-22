import React from 'react'
import Loading from '../Components/Loading'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div>
        <div className='bg-gradient-to-br from-indigo-100 via-sky-50 to-blue-100'>
          <Navbar></Navbar>
        </div>
        <div>
          <Footer></Footer>
        </div>
    </div>
  )
}
