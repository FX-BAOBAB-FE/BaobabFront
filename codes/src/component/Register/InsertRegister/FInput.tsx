import { forwardRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../reduxData/user-Slice";
import { useForm } from "react-hook-form";
type IType ={
    Src:string,
    Alt:string,
    name:string,
    Type:string,
    design?:string[],
    onClick:() => void,
}

const FInput = forwardRef<HTMLInputElement, IType>(({ Src, Alt,name, Type, design = [], onClick }, ref) => {
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ref && "current" in ref && ref.current) {
      dispatch(userAction.setInputs({ name:name, value: ref.current.value }));
    }
  };
  return (
    <div onClick={onClick} className={`h-[4rem] w-full flex items-center border-x-2 ${design.join(" ")}`}>
      <img src={Src} alt={Alt} className="w-6 h-6 mx-3" />
      <input
        name={name}
        ref={ref}
        type={Type}
        placeholder={Alt}
        className="w-56 h-10 text-lg"
        maxLength={23}
        onChange={onChange}

      />
    </div>
  );
  });

export default FInput;