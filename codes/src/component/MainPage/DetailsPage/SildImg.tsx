import React, { useEffect, useState } from 'react'
import dummy from '../../../Img/dummy.png'
import Left from './Img/chevron-left.png'
import Right from './Img/chevron-right.png'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import BoxDataObj from '../../Types/BoxDataObj'

const SildImg:React.FC<{}> = ()=>{
    const {urlId} = useParams();
    const [Urldata,setUrlData] = useState<number>();
    const datas = useSelector((state:BoxDataObj[]) => state);
    const [Img,setImg] = useState<string[]>();

    useEffect(()=>{
        const id = parseInt(urlId || '1');
        setUrlData(id);
        if(datas){
            const Imgs = datas[datas.findIndex(data => {
                console.log(data , Urldata);
                return data.id == id
            }
            )].img;
            setImg(Imgs);
        }
    },[urlId])
    console.log(Img);

    return(
        <div className='flex justify-around items-center'>
            <button><img src={Left} alt="Left cursor" /></button>
            <div className='w-[65%] h-[40rem] mt-10 2xl:w-[80%] flex overflow-hidden '>
                {Img ? Img.map((data) => <img className='w-full h-full translate-x-[-10rem]' 
                 src={data} alt="not found box" />) : <p>초비상!!!!!!</p>}
            </div>
            <button><img src={Right} alt="Right cursor"/></button>
        </div>
    )
}

export default SildImg