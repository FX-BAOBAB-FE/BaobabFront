import { ENUMLIST } from './ENUMLIST';
import Rarrow from './image/Rarrow.png'
import Larrow from './image/Larrow.png'
import { useRef } from 'react';
import {motion} from 'motion/react'
export default function Category(){
    const boxRef = useRef<HTMLDivElement>(null);
    const List:string[] = []
    const leftArrow = () => {
        boxRef.current?.scrollBy({left:-130, behavior:'smooth'})
    }
    const rightArrow = () => {
        boxRef.current?.scrollBy({left:130, behavior:'smooth'})
    }
    const Click = (a:any) =>{
        if(!List.indexOf(a)){
            console.log(List.indexOf(a))
            List.splice(List.indexOf(a),1);
        }else{
            List.push(a);
        }
    }
    return(
        <div className='w-[80%] h-[11rem] border-2
            flex relative items-center m-5 z-0'>
                <button 
                    className='absolute z-30 opacity-30 w-[3rem] h-[11rem] hover:opacity-100 transition-opacity duration-300'
                    onClick={leftArrow}>
                    <img src={Larrow} className='w-[3rem] h-[3rem]'/>
                </button>
                <button 
                    className='absolute z-30 opacity-60 right-0 w-[3rem] h-[11rem] hover:opacity-100'
                    onClick={rightArrow}>
                    <img src={Rarrow} className='w-[3rem] h-[3rem]'/>
                </button>
                <div 
                    className='flex overflow-x-scroll z-10' 
                    style={{scrollbarWidth:'none', msOverflowStyle:'none'}}
                    ref={boxRef}>
                    {ENUMLIST.map((idx,i) =>(
                        <motion.button 
                            key={i}
                            onClick={() => Click(idx.value)}
                            initial={{y:0}}
                            whileHover={{y:-10}}
                            transition={{ duration:0.3, ease:"easeIn"}}
                            className='flex flex-col items-center w-[8rem] h-[9rem] shrink-0 justify-center mx-1'>
                            <img src={idx.url} className='w-[5rem] h-[5rem] mt-2'/>
                            <p className='mt-3'>{idx.value}</p>
                        </motion.button>
                    ))}
                </div>
        </div>
    )
}