import React from 'react'
import SildImg from './ImgSilder/SildImg'
import UserIntro from '../UserPart/UserIntro'

export default function DetailsBox(){
    return(
        <div className='flex justify-center pb-16'>
            <div className='flex flex-col items-center w-[70%] h-[85rem] bg-white rounded-2xl mt-10'>
                <SildImg/>
                <UserIntro/>
            </div>
        </div>
    )
}