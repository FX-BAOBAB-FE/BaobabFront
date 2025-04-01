import React from 'react'
import { ImgList } from '../../Types/BoxDataObj'

interface Imgs{
    imgs:ImgList[],
    title:string,
    content:string,
}

export default function Box({imgs,title,content}:Imgs){
    return(
        <div className='w-full h-[28rem] rounded-xl mt-14 text-center bg-white'>
            <img className='w-full h-[15rem] object-fill' src={imgs[0].imageUrl} alt="dummy"/>
            <h2 className='mt-6 text-2xl font-bold'>{title}</h2> 
            <p className='text-xl py-2 px-5 '>
                {content}
            </p>
        </div>
)
}