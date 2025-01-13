import { useState } from "react";
import { RegisterBtn } from "../../Types/BtnType";
import email from './Img/email.png'
import { useDispatch } from "react-redux";
import { userAction } from "../../reduxData/user-Slice";

type EType ={
  handleChange:(val:string,bool:boolean) => void;
}

export default function EmailInput({handleChange}:EType){
  const [first,setFirst] = useState("");
  const [second,setSecond] = useState("");
  
  const dispatch = useDispatch();
  const update = (Fst:string,Lst:string) => {
    const email = `${Fst}@${Lst}`
    if(Fst !=='' && Lst !== ''){
      handleChange('',true)
      dispatch(userAction.setInputs({name:'email',value:email}))
    }else{
      handleChange('필수정보입니다.',false)
    }

  }
  const handleFirst = (e:React.FocusEvent<HTMLInputElement>) =>{
    const val = e.target.value
    setFirst(val);
    update(val,second) 
  }
  const handleSecond = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const val = e.target.value
    setSecond(val);
  }
  const SecondBlur = (e:React.FocusEvent<HTMLInputElement>) =>{
    const val = e.target.value
    update(first,val);
  }
  const handleToggle = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setSecond(val);
    update(first,val);
  }
  
  return (
    <tr className={`h-[4rem] w-full flex items-center border-2 border-collapse rounded-b-md`}>
      <img src={email} alt={'이메일'} className="w-6 h-6 mx-3" />
      <input
        name="firstEmail"
        type="text"
        placeholder={'이메일'}
        className="w-56 h-10 text-lg"
        maxLength={23}
        onBlur={handleFirst}
      />
      
    <div className="flex items-center text-lg">
        <p className="mx-1">@</p>
        <input 
          type="text" 
          name="secondEmail" 
          className="w-32 h-10 mr-2" 
          value={second} 
          onChange={handleSecond}
          onBlur={SecondBlur}
          />
        <select value={''} onChange={handleToggle}>
          <option value="">직접 입력</option>
          <option value="naver.com">naver.com</option>
          <option value="google.com">google.com</option>
        </select>
    </div>
    </tr>
  );
}