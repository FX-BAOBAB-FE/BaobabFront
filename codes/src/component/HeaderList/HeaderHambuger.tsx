import React from 'react'

const HeaderHambuger:React.FC<{List:string[]}> = (props)=>{
    return(
        <ul className="pr-[10rem] flex items-center justify-between text-xl 2xl:pr-[29rem]">
            {props.List.map((list)=>{
                return <li key={list} className='mr-5'><button>{list}</button></li>
            })}
        </ul>
    )
}

export default HeaderHambuger