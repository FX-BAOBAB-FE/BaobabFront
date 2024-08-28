import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BoxDataObj from "../../../Types/BoxDataObj";
import { forwardRef, useEffect, useRef, useState } from "react";

const ShowImg = forwardRef<HTMLDivElement>((props,ref) => {
    const {urlId} = useParams();
    const datas = useSelector((state:BoxDataObj[]) => state);
    const saveStorage = localStorage.getItem('Imgs');
    let Img:string[] = [];

    useEffect(()=>{
        const id = parseInt(urlId || '1');
        //새로고침을 할 경우 datas가 초기화됨.
        if(datas.length > 0){
            const ImgIndex = datas[datas.findIndex(data => {
                return data.id === id
            }
            )]
            //mac에서 control 좌우로 입력할 경우 ImgIndex가 undefined가 되버림.
            if(ImgIndex){
                localStorage.setItem('Imgs', JSON.stringify(ImgIndex.img))
            }
        }
    },[Img])

    if(saveStorage){
        Img= JSON.parse(saveStorage);
    }else{
        console.log("Not found!");
    }
    return(
        <div className='w-[65%] h-[40rem] mt-10 2xl:w-[80%] flex overflow-hidden rounded-xl'>
            <div ref={ref} className="relative flex">
                {Img.map((data,index) => <img key={index} className='w-full h-full ' 
                src={data} alt="not found box" />)}
            </div>
            
        </div>
    )
})

export default ShowImg;