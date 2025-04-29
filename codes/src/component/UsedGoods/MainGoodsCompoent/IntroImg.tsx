import React from 'react'
import Btn from '../MainBtn'
import box from '../../../Img/MainImg.png'
import PlayStore from '../../CommonComponent/PlayStore'

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
                    <PlayStore />
                </div>
                <div className='flex'>
                    <img className='h-64' src={box} alt='box'/>
                </div>
            </div>
        </div>
    )
}