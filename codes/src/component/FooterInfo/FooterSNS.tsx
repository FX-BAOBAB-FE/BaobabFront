import React from 'react'
import faceBook from '../../Img/Facebook - Negative.png'
import twitter from '../../Img/Twitter - Negative.png'
import instagram from '../../Img/Instagram - Negative.png'
import youtube from '../../Img/YouTube - Negative.png'
const FooterSNS:React.FC<{}> = () =>{
    return(
        <div className='w-full h-32 flex flex-col items-center mt-20'>
            <div className='w-[30%] flex justify-between'>
                <p className='w-28 mr-32 text-[#868E96] font-bold'>Follow us</p>
                <p className='w-52 text-[#868E96] font-bold'>Get the Newsletter</p>
            </div>
            <div className='max-[1430px]:w-[40%] xl w-[36%] flex justify-between items-center'>
                <div className='flex'>
                    <img className='mr-5'  src={faceBook} alt="facebook" />
                    <img className='mr-5'  src={twitter} alt="twitter" />
                    <img className='mr-5'  src={instagram} alt="instagram" />
                    <img  src={youtube} alt="youtube" />
                </div>
                <form className='flex'>
                    <input className='pl-5 w-[14rem] h-[3rem] bg-white rounded-l-xl' type='text' placeholder='Your email address'/>
                    <button className=' w-[7rem] rounded-r-xl bg-[#343A40] text-white' type='submit'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default FooterSNS