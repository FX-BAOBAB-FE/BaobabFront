import React from 'react'
import Sign from '../../Img/log-in.png'
import Register from '../../Img/user-plus.png'
import Btn from './HeaderBtn'
import HeaderHambuger from './HeaderHambuger'
//1044에서 mainImg, header 변경
const Header:React.FC<{}> = ()=>{
    const List = ['Feattures', 'Pricing','Blog','Pages','Help'];
    return(
        <div className="w-full h-20 flex justify-center bg-[#4C6EF5] text-white">
            <div className="w-[80%] flex justify-between items-center">
            <h3 className="text-3xl font-bold mr-[4rem]">BAOBAB</h3>
                <HeaderHambuger List={List}/>
                <div className="flex pl-[4rem]">
                    <Btn Src={Sign} >Sign up</Btn>
                    <Btn Src={Register}>Register</Btn>
                </div>
            </div>
        </div>
    )
}

export default Header;