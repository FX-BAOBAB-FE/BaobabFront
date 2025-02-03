import React, { forwardRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../reduxData/user-Slice";
import InsertColorChange from "./ChangeContext/InsertColorChange";

type IType ={
    Src:string,
    Alt:string,
    name:string,
    Type?:string,
    design?:string[],
    state:boolean|undefined,
    bool:boolean,
    onBlur:(e:React.FocusEvent<HTMLInputElement>) => void,
}

const FInput = forwardRef<HTMLInputElement, IType>(({
   Src, Alt,name, Type="text", state, onBlur, bool
  }, ref) => {
  const dispatch = useDispatch();
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ref && "current" in ref && ref.current) {
      dispatch(userAction.setInputs({ name:name, value: ref.current.value }));
    }
  };
  
  return (
    <InsertColorChange state={state} bool={bool}>
      <img src={Src} alt={Alt} className="w-6 h-6 mx-3" />
      <input
        name={name}
        ref={ref}
        type={Type}
        placeholder={Alt}
        className={`w-[30rem] h-10 text-lg outline-none`}
        maxLength={23}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InsertColorChange>
  );
  });

export default FInput;

