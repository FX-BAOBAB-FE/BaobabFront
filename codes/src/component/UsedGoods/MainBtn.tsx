import React from 'react';
import { BtnType } from '../Types/BtnType';

export default function Btn({Src,children}:BtnType){
    return(
        <button className='flex justify-center items-center w-36 h-12 rounded-md mr-2 bg-[#4C6EF5]'>
            <img src={Src} alt="로그인 이미지"/>
            <p className='text-white ml-2 font-bold'>
                {children}
            </p>
        </button>
    )
}