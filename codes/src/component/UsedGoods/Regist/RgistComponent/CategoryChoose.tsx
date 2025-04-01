import { useState } from "react";
import { Button, ToggleButton } from "react-bootstrap";
import {motion , AnimatePresence} from 'motion/react'
import { ENUMLIST } from "../../MainGoodsCompoent/ENUMLIST";

interface CategoryChooseType{
    category:string,
    setCategory:(val:string) => void
}
export default function CategoryChoose({category,setCategory}:CategoryChooseType){
    const [checked, setChecked] = useState(false);
    const clicked = (e:React.MouseEvent<HTMLButtonElement>)=>{
        setCategory(e.currentTarget.value);
        setChecked(false);
    }

    const selected = ENUMLIST.find(itme => itme.key === category)
    const displayText = selected ? selected.value : '선택'
    return(
        <>
            <p className="font-bold text-xl">카테고리</p>
            <Button
            type="button"
            className="w-[10rem] h-[2.5rem] my-2"
            variant={checked ? "secondary" : "outline-secondary"}
            onClick={() => setChecked(prev => !prev)}
            >
                {displayText}
            </Button>
            <AnimatePresence>
                {checked && 
                <motion.div 
                className='w-[40rem] h-auto grid grid-cols-4 p-1'
                initial={{opacity:0 ,y:-20}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-20}}
                transition={{duration:0.25, ease:"easeIn"}}
                >
                    {ENUMLIST.map((val,i) =>
                        (<motion.button 
                        key={i}
                        type="button"
                        className='text-xl border-2 p-3 m-1 border-[var(--category)]'
                        initial={{borderColor:'var(--category)'}}
                        whileHover={{borderColor:'var(--category-bg)'}}
                        transition={{duration:0.5}}
                        value={val.key}
                        onClick={clicked}
                        >
                            {val.value}
                        </motion.button>)
                    )}
                </motion.div>}
            </AnimatePresence>
        </>
    )
}