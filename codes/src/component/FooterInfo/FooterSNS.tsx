import React from 'react'
import faceBook from '../../Img/Facebook - Negative.png'
import twitter from '../../Img/Twitter - Negative.png'
import instagram from '../../Img/Instagram - Negative.png'
import youtube from '../../Img/YouTube - Negative.png'

export default function FooterSNS(){
    return(
        <div className='w-full h-32 flex flex-col items-center justify-center'>
            <div className='w-[50rem] flex justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='w-[20rem] text-[#868E96] font-bold text-center mb-3'>Follow us</p>
                    <div className='flex'>
                        <img className='mr-5'  src={faceBook} alt="facebook" />
                        <img className='mr-5'  src={twitter} alt="twitter" />
                        <img className='mr-5'  src={instagram} alt="instagram" />
                        <img  src={youtube} alt="youtube" />
                    </div>
                </div>
                <div>
                    <p className='w-[20rem] text-[#868E96] font-bold text-center mb-2'>Get the Newsletter</p>
                    <form className='flex'>
                        <input className='pl-5 w-[14rem] h-[2.5rem] bg-white rounded-l-xl' 
                        type='text' placeholder='Your email address'/>
                        <button className=' w-[7rem] rounded-r-xl bg-[#343A40] text-white' type='submit'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}