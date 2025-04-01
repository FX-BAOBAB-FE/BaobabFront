import {AnimatePresence, motion} from "motion/react"
import { useState } from "react";
import Spinner from './image/Spinner.gif'

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
                setTimeout(()=>setClick(false),2000)
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
            <motion.div>
                <AnimatePresence mode="wait">
                    {click ? <motion.img 
                        key="spinner"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{duration:0.5}}
                        src={Spinner} alt='로딩'/> :
                        <motion.span
                            key="text"
                            exit={{opacity:0}}
                            transition={{duration:0.2}}>
                            등록하기
                        </motion.span>}
                </AnimatePresence>
            </motion.div>

        </motion.button>
        // 버튼이 사라지고 스피너 돌리기(1초정도)
    )
}