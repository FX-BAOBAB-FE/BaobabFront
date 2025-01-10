import person from './Img/person.png'
import birth from './Img/birth.png'
import connection from './Img/connection.png'
import smartphone from './Img/smartphone.png'
import FInput from './FInput'
import ChooseBtn from './ChooseBtn'
import WireInput from './WireInput'
import { useEffect, useRef, useState } from 'react'
import AllAgree from './AllAgree'
import unChecked from './Img/unChecked.png'
import checked from './Img/checked.png'
import Agree from './Agree'
import { UserProps } from '../../Types/UserInfo'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../../reduxData/user-Slice'
export default function SecondBox(){
    const nameRef = useRef<HTMLInputElement>(null);
    const birthRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const [sex,setSex] = useState('');
    const [foreigner, setForeigner] = useState('');
    const [allAgree,setAllAgree] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const [info,setInfo] = useState(false);
    const [identify,setIdentify] = useState(false);
    const [wire,setWire] = useState(false);
    const [certification,setCertification] = useState(false);
    const [collect,setCollect] = useState(false);
    
    const selectM=() =>{ 
        setSex('males') 
        dispatch(userAction.setInputs({name:'sex',value:'males'}))
    }
    const selectF=() =>{ 
        setSex('female') 
        dispatch(userAction.setInputs({name:'sex',value:'female'}))
    }
    const selectI = () =>{ 
        setForeigner('inner') 
        dispatch(userAction.setInputs({name:'foreigner',value:'inner'}))
    }
    const selectO=() =>{ 
        setForeigner('Outers') 
        dispatch(userAction.setInputs({name:'foreigner',value:'outers'}))
    }
    const focusName = ()=>{ nameRef.current?.focus() }
    const focusBirth = ()=>{ birthRef.current?.focus() }
    const focusPhone = ()=>{ phoneRef.current?.focus(); }
    const handleIsOpen = () => {setIsOpen(!isOpen)}
    const handleAllAgree = () =>{ 
        const Bool = !allAgree
        setInfo(Bool); setIdentify(Bool); setWire(Bool); setCertification(Bool); setCollect(Bool);
        setAllAgree(Bool) 
    }
    const handleInfo = () => { setInfo(!info)}
    const handleIdentify = () => { setIdentify(!identify)}
    const handleWire = () => { setWire(!wire)}
    const handleCertification = () => { setCertification(!certification)}
    const handleCollect = () => { setCollect(!collect)}
    useEffect(()=>{
        const check = info && identify && wire && certification && collect
        setAllAgree(check);
    },[info,identify,wire,certification,collect])
    return(
        <div className="w-[35rem] rounded-md">
            <FInput Src={person} Type="text" Alt='이름' name='name' ref={nameRef} onClick={focusName} design={["border-t-2 rounded-t-md"]}/>
            <FInput Src={birth} Type="text" Alt='생년월일8자리' name='birth' ref={birthRef} onClick={focusBirth} design={["border-y-2"]}/>
            <WireInput/>
            <div className='h-[4rem] flex p-2 justify-around border-b-2 border-x-2'>
                <ChooseBtn List={['남자','여자']} State={sex} One={selectM} Two={selectF}></ChooseBtn>
                <ChooseBtn List={['내국인','외국인']} State={foreigner} One={selectI} Two={selectO}></ChooseBtn>
            </div>
            <FInput Src={smartphone} Type="text" Alt='휴대전화번호' name='phone' ref={phoneRef} onClick={focusPhone} design={["border-b-2 rounded-b-md"]}/>
            <AllAgree stateOpen={isOpen} stateAgree={allAgree} handleAgree={handleAllAgree} handleIsOpen={handleIsOpen} />
            {isOpen && 
            <div className='h-[8rem] border-2 border-t-[1px] grid grid-cols-2'>
                <Agree state={info} name='개인정보 이용' 
                    href='use' onClick={handleInfo}/>
                <Agree state={identify} name='고유식별정보 처리' 
                    href='identify' onClick={handleIdentify}/>
                <Agree state={wire} name='통신사 이용약관' 
                    href='wire' onClick={handleWire}/>
                <Agree state={certification} name='인증사 이용약관' 
                    href='certification' onClick={handleCertification}/>
                <Agree state={collect} name='BAOBAB 개인정보수집' 
                    href='collect' onClick={handleCollect}/>
            </div>}
            
        </div>
    )
}