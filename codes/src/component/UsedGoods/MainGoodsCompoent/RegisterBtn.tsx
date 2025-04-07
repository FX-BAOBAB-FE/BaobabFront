import {AnimatePresence, motion} from "motion/react"
import { useState } from "react";
import Spinner from '../image/Spinner.gif'

interface FuncType{
    onClick:() => void
}

export default function RegisterBtn({onClick}:FuncType){
    const [click,setClick] = useState(false);

    return(
        <motion.button
            initial={{
                backgroundColor: click ? '#172177' : 'var(--logo-color)', 
                borderColor: "var(--logo-color)"
            }}
            whileHover={{
                backgroundColor:'#172177'
            }}
            onTap={() => {
                setClick(true)
                onClick();
                setTimeout(()=>setClick(false),1000)
            }}
            onTapCancel={() => setClick(false)}
            transition={{
                duration:0.2,
                ease:"easeIn"
            }}
            
            className='
                flex justify-center items-center w-[15rem] h-[4rem] text-xl
                rounded-3xl text-white border-[3px]' 
        >
            <span>
                등록하기
            </span>
        </motion.button>
    )
}