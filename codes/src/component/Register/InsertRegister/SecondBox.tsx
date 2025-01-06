import person from './Img/person.png'
import birth from './Img/birth.png'
import connection from './Img/connection.png'
import smartphone from './Img/smartphone.png'
import FInput from './FInput'
import ChooseBtn from './ChooseBtn'
import WireInput from './WireInput'
import { useRef, useState } from 'react'
import AllAgree from './AllAgree'
export default function SecondBox(){
    const nameRef = useRef<HTMLInputElement>(null);
    const birthRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [sex,setSex] = useState('');
    const [foreigner, setForeigner] = useState('');
    const [agree,setAgree] = useState(false);

    const selectM=() =>{
        setSex('males')
    }
    const selectF=() =>{
        setSex('female')
    }
    const selectI = () =>{
        setForeigner('Inner')
    }
    const selectO=() =>{
        setForeigner('Outers');
    }
    const focusName = ()=>{
        nameRef.current?.focus();
    }

    const focusBirth = ()=>{
        birthRef.current?.focus();
    }

    const focusPhone = ()=>{
        phoneRef.current?.focus();
    }

    const handleAgree = () =>{
        setAgree(!agree);
    }
    return(
        <div className="w-[35rem] h-[20rem] border-x-2 rounded-md">
            <FInput Src={person} Type="text" Alt='이름' ref={nameRef} onClick={focusName} props={["border-t-2"]}/>
            <FInput Src={birth} Type="text" Alt='생년월일8자리' ref={birthRef} onClick={focusBirth} props={["border-y-2"]}/>
            <WireInput Src={connection} props={["border-b-2"]}/>
            <div className='h-[4rem] flex p-2 justify-around border-b-2'>
                <ChooseBtn List={['남자','여자']} State={sex} One={selectM} Two={selectF}></ChooseBtn>
                <ChooseBtn List={['내국인','외국인']} State={foreigner} One={selectI} Two={selectO}></ChooseBtn>
            </div>
            <FInput Src={smartphone} Type="text" Alt='휴대전화번호' ref={phoneRef} onClick={focusPhone} props={["border-b-2"]}/>
            <AllAgree state={agree} handleAgree={handleAgree} />
        </div>
    )
}