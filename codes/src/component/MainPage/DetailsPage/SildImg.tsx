import { useEffect, useRef, useState } from 'react';
import Left from './Img/chevron-left.png'
import Right from './Img/chevron-right.png'
import ShowImg from './ShowImg'

const SildImg:React.FC<{}> = ()=>{
    const ImgRef = useRef<HTMLDivElement>(null);
    const [imgAdjust,setImgAdjust] = useState(0);
    const [imgWidth, setImgWidth] = useState(0);
    const storage = localStorage.getItem("Imgs");

    const num = useRef(0);
    let ImgArr:string[] = []
    if(storage){
        ImgArr = JSON.parse(storage);
    }
    
    function handlerLeftBtn(){
        if(ImgRef.current){
            num.current -=1;
            ImgRef.current.style.transform = `translateX(${-ImgRef.current.offsetWidth*num.current}px)`
            setImgWidth(-ImgRef.current.offsetWidth*num.current);
        }
    }
    function handlerRightBtn(){
        if(ImgRef.current){
            num.current +=1;
            ImgRef.current.style.transform = `translateX(${-ImgRef.current.offsetWidth * num.current}px)`
            setImgWidth(-ImgRef.current.offsetWidth * num.current)
            
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', () => {
            if(ImgRef.current){
                setImgAdjust(ImgRef.current.offsetWidth);
            }
        })
    },[])

    useEffect(()=>{
        if(ImgRef.current){
            ImgRef.current.style.transform = `translateX(${-ImgRef.current.offsetWidth * num.current}px)`
            
        }

    },[imgAdjust])


    return(
        <div className='flex flex-col items-center'>
            <div className='flex justify-around items-center'>
                <button disabled={num.current <= 0} onClick={handlerLeftBtn}><img src={Left} alt="Left cursor" /></button>
                <ShowImg ref={ImgRef}/>
                <button disabled={num.current >= ImgArr.length-1}  onClick={handlerRightBtn}><img src={Right} alt="Right cursor"/></button>
            </div>
            <div className='flex w-[10rem] h-[0.5rem] justify-center gap-x-1 mt-3'>
                {ImgArr.map((val,index)=> index===num.current ? <div className='w-[0.5rem] bg-[#343A40] rounded-full'></div> : <div className='w-[0.5rem] bg-[#CED4DA] rounded-full'></div> )}
            </div>
        </div>
    )
}

export default SildImg