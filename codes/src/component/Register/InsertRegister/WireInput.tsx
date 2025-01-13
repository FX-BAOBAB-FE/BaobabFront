import { useState } from "react";
import { RegisterBtn } from "../../Types/BtnType";
import connection from './Img/connection.png'
import arrow_down from './Img/arrow_down.png'
import arrow_up from './Img/arrow_up.png'
import { useDispatch } from "react-redux";
import { userAction } from "../../reduxData/user-Slice";

type WType = {
    handler:(val:string,bool:boolean)=> void
}
export default function WireInput({handler}:WType){
    const dispatch = useDispatch();

    const [isExpanded, setIsExpanded] = useState(false);
    const [selected, setSelected] = useState("통신사 선택");

    function onClick(e:React.MouseEvent<HTMLDivElement>){
        const a = e.target as HTMLLIElement
        if(a.tagName=='BUTTON'){
            handler('',true)
            setSelected(a.innerText);
            setIsExpanded(false);
            dispatch(userAction.setInputs({name:'wire',value:a.innerText}))
        }
    }
    const toggleMenu = () => {
      setIsExpanded((prev) => !prev);
    };
    return(
        <div className={`h-[4rem] w-full flex items-center border-b-2 border-x-2`}>
            <img src={connection} alt="통신사 선택" className='w-6 h-6 mx-3'/>
            <div className="flex">
                <button aria-expanded={isExpanded} aria-controls="drop" onClick={toggleMenu}
                    className={`${selected !== '통신사 선택' ? 'text-black' : 'text-[#A9AFB9]'} w-[28rem] text-left`}
                >
                    {selected}
                </button>
                <div id="drop" hidden={!isExpanded} onClick={onClick} className="absolute z-10 grid grid-cols-2 
                 bg-[#F8F9FA] border-2 rounded-md shadow-md mt-5 cursor-pointer">
                    <button className="text-left pl-2 py-2 border-b-[1px] border-r-[1px]">SKT</button>
                    <button className="text-left px-2 py-2 border-b-[1px]">SKT알뜰폰</button>
                    <button className="text-left pl-2 py-2 border-b-[1px] border-r-[1px]">KT</button>
                    <button className="text-left px-2 py-2 border-b-[1px]">KT알뜰폰</button>
                    <button className="text-left pl-2 py-2 border-b-[1px] border-r-[1px]">LG</button>
                    <button className="text-left px-2 py-2 border-b-[1px]">LG알뜰폰</button>
                </div>
                <button onClick={toggleMenu}><img src={isExpanded ? arrow_up : arrow_down} className="ml-2 w-5 h-5"/></button>
            </div>
        </div>
    )
}