import React from 'react';
import { BtnType } from '../Types/BtnType';
import {motion} from 'motion/react'

export default function Btn({Src,children}:BtnType){
    return(
        <motion.button
            initial={{}}
            whileHover={{backgroundColor:'var(--logo-dark)'}}
            whileTap={{boxShadow:"none", y:'4px'}}
            className='flex justify-center items-center w-36 h-12 rounded-md mr-2 bg-[#4C6EF5] shadow-[0_4px_0_#0c2e77]'>
            <img src={Src} alt="로그인 이미지"/>
            <p className='text-white ml-2 font-bold'>
                {children}
            </p>
            
        </motion.button>
        
    )
}