import { useState } from "react";
import { RegisterBtn } from "../../Types/BtnType";
import arrow_down from './Img/arrow_down.png'
import arrow_up from './Img/arrow_up.png'
export default function WireInput({Src, props=[]}:RegisterBtn){
    const [isExpanded, setIsExpanded] = useState(false);
    const [selected, setSelected] = useState("통신사 선택");

    function onClick(e:React.MouseEvent<HTMLUListElement>){
        const a = e.target as HTMLLIElement

        if(a.tagName=='LI'){
            setSelected(a.innerText);
            setIsExpanded(false)
        }
    }
    const toggleMenu = () => {
      setIsExpanded((prev) => !prev);
    };
    return(
        <div className={`h-[4rem] w-full flex items-center ${props.join(' ')}`}>
            <img src={Src} alt="통신사 선택" className='w-6 h-6 mx-3'/>
            <div className="flex">
                <button aria-expanded={isExpanded} aria-controls="drop" onClick={toggleMenu}
                    className={`${selected !== '통신사 선택' ? 'text-black' : 'text-[#A9AFB9]'} w-[28rem] text-left`}
                >
                    {selected}
                </button>
                <ul id="drop" hidden={!isExpanded} onClick={onClick} className="absolute z-10 grid grid-cols-2 
                 bg-[#F8F9FA] border-2 rounded-md shadow-md mt-5 cursor-pointer">
                    <li className="pl-2 py-2 border-b-[1px] border-r-[1px]">SKT</li>
                    <li className="px-2 py-2 border-b-[1px]">SKT알뜰폰</li>
                    <li className="pl-2 py-2 border-b-[1px] border-r-[1px]">KT</li>
                    <li className="px-2 py-2 border-b-[1px]">KT알뜰폰</li>
                    <li className="pl-2 py-2 border-b-[1px] border-r-[1px]">LG</li>
                    <li className="px-2 py-2 border-b-[1px]">LG알뜰폰</li>
                </ul>
                <button onClick={toggleMenu}><img src={isExpanded ? arrow_up : arrow_down} className="ml-2 w-5 h-5"/></button>
            </div>
        </div>
    )
}