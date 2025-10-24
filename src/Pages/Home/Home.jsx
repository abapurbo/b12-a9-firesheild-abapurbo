import React from 'react'
import Banner from '../../Components/Banner/Banner'
import PropularSkills from '../../Components/PropularSkills/PropularSkills'
import TopRatedProviders from '../../Components/TopRatedProviders/TopRatedProviders'
import MarqueeNotice from '../../Components/MarqueeNotice'

export default function Home() {

  return (
    <div>
      <div className='h-[550px]mb-30 '>
        <Banner></Banner>
        <MarqueeNotice></MarqueeNotice>
      </div>
      
      <div className='container mx-auto px-10'>
        <PropularSkills></PropularSkills>
      </div>
      <div>
        <TopRatedProviders></TopRatedProviders>
      </div>
    </div>
  )
}
