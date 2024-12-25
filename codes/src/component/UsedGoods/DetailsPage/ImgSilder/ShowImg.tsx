import {useSelector } from "react-redux";
import {useLoaderData, useParams } from "react-router-dom";
import BoxDataObj from "../../../Types/BoxDataObj";
import { forwardRef, useEffect} from "react";
import { boxAction } from "../../../reduxData/box-Slice";

const ShowImg = forwardRef<HTMLDivElement>((props,ref) => {
    const {urlId} = useParams();
    //const storedData = useLoaderData() as string[]
    const findData = useSelector((state: any) =>
        state.box.filter((idx:BoxDataObj)=> idx.id == urlId)
    );
    const data = findData[0]
    const storedData = data.img
    return(
        <div className='w-[65%] h-[40rem] mt-10 flex overflow-hidden rounded-xl'>
            <div ref={ref} className="relative flex">
                {storedData.map((data:any,index:number) => <img key={index} className='w-full h-full ' 
                src={data} alt="not found box" />)}
            </div>
            
        </div>
    )
})

export default ShowImg;

export function Loader(){
    const Img = localStorage.getItem('Imgs')
    console.log(Img);
    if(Img){
        try{
            const data = JSON.parse(Img);
            return data;
        }catch(e){
            alert("이미지가 없음");
            return null;
        }
    }
}