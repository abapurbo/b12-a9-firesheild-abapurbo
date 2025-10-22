import Lottie from 'lottie-react'
import React from 'react'
import loading from '../../src/assets/Lottie/crazy_loading.json'
export default function Loading() {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className='h-20 w-20'>
                <Lottie animationData={loading}></Lottie>
            </div>

        </div>
    )
}
