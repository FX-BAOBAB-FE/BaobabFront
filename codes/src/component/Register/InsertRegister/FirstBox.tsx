import person from './Img/person.png'
import FInput from './FInput'
import PassInput from './PassInput'
import { useEffect, useRef } from 'react'
import EmailInput from './EmailInput'

export default function FirstBox(){
    const idRef = useRef<HTMLInputElement>(null);
    const focusId = ()=>{
        idRef.current?.focus();
    }
    
    return(
        <div className="w-[35rem] h-[15rem] rounded-md mb-3 flex flex-col mt-14">
            <FInput Src={person} Type="text" name="id" Alt='아이디' ref={idRef} 
                onClick={focusId} design={["border-t-2 border-x-2 rounded-t-md"]} />
            <PassInput />
            <EmailInput />
        </div>
    )
}