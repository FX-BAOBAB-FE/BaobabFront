import React, { useRef, useState } from 'react'

const MoreBtn:React.FC<{handlerMoreBtn:()=>void, btnCheck:boolean}> = (props)=>{
    return(
        <div className='mt-10 flex justify-center items-center rounded-2xl border-[#4C6EF5] border'>
            {!props.btnCheck && <button className='w-52 h-12 text-[#4C6EF5]' onClick={props.handlerMoreBtn}>More</button>}
        </div>
    )
}

export default MoreBtn