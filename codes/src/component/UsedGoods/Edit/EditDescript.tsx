import { useEffect, useRef, useState } from "react";
import RegistInput from "../Regist/RegistInput";
import CategoryChoose from "../Regist/RgistComponent/CategoryChoose";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import ImgInput, { FileItem } from "../Regist/RgistComponent/ImgInput";
import InputData from "../Regist/RgistComponent/InputData";
import RegisterBtn from "../MainGoodsCompoent/RegisterBtn";

export default function EditDescript(){
    const formRef = useRef<HTMLFormElement>(null);
    const data = useLoaderData() as {
        title:string,
        content:string,
        category:string,
        price:string,
        imageList:{imageId:string,imageUrl:string,imageKind:string}[],
    };
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content,setContent] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [imgList, setImgList] = useState<FileItem[]>([]);
    const [deleteImg,setDeleteImg] = useState<string[]>([]);
    useEffect(() => {
        const init = async () => {
          if (data) {
            setTitle(data.title);
            setContent(data.content);
            setCategory(data.category);
            setPrice(data.price);
            setImgList(imgList);
            
          }
        };
      
        init();
      }, [data]);
    
    const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)
    const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>)=> setContent(e.target.value)
    const onChangePrice = (e:React.ChangeEvent<HTMLInputElement>)=> setPrice(e.target.value)
    const handleSubmit = async(e:React.FormEvent)=>{
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
        imgList.forEach((image) => {
            console.log(image.imageUrl)
            formData.append("imageList",image.imageUrl);
        })
        //navigate(-1);

    }
    return(
        <Form ref={formRef} onSubmit={handleSubmit} className="w-[80%] h-full flex mt-4 relative">
            <div className="w-[50%]">
                
            </div>
            <div className="w-[50%] flex flex-col ml-10">
                <InputData title='상품명' content='상품 종류와 특징을 나타낼 수 있도록 입력해주세요' name="title" value={title} onChange={onChangeTitle}/>
                <Form.Group className="mb-3 flex flex-col" controlId="content">
                    <Form.Label className='font-bold text-xl '>설명</Form.Label>
                    <Form.Label>상품 종류와 특징에 대해 자세히 입력해주세요</Form.Label>
                    <Form.Control as="textarea" rows={3} required name="content" className='w-full resize-none' value={content} onChange={onChangeContent}/>
                </Form.Group>
                <InputData title='가격' content="상품에 대한 가격을 입력해주세요" name="price" value={price} onChange={onChangePrice}/>
                <div className="">
                    <CategoryChoose category={category} setCategory={setCategory}/>
                </div>
                <div className="">
                    <RegisterBtn content="등록"/>
                </div>
            </div>
        </Form>
    )
}