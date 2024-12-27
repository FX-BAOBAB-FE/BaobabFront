import { useEffect, useRef, useState } from 'react';
import Left from './Img/chevron-left.png';
import Right from './Img/chevron-right.png';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BoxDataObj from '../../../Types/BoxDataObj';

export default function SildImg(){
    const ImgRef = useRef<HTMLDivElement>(null);
    const [imgAdjust, setImgAdjust] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);  // 현재 이미지를 추적하는 상태 변수
    const {urlId} = useParams();
    const comparId = parseInt(urlId || '0');
    
    const findData = useSelector((state: any) =>
        state.box.filter((idx:BoxDataObj)=> idx.id == comparId)
    );
    //findData => [[data]] 형식으로 저장되기 때문에 findData[0]으로 둠.
    const data = findData[0]
    let storedData:string[] = data.img

    useEffect(()=>{
        if(!localStorage.getItem('SildImg')){
            localStorage.setItem("SildImg", data)
        }else{
            const a = localStorage.getItem('SildImg')
            console.log(a);
        }
    },[])
    function handlerLeftBtn() {
        if (ImgRef.current && currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            ImgRef.current.style.transform = `translateX(${-ImgRef.current.offsetWidth * newIndex}px)`;
        }
    }

    function handlerRightBtn() {
        if (ImgRef.current && currentIndex < storedData.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            ImgRef.current.style.transform = `translateX(${-ImgRef.current.offsetWidth * newIndex}px)`;
        }
    }

    //동적 페이지크기 확인
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (ImgRef.current) {
                setImgAdjust(ImgRef.current.offsetWidth);
            }
        });
    }, []);

    //동적 페이지 크기에 따라 계속 값 변경
    useEffect(() => {
        if (ImgRef.current) {
            ImgRef.current.style.transform = `translateX(${-ImgRef.current.offsetWidth * currentIndex}px)`;
        }
    }, [imgAdjust]);

    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-around items-center'>
                <button disabled={currentIndex <= 0} onClick={handlerLeftBtn}>
                    <img src={Left} alt='Left cursor' />
                </button>
                <div className='w-[65%] h-[40rem] mt-10 flex overflow-hidden rounded-xl'>
                    <div ref={ImgRef} className="relative flex">
                        {storedData.map((data:any,index:number) => <img key={index} className='w-full h-full ' 
                        src={data} alt="not found box" />)}
                    </div>
                </div>
                <button disabled={currentIndex >= storedData.length - 1} onClick={handlerRightBtn}>
                    <img src={Right} alt='Right cursor' />
                </button>
            </div>
            <div className='flex w-[10rem] h-[0.5rem] justify-center gap-x-1 mt-3'>
                {storedData.map((val, index) =>
                    index === currentIndex ? (
                        <div key={index} className='w-[0.5rem] bg-[#343A40] rounded-full'></div>
                    ) : (
                        <div key={index} className='w-[0.5rem] bg-[#CED4DA] rounded-full'></div>
                    )
                )}
            </div>
        </div>
    );
}
