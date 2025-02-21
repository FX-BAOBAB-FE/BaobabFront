import { useEffect, useRef, useState } from 'react'
import dummy from '../../Img/dummy.png'
import Box from './Box';
import MoreBtn from './MoreBtn';
import BoxData from './BoxData'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { boxAction } from '../reduxData/box-Slice';
import { InsertPoster } from '../fetch/article';
export default function BoxList(){
    //data부분은 나중에 서버와 연결하여 axios로 대체할거임
    let qwe:number = 0;
    const data:BoxData[] = Array.from(
        { length: 20 },
        () => new BoxData(qwe+=1,[dummy,dummy,dummy])
    );
    const dispatch = useDispatch();
    useEffect(()=>{
        data.map((dat) => {
            dispatch(boxAction.setBoxData(dat.showData()));})
    },[data, dispatch]);

    const [nowData,setNowData] = useState(data.slice(0,6));
    const num = useRef(0);
    const [btnCheck,setBtnCheck] = useState(false);
    const [img,setImg] = useState<File[]>();

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

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            setImg(Array.from(e.target.files)); // 여러 개 선택 가능
        }
      };
    const handleSubmit = async() => {
        await InsertPoster(img);
    }

    return(
        <div className='w-full h-full flex justify-center flex-col items-center'>
            <input type="file" multiple onChange={handleFileChange} />
            <button className='border-2 mt-4' onClick={handleSubmit}>게시물 등록</button>
            <div className='w-[80%] h-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-10 text-center'>
                {nowData.map(
                    (dataObj)=>
                        {return <Link key={dataObj.id} to={`${dataObj.id}`}><Box Src={dataObj.img[0]} /></Link>}
                    )
                }
            </div>
            <MoreBtn handlerMoreBtn={handlerMoreBtn} btnCheck={btnCheck}/>
        </div>
    )
}