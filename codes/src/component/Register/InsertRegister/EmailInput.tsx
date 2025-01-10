import { useState } from "react";
import { RegisterBtn } from "../../Types/BtnType";
import email from './Img/email.png'
import { useDispatch } from "react-redux";
import { userAction } from "../../reduxData/user-Slice";

export default function EmailInput(){
  const [first,setFirst] = useState("");
  const [second,setSecond] = useState("");
  
  const dispatch = useDispatch();
  const update = (Fst:string,Lst:string) => {
    const email = `${Fst}@${Lst}`
    dispatch(userAction.setInputs({name:'email',value:email}))
  }
  const handleFirst = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const val = e.target.value
    setFirst(val);
    update(val,second) 
  }
  const handleSecond = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const val = e.target.value
    setSecond(val);
    update(first,val);
  }
  const handleToggle = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setSecond(val);
    update(first,val);
  }
  
  return (
    <div className={`h-[4rem] w-full flex items-center border-b-2 border-x-2 rounded-b-md`}>
      <img src={email} alt={'이메일'} className="w-6 h-6 mx-3" />
      <input
        name="firstEmail"
        type="text"
        placeholder={'이메일'}
        className="w-56 h-10 text-lg"
        maxLength={23}
        onChange={handleFirst}
      />
      
    <div className="flex items-center text-lg">
        <p className="mx-1">@</p>
        <input type="text" name="secondEmail" className="w-32 h-10 mr-2" value={second} onChange={handleSecond}/>
        <select value={''} onChange={handleToggle}>
          <option value="">직접 입력</option>
          <option value="naver.com">naver.com</option>
          <option value="google.com">google.com</option>
        </select>
    </div>
    </div>
  );
}