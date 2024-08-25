import React from 'react'
import SildImg from './SildImg'

const DetailsBox:React.FC<{}> = ()=>{

    return(
        <div className='flex justify-center'>
            <div className='w-[70%] h-[80rem] bg-white rounded-2xl mt-10'>
                <SildImg/>
            </div>
        </div>
    )
}

export default DetailsBox