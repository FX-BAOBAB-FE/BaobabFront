import { useState } from "react";
import { RegisterBtn } from "../../Types/BtnType";

export default function EmailInput({Src,props}:RegisterBtn){
    const [selected, setSelected] = useState("");
  
    const Choose = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelected(event.target.value);
    };
    return (
        <div className={`h-[4rem] w-full flex items-center ${props.join(" ")}`}>
          <img src={Src} alt={'이메일'} className="w-6 h-6 mx-3" />
          <input
            type="email"
            placeholder={'이메일'}
            className="w-56 h-10 text-lg"
            maxLength={23}
          />
          
        <div className="flex items-center text-lg">
            <p className="mx-1">@</p>
            <input type="text" className="w-32 h-10 mr-2" value={selected} />
            <select value={selected} onChange={Choose}>
            <option value="">직접 입력</option>
            <option value="naver.com">naver.com</option>
            <option value="google.com">google.com</option>
            </select>
        </div>
        </div>
      );
}