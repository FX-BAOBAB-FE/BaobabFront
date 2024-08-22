import React, { useRef, useState } from 'react'
import Dummy from '../../Img/dummy.png'
import Box from './Box';
import MoreBtn from './MoreBtn';
import BoxData from './BoxData'
const BoxList:React.FC<{}> = () =>{
    const data = Array.from({ length: 20 }, () => new BoxData('path/to/image'));
    const [nowData,setNowData] = useState(data.slice(0,6));
    const num = useRef(0);
    const [btnCheck,setBtnCheck] = useState(false);

    function handlerMoreBtn(){
        if(data.length - nowData.length >=9){
            num.current +=1;
            console.log(data.slice(0+(num.current*9),9+(num.current*9)))
            console.log(nowData);
            setNowData((prevData) => [...prevData, ...data.slice(0+(num.current*9),9+(num.current*9))]);
        }else if(data.length - nowData.length < 8 && data.length - nowData.length >0){
            setNowData((prevData) => [...prevData, ...data.slice(num.current * 9, num.current * 9 + data.length - nowData.length)]);
            setBtnCheck(true);
        }
    }

    return(
        <div className='w-full h-full flex justify-center flex-col items-center'>
            <div className='w-[80%] h-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-10 text-center'>
                {nowData.map((dataObj)=>{return <Box />})}
            </div>
            <MoreBtn handlerMoreBtn={handlerMoreBtn} btnCheck={btnCheck}/>
        </div>
    )
}

export default BoxList;