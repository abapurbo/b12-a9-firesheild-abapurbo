import React from 'react'
import Loading from '../Components/Loading'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Footer></Footer>
        </div>
    </div>
  )
}
