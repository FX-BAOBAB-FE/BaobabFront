import React, { forwardRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../reduxData/user-Slice";
import { useForm } from "react-hook-form";

type IType ={
    Src:string,
    Alt:string,
    name:string,
    Type?:string,
    design?:string[],
    onBlur:(e:React.FocusEvent<HTMLInputElement>) => void,
}

const FInput = forwardRef<HTMLInputElement, IType>(({ Src, Alt,name, Type="text", design = [], onBlur }, ref) => {
  const dispatch = useDispatch();
  console.log(design)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ref && "current" in ref && ref.current) {
      dispatch(userAction.setInputs({ name:name, value: ref.current.value }));
    }
  };
  return (
    <div className={`h-[4rem] w-full flex items-center border-2 ${design.join(" ")} 
    border-collapse
    `}>
      <img src={Src} alt={Alt} className="w-6 h-6 mx-3" />
      <input
        name={name}
        ref={ref}
        type={Type}
        placeholder={Alt}
        className="w-[30rem] h-10 text-lg"
        maxLength={23}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
  });

export default FInput;