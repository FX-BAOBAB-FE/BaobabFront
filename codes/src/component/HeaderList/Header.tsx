import React from 'react'
import Sign from '../../Img/log-in.png'
import Register from '../../Img/user-plus.png'
import Btn from './HeaderBtn'
import HeaderHambuger from './HeaderHambuger'
import { Link, Outlet } from 'react-router-dom'

const Header:React.FC<{}> = ()=>{
    const List = ['UsedGoodsDeal', 'Calc','Analyze','Help'];
    return(
        <>
            <div className="w-full h-20 flex justify-center bg-[#4C6EF5] text-white">
                <div className="w-[80%] flex justify-between items-center">
                <Link to="/"><h3 className="text-3xl font-bold mr-[4rem]">BAOBAB</h3></Link>
                    <HeaderHambuger List={List}/>
                    <div className="flex pl-[4rem]">
                        <Btn Src={Sign} >Sign up</Btn>
                        <Btn Src={Register}>Register</Btn>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header;