import { useSelector } from "react-redux";
import { redirect, useLoaderData, useParams } from "react-router-dom";
import BoxDataObj from "../../../Types/BoxDataObj";
import { forwardRef, useEffect} from "react";

const ShowImg = forwardRef<HTMLDivElement>((props,ref) => {
    const {urlId} = useParams();
    const datas = useSelector((state:BoxDataObj) => state);
    const storedData = useLoaderData() as string[];

    useEffect(()=>{
        //새로고침을 할 경우 datas가 초기화됨.
        if(datas.img){
            //mac에서 control 좌우로 입력할 경우 ImgIndex가 undefined가 되버림.
            localStorage.setItem('Imgs', JSON.stringify(datas.img));
        }
    },[datas,urlId])

    return(
        <div className='w-[65%] h-[40rem] mt-10 flex overflow-hidden rounded-xl'>
            <div ref={ref} className="relative flex">
                {storedData.map((data,index) => <img key={index} className='w-full h-full ' 
                src={data} alt="not found box" />)}
            </div>
            
        </div>
    )
})

export default ShowImg;

export function Loader(){
    const Img = localStorage.getItem('Imgs')
    if(Img){
        try{
            const data = JSON.parse(Img);
            return data;
        }catch(e){
            alert("이미지가 없음");
        }
    }
}