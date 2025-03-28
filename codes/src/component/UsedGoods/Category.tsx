import { ENUMLIST } from './ENUMLIST';
import Rarrow from './image/Rarrow.png'
import Larrow from './image/Larrow.png'
import { useEffect, useRef, useState } from 'react';
import {motion} from 'motion/react'

interface wihe{
    weight:string,
    height:string
}


export default function Category(){
    const boxRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<string[]>([]);
    const leftArrow = () => {
        boxRef.current?.scrollBy({left:-130, behavior:'smooth'})
    }
    const rightArrow = () => {
        boxRef.current?.scrollBy({left:130, behavior:'smooth'})
    }
    const Click = (val:string) =>{
        if(selected.includes(val)){
            setSelected(prev => prev.filter(v => v !== val))
        }else{
            setSelected(prev => [...prev,val])
        }
    }
    useEffect(()=>{
        
    },[selected])
    return(
        <div className='w-[80%] h-[11rem] border-[3px]
            flex relative items-center my-5 z-0'>
                <button 
                    className='absolute z-30 opacity-30 w-[3rem] h-[11rem] hover:opacity-100 transition-opacity duration-300'
                    onClick={leftArrow}>
                    <img src={Larrow} className='w-[3rem] h-[3rem]'/>
                </button>
                <button 
                    className='absolute z-30 opacity-30 right-0 w-[3rem] h-[11rem] hover:opacity-100 transition-opacity duration-300'
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
                            initial={{
                                borderColor: selected.includes(idx.value) ? 'var(--category)': 'var(--bg-color)'}}
                            whileHover={{
                                borderColor: selected.includes(idx.value) ? 'var(--category)': 'var(--bg-color)'}}

                            transition={{ duration:0.3, ease:"easeIn"}}
                            className='flex flex-col items-center w-[8rem] h-[9rem] shrink-0 justify-center mx-1 border-2 rounded-2xl'>
                            <img src={idx.url} className='w-[5rem] h-[5rem] mt-2'/>
                            <p className='mt-3'>{idx.value}</p>
                        </motion.button>
                    ))}
                </div>
        </div>
    )
}