import React from 'react'
import SildImg from './SildImg'
import UserIntro from './UserIntro'

const DetailsBox:React.FC<{}> = ()=>{

    return(
        <div className='flex justify-center'>
            <div className='w-[70%] h-[80rem] bg-white rounded-2xl mt-10'>
                <SildImg/>
                <UserIntro/>
            </div>
        </div>
    )
}

export default DetailsBox