import { useEffect, useRef, useState } from "react";
import FirstBox from "../../component/Register/InsertRegister/FirstBox"
import SecondBox from "../../component/Register/InsertRegister/SecondBox"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userAction } from "../../component/reduxData/user-Slice";

export default function RegisterFinal(){
    const location = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector((state:any) => state.user);
    useEffect(()=>{
        dispatch(userAction.allRemove())
    },[location,dispatch])
    return(
        <div className="flex flex-col h-[60rem] items-center">
            <form onSubmit={(e) => {e.preventDefault();}}>
                <FirstBox/>
                <SecondBox/>
                <button className='w-[35rem] h-12 bg-[var(--logo-color)] rounded-lg
                font-bold text-white mt-5'
                onClick={() =>console.log(selector)}
                >
                    인증 요청
                </button>
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