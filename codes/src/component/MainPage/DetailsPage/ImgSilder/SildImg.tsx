import { useEffect, useRef, useState } from 'react';
import Left from './Img/chevron-left.png';
import Right from './Img/chevron-right.png';
import ShowImg from './ShowImg';
import { useSelector } from 'react-redux';
import BoxDataObj from '../../../Types/BoxDataObj';

const SildImg: React.FC<{}> = () => {
    const ImgRef = useRef<HTMLDivElement>(null);
    const [imgAdjust, setImgAdjust] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);  // 현재 이미지를 추적하는 상태 변수
    const [ImgArr, setImgArr] = useState<string[]>([]);
    
    useEffect(()=>{
        const storage = localStorage.getItem('Imgs');
        if (storage) {
            setImgArr(JSON.parse(storage));
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
        if (ImgRef.current && currentIndex < ImgArr.length - 1) {
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
                <ShowImg ref={ImgRef} />
                <button disabled={currentIndex >= ImgArr.length - 1} onClick={handlerRightBtn}>
                    <img src={Right} alt='Right cursor' />
                </button>
            </div>
            <div className='flex w-[10rem] h-[0.5rem] justify-center gap-x-1 mt-3'>
                {ImgArr.map((val, index) =>
                    index === currentIndex ? (
                        <div key={index} className='w-[0.5rem] bg-[#343A40] rounded-full'></div>
                    ) : (
                        <div key={index} className='w-[0.5rem] bg-[#CED4DA] rounded-full'></div>
                    )
                )}
            </div>
        </div>
    );
};

export default SildImg;
