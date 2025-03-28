import { useEffect, useRef, useState } from 'react'
import dummy from '../../Img/dummy.png'
import Box from './Box';
import MoreBtn from './MoreBtn';
import { Link, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Category from './Category';
import RegisterBtn from './RegisterBtn';
import { AllLoad } from '../fetch/articleLoad';
import BoxDataObj from '../Types/BoxDataObj';
export default function BoxList(){
    const data = useLoaderData() as BoxDataObj[];
    const [nowData,setNowData] = useState<BoxDataObj[]>([]);

    useEffect(()=>{
        if(data.length > 0){
            setNowData(data.slice(0,6));
        }
    },[data])

    const num = useRef(0);
    const [btnCheck,setBtnCheck] = useState(false);

    function handlerMoreBtn(){
        if(data.length - nowData.length >=9){
            num.current +=1;
            setNowData(
                (prevData) => 
                    [...prevData, ...data.slice(0+(num.current*9),9+(num.current*9))]
            );
        }else if(data.length - nowData.length < 8 && data.length - nowData.length >0){
            setNowData(
                (prevData) => 
                    [...prevData, ...data.slice(num.current * 9, num.current * 9 + data.length - nowData.length)]
            );
            setBtnCheck(true);
        }
    }


    return(
        <div className='w-full h-full flex justify-center flex-col items-center'>
            <Category/>
            <RegisterBtn/>
            {/* <div className='w-[80%] h-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-10 text-center'>
                {data.map((dataObj) => 
                    <Link key={dataObj.id} to={`${dataObj.id}`}>
                        <Box imgs={dataObj.imageList} title={dataObj.title} content={dataObj.content}/>
                    </Link>)}
            </div> */}
            {/* <MoreBtn handlerMoreBtn={handlerMoreBtn} btnCheck={btnCheck}/> */}
            
        </div>
    )
}

export const Loader = async()=>{
    // return await AllLoad()
    const data:BoxDataObj = {
        "id": "67c701896ea977024a7d60ba",
        "title": "iPhone 15 pro ",
        "content": "아이폰 팔아여",
        "category": "DIGITAL_DEVICES",
        "price": 1500000,
        "registeredAt": "2025-03-04T13:35:05.196",
        "status": "ON_SALE",
        "imageList": [
            {
                "imageId": "nx3X2lzjMmsFumg0iaPoizhHT+eOvNn0EOuASvKgHCOKpuvFvQZP2W7KOpiww1P/LKyL3N4baXeXhU0ksWSUUg==",
                "imageUrl": "https://baobab.run/article-service/open-api/images/53edc0be-e824-4b38-8c10-7556e6b4f557.png"
            }
        ],
        "nickname": "exampl",
        "profileImageUrl": "https://baobab.run/user-service/open-api/images/5ff8b365-aa0c-42a6-a7cf-ea1901b65232.png"
    }
    return data
}