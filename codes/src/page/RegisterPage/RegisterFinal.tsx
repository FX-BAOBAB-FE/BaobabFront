import { useEffect, useRef, useState } from "react";
import FirstBox from "../../component/Register/InsertRegister/FirstBox"
import SecondBox from "../../component/Register/InsertRegister/SecondBox"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate} from "react-router-dom";
import { userAction } from "../../component/reduxData/user-Slice";
import lock from '../../component/Register/InsertRegister/Img/lock.png'
import { registerPost } from "../../component/fetch/user";

export default function RegisterFinal(){
    const location = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector((state:any) => state.user);
    const [firstCheck,setFirstCheck] = useState(false);
    const [secondCheck,setSecondCheck] = useState(false);
    const [success, setSuccess] = useState(false);
    const [next, setNext] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleFisrtChange = (bool:boolean) => {
        setFirstCheck(bool)
    }
    const handleSecondChange = (bool:boolean) => {
        setSecondCheck(bool)
    }
    const handleClick = () => {
        if(firstCheck && secondCheck){
            setNext(true)
            setSuccess(false);
        }else{
            setNext(false)
            setSuccess(true);
        }
    }
    const handleSubmit = async() => {
        if(inputRef.current?.value.match(/^[0-9]{6}$/)){
            setError(false);
            console.log(selector);
            await registerPost(selector);
            navigate('Success');
        }else{
            setError(true)
        }
    }
    useEffect(()=>{
        dispatch(userAction.allRemove())
    },[location,dispatch])
    return(
        <div className="flex flex-col h-[60rem] items-center">
            <form 
            onSubmit={(e) => {
                e.preventDefault();
            }}
            >
                <FirstBox check={handleFisrtChange} bool={success}/>
                <SecondBox check={handleSecondChange} bool={success}/>
                {next && 
                <div className="w-full h-14 flex items-center justify-between border-2 mt-3 rounded-md">
                    <div className="flex items-center">
                        <img src={lock} alt="잠금" className="w-6 h-6 mx-3"/>
                        <input ref={inputRef} className="outline-none" placeholder="인증번호 6자리 입력"/>
                    </div>
                    <button className="mr-3">재요청</button>
                </div>
                }
                {error && <p className="text-red-600">인증이 필요합니다.</p>}
                {!next && 
                    <button className='w-[35rem] h-12 bg-[var(--logo-color)] rounded-lg
                    font-bold text-white mt-5'
                    onClick={handleClick}
                    >
                        인증 요청
                    </button>
                }
                {next && 
                    <button className='w-[35rem] h-12 bg-[var(--logo-color)] rounded-lg
                    font-bold text-white mt-5'
                    onClick={handleSubmit}
                    type="submit"
                    >
                        가입하기
                    </button>
                }
            </form>
        </div>
    )
}

// const [id,setId] = useState('');
// const [password,setPassword]= useState('');
// const [FirstEmail,setFirstEmail]= useState('');
// const [LastEmail,setLastEmail] = useState('');
// const [name,setName] = useState('');
// const [birth,setBirth]=useState('');
// const [wire,setWire]=useState('');
// const [sex,setSex]=useState('');
// const [foreigner,setForeigner]=useState('');
// const [phone,setPhone]=useState('');