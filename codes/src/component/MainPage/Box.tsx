import React from 'react'
import Dummy from '../../Img/dummy.png'
const Box:React.FC<{}> = ()=>{
    return(
        <div className='w-full h-[28rem] rounded-xl mt-14 text-center bg-white'>
            <img className='w-full h-[15rem] object-fill' src={Dummy} alt="dummy"/>
            <h2 className='mt-6 text-2xl font-bold'>Title</h2> 
            <p className='text-xl py-3 '>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

export default Box;