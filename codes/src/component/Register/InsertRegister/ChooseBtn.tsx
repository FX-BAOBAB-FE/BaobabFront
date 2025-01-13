import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

type CBtn={
    List:string[],
    State:string,
    One:() => void,
    Two:() => void,
}
export default function({List,State, One,Two}:CBtn){

    return(
        <div>
            <button onClick={One} className={`border-y-2 border-l-2 border-r-2 w-[8rem] h-[2.5rem] rounded-l-md 
                ${State.length === 5 ? 'border-[var(--logo-color)] text-[var(--logo-color)]' : 
                    'border-[#C3C5C9] text-[#C3C5C9]'}`}
            >
                {List[0]}
            </button>
            <button onClick={Two} className={`border-y-2 border-r-2 border-l-2 w-[8rem] 
                h-[2.5rem] rounded-r-md font-bold
                ${State.length === 6 ? 'border-[var(--logo-color)] text-[var(--logo-color)]' : 
                    'border-[#C3C5C9] text-[#C3C5C9]'}`
                }>
                {List[1]}
            </button>
        </div>
    )
}