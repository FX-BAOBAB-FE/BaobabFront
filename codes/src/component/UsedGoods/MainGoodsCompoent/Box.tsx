import React from 'react'
import { ImgList } from '../../Types/BoxDataObj'
import { useNavigate } from 'react-router-dom'

interface Imgs{
    imgs:ImgList[],
    title:string,
    content:string,
    id:string,
}

export default function Box({imgs,title,content,id}:Imgs){

    const navigate = useNavigate();

    return(
        <div className='md:w-[12rem] xl:w-[18rem] 2xl:w-[30rem] h-[22rem] w-[8rem] rounded-xl mt-14 text-center bg-white overflow-hidden cursor-pointer' onClick={() => navigate(id)}>
            <img className='w-full h-[15rem] object-fill' src={imgs[0].imageUrl} alt="dummy"/>
            <h2 className='mt-6 text-2xl font-bold'>{title}</h2> 
        </div>
)
}