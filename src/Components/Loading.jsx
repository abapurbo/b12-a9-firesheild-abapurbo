import Lottie from 'lottie-react'
import React from 'react'
import loading from '../../src/assets/Lottie/crazy_loading.json'

export default function Loading() {
  return (
    <div className='h-[calc(100vh-64px)] flex flex-col justify-center items-center'>
      <div className='h-26 w-28'>
        <Lottie animationData={loading} loop={true} />
      </div>
    </div>
  )
}
