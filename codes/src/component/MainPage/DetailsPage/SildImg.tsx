import { useEffect, useRef, useState } from 'react';
import Left from './Img/chevron-left.png'
import Right from './Img/chevron-right.png'
import ShowImg from './ShowImg'

const SildImg:React.FC<{}> = ()=>{
    const ImgRef = useRef<HTMLImageElement>(null);
    const [innerWidth,setInnerWidth] = useState(window.innerWidth);
    const [totalWidth,setTotalWidth] = useState(innerWidth);
    function handlerLeftBtn(){
        if(ImgRef.current){
            setTotalWidth(innerWidth+innerWidth)
            console.log(totalWidth);
            ImgRef.current.style.transform = `translateX(${totalWidth}px)`
        }
    }
    function handlerRightBtn(){
        if(ImgRef.current){
            console.log("RIGHT");
            setTotalWidth(innerWidth-innerWidth)
            console.log(totalWidth);
            ImgRef.current.style.transform = `translateX(${totalWidth}px)`
            
        }
    }
    
    console.log(innerWidth);
    useEffect(()=>{
        window.addEventListener('resize',()=> setInnerWidth(window.innerWidth));
    },[])

    return(
        <div className='flex justify-around items-center'>
            <button onClick={handlerLeftBtn}><img src={Left} alt="Left cursor" /></button>
            <ShowImg ref={ImgRef}/>
            <button onClick={handlerRightBtn}><img src={Right} alt="Right cursor"/></button>
        </div>
    )
}

export default SildImg