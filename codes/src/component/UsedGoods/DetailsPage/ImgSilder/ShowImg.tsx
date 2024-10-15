import { useSelector } from "react-redux";
import {useLoaderData, useParams } from "react-router-dom";
import BoxDataObj from "../../../Types/BoxDataObj";
import { forwardRef, useEffect} from "react";

const ShowImg = forwardRef<HTMLDivElement>((props,ref) => {
    const {urlId} = useParams();
    let datas = useSelector((state: { box: BoxDataObj[] }) => {
        return state.box
    });
    console.log(datas)
    const storedData = useLoaderData() as string[];
    console.log(storedData);

    useEffect(() => {
        if(urlId){
            const currentData = datas.find(data => data.id === +urlId); // id로 데이터를 찾음
            if (currentData && currentData.img) {
                localStorage.setItem('Imgs', JSON.stringify(currentData.img));
            }
        }
    }, [datas, urlId]);

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