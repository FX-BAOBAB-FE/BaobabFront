import person from './Img/person.png'
import FInput from './FInput'
import PassInput from './PassInput'
import { useEffect, useRef, useState } from 'react'
import EmailInput from './EmailInput'
import { useDispatch} from "react-redux";
import { userAction } from '../../reduxData/user-Slice'

type Ft ={
    check:(bool:boolean) => void;
    bool:boolean
}
export default function FirstBox({check,bool}:Ft){
    const [nickName, setNickName] = useState<{ message: string; check?: boolean }>({
        message: '필수 정보입니다',
    });
    const [password,setPassword] = useState<{ message: string; check?: boolean }>({
        message: '필수 정보입니다',
    });
    const [email,setEmail] = useState<{ message: string; check?: boolean }>({
        message: '필수 정보입니다',
    });
    const dispatch = useDispatch();
    const handleNickName = (e:React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value
        if(value === ''){
            setNickName({message:'필수 정보입니다',check:false})
        }else if(!value.match(/^[a-zA-Z0-9가-힣~!@#]{2,50}$/)){
            setNickName({message:'2자 이상 50자 이하이며 특수문자는 ~!@#만 가능합니다',check:false})
        }else{
            setNickName({message:'',check:true})
        }
        dispatch(userAction.setInputs({name:'nickName',value:value}))
    }
    const handlePassword = (e:React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value
        if(value === ''){
            setPassword({message:'필수 정보입니다', check:false})
        }else if(value.length < 8 || value.length >101){
            setPassword({message:'8자 이상이어야 합니다',check:false})
        }else if(!value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/)){
            setPassword({message:'영문 대/소문자, 숫자를 하나 이상 포함해야 합니다.',check:false})
        }else{
            setPassword({message:'',check:true})
        }
        dispatch(userAction.setInputs({name:'password',value:value}))
    }
    const handleEmail = (val:string,bool:boolean) => {setEmail({message:val,check:bool})}

    useEffect(()=>{
        if(nickName.check && password.check && email.check){
            check(true)
        }else{
            check(false)
        }
    },[nickName.check,password.check,email.check])
    return(
        <div className="w-[35rem] h-[18rem] rounded-md mb-3 flex flex-col mt-14">
            <EmailInput handleChange={handleEmail} state={email.check} bool={bool}/>
            <PassInput onBlur={handlePassword} state={password.check} bool={bool}/>
            <FInput Src={person} name="id" Alt='닉네임' 
                onBlur={handleNickName} state={nickName.check} bool={bool}/>

            {((bool && email.message.length > 1) || (!email.check && email.check !==undefined)) 
                && <p className='text-red-600'>email: {email.message}</p> }
            {((bool && password.message.length > 1) || (!password.check && password.check !==undefined)) 
                && <p className='text-red-600'>password: {password.message}</p> }
            {((bool && nickName.message.length > 1) || (!nickName.check&& nickName.check !==undefined)) 
                && <p className='text-red-600'>nickname: {nickName.message}</p> }
        </div>
    )
}