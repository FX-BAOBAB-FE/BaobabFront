import React from 'react'
import HambugerObj from '../Types/HambugerObj'
import { Link } from 'react-router-dom'

const HeaderHambuger:React.FC<{List:HambugerObj[]}> = (props)=>{
    return(
        <ul className="pr-[10rem] flex items-center justify-between text-xl 2xl:pr-[29rem]">
            {props.List.map((list,index)=>{
                return <li key={index} className='mr-5'><Link to={list.location}><button>{list.name}</button></Link></li>
            })}
        </ul>
    )
}

export default HeaderHambuger