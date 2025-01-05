import { forwardRef, useState } from "react"
type IType ={
    Src:string,
    Alt:string,
    Type:string,
    props?:string[],
    onClick:() => void,
}

const FInput = forwardRef<HTMLInputElement, IType>(({ Src, Alt, Type, props = [], onClick }, ref) => {
    return (
      <div onClick={onClick} className={`h-[4rem] w-full flex items-center ${props.join(" ")}`}>
        <img src={Src} alt={Alt} className="w-6 h-6 mx-3" />
        <input
          ref={ref}
          type={Type}
          placeholder={Alt}
          className="w-56 h-10 text-lg"
          maxLength={23}
        />
      </div>
    );
  });

export default FInput;