import Person from './Img/person.png'
import Birth from './Img/birth.png'
import Smartphone from './Img/smartphone.png'
import FInput from './FInput'
import ChooseBtn from './ChooseBtn'
import WireInput from './WireInput'
import { useEffect, useRef, useState } from 'react'
import AllAgree from './AllAgree'
import Agree from './Agree'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../../reduxData/user-Slice'

type ST = {
    check:(bool:boolean) => void,
    bool:boolean,
}
export default function SecondBox({check,bool}:ST){
    const [name,setName] = useState({message:'',check:false})
    const [birth,setBirth] = useState({message:'',check:false})
    const [phone,setPhone] = useState({message:'',check:false})
    const [wireInfo, setWireInfo] = useState({message:'이용하는 통신사를 선택해 주세요',check:true})
    const [sex,setSex] = useState('males');
    const [foreigner, setForeigner] = useState('inner');
    const [allAgree,setAllAgree] = useState({message:'',check:false});
    const [isOpen,setIsOpen] = useState(false);
    const [info,setInfo] = useState(false);
    const [identify,setIdentify] = useState(false);
    const [wire,setWire] = useState(false);
    const [certification,setCertification] = useState(false);
    const [collect,setCollect] = useState(false);
    const dispatch = useDispatch();

    const handleName = (e:React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value
        if(value === ''){setName({message:'필수 정보입니다',check:false})}
        else{setName({message:'',check:true})}
        dispatch(userAction.setInputs({name:'name',value:value}))
    }
    const handleBirth = (e:React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value
        if(value === ''){
            setBirth({message:'필수 정보입니다',check:false})
        }else if(!value.match(/^[0-9]{8}/g)){
            setBirth({message:'생년월일은 8자리 숫자로 입력해 주세요',check:false})
        }else{
            setBirth({message:'',check:true})
        }
        dispatch(userAction.setInputs({name:'birth',value:value}))
    }
    const handlePhone = (e:React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value
        if(value === ''){
            setPhone({message:'필수 정보입니다',check:false})
        }else if(!value.match(/^(01[016789]{1})-?([0-9]{3,4})-?([0-9]{4})$/g)){
            setPhone({message:'휴대전화번호가 정확한지 확인해 주세요',check:false})
        }else{
            setPhone({message:'',check:true})
            if(!e.target.value.includes('-')){
                e.target.value = `${value.slice(0,3)}-${value.slice(3,7)}-${value.slice(7)}`
            }
        }
        dispatch(userAction.setInputs({name:'phone',value:value}))
    }
    const handleWireState = (val:string,bool:boolean) => {
        setWireInfo({message:val,check:bool})
    }
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
    const handleIsOpen = () => {setIsOpen(!isOpen)}
    const handleAllAgree = () =>{ 
        const Bool = !allAgree.check
        setInfo(Bool); setIdentify(Bool); setWire(Bool); setCertification(Bool); setCollect(Bool);
        if(Bool){setAllAgree(({message:'',check:Bool})) }
        else{setAllAgree(({message:'필수 약관에 모두 동의해 주세요',check:Bool}))}
    }
    const handleInfo = () => { setInfo(!info)}
    const handleIdentify = () => { setIdentify(!identify)}
    const handleWire = () => { setWire(!wire)}
    const handleCertification = () => { setCertification(!certification)}
    const handleCollect = () => { setCollect(!collect)}
    useEffect(()=>{
        const check = info && identify && wire && certification && collect
        if(check){setAllAgree({message:'',check:check});}
        else{setAllAgree({message:'필수 약관에 모두 동의해 주세요',check:check});}
    },[info,identify,wire,certification,collect])
    return(
        <div className="w-[35rem] rounded-md">
            <FInput Src={Person} Alt='이름' name='name' onBlur={handleName} design={["border-t-2 rounded-t-md"]}/>
            <FInput Src={Birth} Alt='생년월일8자리' name='birth' onBlur={handleBirth} design={["border-y-2"]}/>
            <WireInput handler={handleWireState}/>
            <div className='h-[4rem] flex p-2 justify-around border-b-2 border-x-2'>
                <ChooseBtn List={['남자','여자']} State={sex} One={selectM} Two={selectF}></ChooseBtn>
                <ChooseBtn List={['내국인','외국인']} State={foreigner} One={selectI} Two={selectO}></ChooseBtn>
            </div>
            <FInput Src={Smartphone} Alt='휴대전화번호' name='phone' onBlur={handlePhone} design={["border-b-2 rounded-b-md"]}/>
            <p>name : {name.message}</p>
            <p>birth : {birth.message}</p>
            <p>phone : {phone.message}</p>
            <p>wire : {wireInfo.message}</p>
            <p>agree : {allAgree.message}</p>

            <AllAgree stateOpen={isOpen} stateAgree={allAgree.check} handleAgree={handleAllAgree} handleIsOpen={handleIsOpen} />
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