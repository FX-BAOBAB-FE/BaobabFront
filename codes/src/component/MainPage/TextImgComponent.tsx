import { ReactNode } from "react";

interface TextImgComponentProps{
    children:ReactNode
}

export default function TextImgComponent({children}:TextImgComponentProps) {
    return (
        <div className='flex flex-col w-[80%] mt-12 justify-between lg:flex-row items-center'>
            {children}
        </div>
    );
}
