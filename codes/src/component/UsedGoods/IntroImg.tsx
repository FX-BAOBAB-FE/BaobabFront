import React from 'react'
import googleplay from '../../Img/googleplay.png'
import appstore from '../../Img/appstore.png'
import Btn from '../MainPage/MainBtn'
import box from '../../Img/MainImg.png'

export default function IntroImg(){
    return(
        <div className='w-full h-96 bg-[#DBE4FF] flex justify-center'>
            <div className='w-[80%] flex justify-between items-center'>
                <div className='w-[40%] mr-20'>
                    <div className='w-[430px]'>
                        <h1 className='text-5xl font-bold'>Find hidden area of</h1>
                        <h1 className='text-5xl font-bold'>your home.</h1>  
                    </div>
                    <div className='my-8'>
                        <p className='text-xl text-[#868E96]'>Leave unused items and less frequently used items.</p>
                        <p className='text-xl text-[#868E96]'>Let’s expand our house by finding a wasted space!</p>
                    </div>
                    <div className='flex'>
                        <Btn Src={googleplay}>Google Play</Btn>
                        <Btn Src={appstore}>App Store</Btn>
                    </div>
                </div>
                <div className='flex'>
                    <img className='h-64' src={box} alt='box'/>
                </div>
            </div>
        </div>
    )
}