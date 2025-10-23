import React from 'react'
import Banner from '../../Components/Banner/Banner'
import PropularSkills from '../../Components/PropularSkills/PropularSkills'

export default function Home() {

  return (
    <div>
      <div className='h-[550px] '>
        <Banner></Banner>
      </div>
      <div className='container mx-auto px-10'>
        <PropularSkills></PropularSkills>
      </div>
    </div>
  )
}
