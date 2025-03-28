import Dropdown from 'react-bootstrap/Dropdown';
import { ENUMLIST } from "../ENUMLIST";
import { DropdownButton } from 'react-bootstrap';
import {motion} from 'motion/react'
import Category from '../Category';
import { useState } from 'react';
export default function RegistInput(){
    const [title,setTitme] = useState();
    const [content,setContent] = useState();
    const [category,setCategory] = useState();
    const [price, setPrice] = useState();
    const [img,setImg] = useState();
    return(
        <div className="w-[70%] flex flex-col justify-center items-start ">
            <div className="flex flex-col items-start">
                <p className="text-4xl my-8">상품 등록</p>
                <p className="font-bold text-xl">상품명</p>
                <p className="font-light">상품 종류와 특징을 나타낼 수 있도록 입력해주세요</p>
                <input className="w-[40rem] h-[3rem] border-2 my-3 pl-3"/>
                <p className='text-xl font-bold'>설명</p>
                <p className="font-light">상품 종류와 특징에 대해 자세히 입력해주세요</p>
                <textarea rows={5} className="w-[40rem] h-[5rem] border-2 my-3 pl-3 resize-none"/>
                <p>카테고리</p>
                <div className='w-[40rem] h-auto grid grid-cols-4 border-2'>
                    {ENUMLIST.map((val,i) =>
                        (<motion.button 
                        className='text-xl border-2 p-3'
                        initial={{borderColor:'var(--bg-color)'}}
                        whileHover={{borderColor:'var(--category)'}}
                        transition={{duration:0.2, ease:'easeIn'}}
                        >
                            {val.value}
                        </motion.button>)
                    )}
                </div>
                <p>판매가</p>
                <input className="w-[5rem] h-[2rem] border-2"/>
                <p>이미지 첨부</p>
            </div>
        </div>
    )
}