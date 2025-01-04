import React from 'react'
import HambugerObj from '../Types/HambugerObj'
import { Link } from 'react-router-dom'

interface HeaderHambugerProps {
    List: HambugerObj[]; // List의 타입 정의
}
export default function HeaderHambuger({List}:HeaderHambugerProps){
    return(
        <ul className="pr-[10rem] flex items-center justify-between text-xl 2xl:pr-[29rem]">
            {List.map((list,index)=>{
                return (
                    <li key={index} className='mr-5'>
                        <Link to={list.location}><button>{list.name}</button></Link>
                    </li>
                )
            })}
        </ul>
    )
}