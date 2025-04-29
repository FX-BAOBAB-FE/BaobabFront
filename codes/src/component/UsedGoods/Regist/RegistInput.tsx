import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import { ENUMLIST } from "../MainGoodsCompoent/ENUMLIST";
import { Button, DropdownButton, ToggleButton } from 'react-bootstrap';
import {AnimatePresence, motion} from 'motion/react'
import { Form } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import InputData from './RgistComponent/InputData';
import { v4 } from 'uuid';
import { Console } from 'console';
import RegisterBtn from '../MainGoodsCompoent/RegisterBtn';
import CategoryChoose from './RgistComponent/CategoryChoose';
import ImgInput, { FileItem } from './RgistComponent/ImgInput';
import { useNavigate } from 'react-router-dom';
import { InsertPoster } from '../../fetch/articleLoad';

export default function RegistInput(){
    const formRef = useRef<HTMLFormElement>(null);
    const [category, setCateogry] = useState("선택");
    const [imgList,setImgList] = useState<FileItem[]>([]);
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const navigate = useNavigate();
    const onClick = ()=>{}

    const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)
    const onChangePrice = (e:React.ChangeEvent<HTMLInputElement>)=> setPrice(e.target.value)
    const handleSubmit = async(e:React.FormEvent) =>{
        e.preventDefault();
        if(!formRef.current) return

        const formData = new FormData(formRef.current);
        const title = formData.get('title')?.toString().trim();
        const content = formData.get('content')?.toString().trim();
        const price = formData.get('price')?.toString().trim()
        
        if (!title || !content || !price || category === "선택" || imgList.length === 0) {
            alert("모든 항목을 입력해주세요.");
            return; 
        }
        if(!price.match(/^[0-9]+$/g)){
            alert('가격을 제대로 입력해주세요')
            return;
        }
        formData.append("title",title);
        formData.append("content",content);
        formData.append("category",category);
        formData.append("price",price);
        imgList.map(({isNew,...rest}) => rest).forEach((image) => {
            console.log(JSON.stringify(image))
            formData.append("imageList",JSON.stringify(image));
        })
        await InsertPoster(formData);
        navigate(-1);
    }
    return(
        <div className="w-[70%] flex flex-col justify-center items-start">
            <Form ref={formRef} onSubmit={handleSubmit} className="w-[50%] flex flex-col items-start">
                <p className="text-4xl my-8">상품 등록</p>
                <InputData title='상품명' content='상품 종류와 특징을 나타낼 수 있도록 입력해주세요' name="title" value={title} onChange={onChangeTitle}/>
                <Form.Group className="w-full mb-3 flex flex-col" controlId="content">
                    <Form.Label className='font-bold text-xl '>설명</Form.Label>
                    <Form.Label>상품 종류와 특징에 대해 자세히 입력해주세요</Form.Label>
                    <Form.Control as="textarea" rows={3} required name="content" className='w-full resize-none'/>
                </Form.Group>

                <CategoryChoose category={category} setCategory={setCateogry}/>
                
                <InputData title='가격' content="상품에 대한 가격을 입력해주세요" name="price" value={price} onChange={onChangePrice}/>

                <ImgInput imgList={imgList} setImgList={setImgList} wLength={2}/>
                <div className='w-full flex justify-center items-center'>
                    <RegisterBtn onClick={onClick}/>
                </div>
            </Form>
        </div>
    )
}