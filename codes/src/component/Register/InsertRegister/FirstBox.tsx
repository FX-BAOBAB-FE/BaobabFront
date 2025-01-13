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
    console.log(id.check)
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

    return(
        <div className="w-[35rem] h-[16.5rem] rounded-md mb-3 flex flex-col mt-14">
            <FInput Src={person} name="id" Alt='아이디' 
                onBlur={handleId} design={["border-t-2 rounded-t-md "]} />
            <PassInput onBlur={handlePassword}/>
            <EmailInput handleChange={handleEmail}/>
            {(bool || (!id.check&& id.check !==undefined)) && <p>id: {id.message}</p> }
            {(bool || (!password.check && password.check !==undefined)) && <p>password: {password.message}</p> }
            {(bool || (!email.check && email.check !==undefined)) && <p>email: {email.message}</p> }
        </div>
    )
}