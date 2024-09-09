import React from 'react';
const Btn:React.FC<{Src:string, children:string}> = (props)=>{
    return(
        <button className={`flex justify-center items-center w-32 h-10 rounded-md mr-2 bg-white`}>
            <img src={props.Src} alt="로그인 이미지"/>
            <p className='text-[#4C6EF5] ml-2 font-bold'>
                {props.children}
            </p>
        </button>
     )
}

export default Btn;