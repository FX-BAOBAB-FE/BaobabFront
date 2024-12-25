import React from 'react';
import { BtnType } from '../Types/BtnType';

export default function headerBtn({Src,children}:BtnType){
    return(
        <button className={`flex justify-center items-center w-32 h-10 rounded-md mr-2 bg-white`}>
            <img src={Src} alt="로그인 이미지"/>
            <p className='text-[#4C6EF5] ml-2 font-bold'>
                {children}
            </p>
        </button>
     )
}