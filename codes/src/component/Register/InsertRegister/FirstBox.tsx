import person from './Img/person.png'
import lock from './Img/lock.png'
import email from './Img/email.png'
import FInput from './FInput'
import PassInput from './PassInput'
import { useRef } from 'react'
import EmailInput from './EmailInput'
export default function FirstBox(){
    const idRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const focusId = ()=>{
        idRef.current?.focus();
    }
    const focusPass = ()=>{
        passRef.current?.focus();
    }
    return(
        <div className="w-[35rem] h-[12rem] border-x-2 rounded-md mb-3 flex flex-col mt-14">
            <FInput Src={person} Type="text" Alt='아이디' ref={idRef} onClick={focusId} props={["border-t-2"]}/>
            <PassInput Src={lock} onClick={focusPass} ref={passRef} props={["border-y-2"]}/>
            <EmailInput Src={email} props={["border-b-2"]}/>
        </div>
    )
}