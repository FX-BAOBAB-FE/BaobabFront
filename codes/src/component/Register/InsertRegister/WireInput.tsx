import { useState } from "react";
import connection from './Img/connection.png'
import arrow_down from './Img/arrow_down.png'
import arrow_up from './Img/arrow_up.png'
import { useDispatch } from "react-redux";
import { userAction } from "../../reduxData/user-Slice";
import InsertColorChange from "./ChangeContext/InsertColorChange";

type WType = {
    handler:(val:string,bool:boolean)=> void,
    state:boolean|undefined,
    bool:boolean
}
export default function WireInput({handler,state,bool}:WType){
    const dispatch = useDispatch();

    const [isExpanded, setIsExpanded] = useState(false);
    const [selected, setSelected] = useState("통신사 선택");

    function onClick(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLButtonElement;
        if (target.tagName === "BUTTON") {
            const value = target.value;  // 버튼의 value 가져오기
            handler('',true)
            setSelected(target.innerText);
            setIsExpanded(false);
            dispatch(userAction.setInputs({name:'carrierType',value:value}))
        }
    }
    const toggleMenu = () => {
      setIsExpanded((prev) => !prev);
    };
    return(
        <InsertColorChange state={state} bool={bool}>
            <img src={connection} alt="통신사 선택" className='w-6 h-6 mx-3'/>
            <div className="flex">
                <button aria-expanded={isExpanded} aria-controls="drop" onClick={toggleMenu}
                    className={`${selected !== '통신사 선택' ? 'text-black' : 'text-[#A9AFB9]'} w-[28rem] text-left`}
                >
                    {selected}
                </button>
                <div id="drop" hidden={!isExpanded} onClick={onClick} className="absolute z-10 grid grid-cols-2 
                 bg-[#F8F9FA] border-2 rounded-md shadow-md mt-5 cursor-pointer">
                    <button className="text-left pl-2 py-2 border-b-[1px] border-r-[1px]" 
                        value="SKT">SKT</button>
                    <button className="text-left px-2 py-2 border-b-[1px]" 
                        value="SKT_MVNO">SKT알뜰폰</button>
                    <button className="text-left pl-2 py-2 border-b-[1px] border-r-[1px]" 
                        value="KT">KT</button>
                    <button className="text-left px-2 py-2 border-b-[1px]" 
                        value="KT_MVNO">KT알뜰폰</button>
                    <button className="text-left pl-2 py-2 border-b-[1px] border-r-[1px]" 
                        value="LGU_PLUS">LG</button>
                    <button className="text-left px-2 py-2 border-b-[1px]" 
                        value="LGU_PLUS_MVNO">LG알뜰폰</button>
                </div>
                <button onClick={toggleMenu}><img src={isExpanded ? arrow_up : arrow_down} className="ml-2 w-5 h-5"/></button>
            </div>
        </InsertColorChange>
    )
}