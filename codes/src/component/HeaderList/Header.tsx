import React from 'react'
import Sign from '../../Img/log-in.png'
import Register from '../../Img/user-plus.png'
import HeaderBtn from './HeaderBtn'
import HeaderHambuger from './HeaderHambuger'
import { Link, Outlet } from 'react-router-dom'
import HambugerObj from '../Types/HambugerObj'

export default function Header(){
    const List:HambugerObj[] = [{
        name:'UsedGoodsDeal',location:'/UsedGoodsDeal'}
        ,{name:'Calc',location:'/Calculate'}
        ,{name:'Analyze',location:'/'}
        ,{name:'Help',location:'/'}];
    return(
        <>
            <div className="w-full h-20 flex justify-center bg-[#4C6EF5] text-white">
                <div className="w-[80%] flex justify-between items-center">
                <Link to="/"><h3 className="text-3xl font-bold mr-[4rem]">BAOBAB</h3></Link>
                    <HeaderHambuger List={List}/>
                    <div className="flex pl-[4rem]">
                        <HeaderBtn Src={Sign} >Sign up</HeaderBtn>
                        <HeaderBtn Src={Register}>Register</HeaderBtn>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}