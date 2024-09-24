import { ReactNode } from "react";

interface TextImgComponentProps{
    children:ReactNode
}

export default function TextImgComponent({children}:TextImgComponentProps) {
    return (
        <div className='flex w-[80%] mt-12'>
            {children}
        </div>
    );
}
