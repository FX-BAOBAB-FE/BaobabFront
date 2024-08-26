import { useEffect, useRef, useState } from 'react';
import Left from './Img/chevron-left.png'
import Right from './Img/chevron-right.png'
import ShowImg from './ShowImg'
import { useSelector } from 'react-redux';
import BoxDataObj from '../../Types/BoxDataObj';

const SildImg:React.FC<{}> = ()=>{
    const ImgRef = useRef<HTMLDivElement>(null);
    const [imgWidth, setImgWidth] = useState(0);
    const datas = useSelector((state:BoxDataObj[]) => state);
    console.log(datas);
    function handlerLeftBtn(){
        if(ImgRef.current){
            ImgRef.current.style.transform = `translateX(${imgWidth+ImgRef.current.offsetWidth}px)`
            setImgWidth(imgWidth+ImgRef.current.offsetWidth);
        }
    }
    function handlerRightBtn(){
        if(ImgRef.current){
            ImgRef.current.style.transform = `translateX(${imgWidth-ImgRef.current.offsetWidth}px)`
            setImgWidth(imgWidth-ImgRef.current.offsetWidth);
        }
    }


    return(
        <div className='flex justify-around items-center'>
            <button disabled={imgWidth >= 0} onClick={handlerLeftBtn}><img src={Left} alt="Left cursor" /></button>
            <ShowImg datas={datas} ref={ImgRef}/>
            <button onClick={handlerRightBtn}><img src={Right} alt="Right cursor"/></button>
        </div>
    )
}

export default SildImg