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
    const [id, setId] = useState<{ message: string; check?: boolean }>({
        message: '필수 정보입니다',
    });
    const [password,setPassword] = useState<{ message: string; check?: boolean }>({
        message: '필수 정보입니다',
    });
    const [email,setEmail] = useState<{ message: string; check?: boolean }>({
        message: '필수 정보입니다',
    });
    const dispatch = useDispatch();
    const handleId = (e:React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value
        if(value === ''){
            setId({message:'필수 정보입니다',check:false})
        }else if(!value.match(/^[a-z0-9_-]{5,20}$/)){
            setId({message:'5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',check:false})
        }else{
            setId({message:'',check:true})
        }
        dispatch(userAction.setInputs({name:'id',value:value}))
    }
    const handlePassword = (e:React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value
        if(value === ''){
            setPassword({message:'필수 정보입니다', check:false})
        }else if(!value.match(/^[a-zA-Z0-9~!@#$%^&*()_+]{8,16}/g)){
            setPassword({message:'8~16자의 영문 대/소문자, 숫자, 특수기호를 사용 가능합니다.',check:false})
        }else{
            setPassword({message:'',check:true})
        }
        dispatch(userAction.setInputs({name:'password',value:value}))
    }
    const handleEmail = (val:string,bool:boolean) => {setEmail({message:val,check:bool})}

    useEffect(()=>{
        if(id.check && password.check && email.check){
            check(true)
        }else{
            check(false)
        }
    },[id.check,password.check,email.check])
    console.log(email.check)
    return(
        <div className="w-[35rem] h-[16.5rem] rounded-md mb-3 flex flex-col mt-14">
            <FInput Src={person} name="id" Alt='아이디' 
                onBlur={handleId} state={id.check} bool={bool}/>
            <PassInput onBlur={handlePassword} state={password.check} bool={bool}/>
            <EmailInput handleChange={handleEmail} state={email.check} bool={bool}/>
            {((bool && id.message.length > 1) || (!id.check&& id.check !==undefined)) 
                && <p className='text-red-600'>id: {id.message}</p> }
            {((bool && password.message.length > 1) || (!password.check && password.check !==undefined)) 
                && <p className='text-red-600'>password: {password.message}</p> }
            {((bool && email.message.length > 1) || (!email.check && email.check !==undefined)) 
                && <p className='text-red-600'>email: {email.message}</p> }
        </div>
    )
}