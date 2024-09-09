import React, { useEffect, useRef, useState } from 'react'
import box1 from '../../Img/7809915.jpg'
import box2 from '../../Img/7844745.jpg'
import dummy from '../../Img/dummy.png'
import Box from './Box';
import MoreBtn from './MoreBtn';
import BoxData from './BoxData'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBoxData,convertBoxData } from '../reduxData/dataProducer';
const BoxList:React.FC<{}> = () =>{
    const data:BoxData[] = Array.from(
        { length: 20 },
        () => new BoxData([dummy,dummy,dummy])
    );
    
    const dispatch = useDispatch();

    useEffect(()=>{
        const convert = data.map(items => convertBoxData(items));
        dispatch(setBoxData(convert));
    },[dispatch,data]);

    const [nowData,setNowData] = useState(data.slice(0,6));
    const num = useRef(0);
    const [btnCheck,setBtnCheck] = useState(false);

    function handlerMoreBtn(){
        if(data.length - nowData.length >=9){
            num.current +=1;
            setNowData(
                (prevData) => 
                    [...prevData, ...data.slice(0+(num.current*9),9+(num.current*9))]
            );
        }else if(data.length - nowData.length < 8 && data.length - nowData.length >0){
            setNowData(
                (prevData) => 
                    [...prevData, ...data.slice(num.current * 9, num.current * 9 + data.length - nowData.length)]
            );
            setBtnCheck(true);
        }
    }

    return(
        <div className='w-full h-full flex justify-center flex-col items-center'>
            <div className='w-[80%] h-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-10 text-center'>
                {nowData.map(
                    (dataObj)=>
                        {return <Link key={dataObj.id} to={`/box/${dataObj.id}`}><Box Src={dataObj.img[0]} /></Link>}
                    )
                }
            </div>
            <MoreBtn handlerMoreBtn={handlerMoreBtn} btnCheck={btnCheck}/>
        </div>
    )
}

export default BoxList;