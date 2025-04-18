import { useEffect, useRef, useState } from 'react'
import dummy from '../../Img/dummy.png'
import Box from './MainGoodsCompoent/Box';
import MoreBtn from './MoreBtn';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Category from './MainGoodsCompoent/Category';
import RegisterBtn from './MainGoodsCompoent/RegisterBtn';
import { AllLoad, categoryLoad } from '../fetch/articleLoad';
import BoxDataObj from '../Types/BoxDataObj';
export default function BoxList(){
    const data = useLoaderData() as BoxDataObj[];
    const [nowData,setNowData] = useState<BoxDataObj[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    const navigate = useNavigate();
    const move = ()=>{
        setTimeout(()=>{
            navigate('/UsedGoodsDeal/Regist')
        },2000)
    }

    useEffect(()=>{
        if(data.length > 0){
            setNowData(data.slice(0,6));
        }
    },[data])

    useEffect(() =>{
        const fetchData = async() => {
            const params = new URLSearchParams()
            for(const i of selected){params.append('category',i)}
            const data = await categoryLoad(params.toString())
            console.log(data);
            setNowData(data);
            
        }

        fetchData()
    },[selected])


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
            <Category selected={selected} setSelected={setSelected}/>
            <RegisterBtn onClick={move}/>
            <div className='w-[80%] h-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-10 text-center overflow-hidden'>
                {nowData.map((dataObj) => 
                    <Link key={dataObj.id} to={`${dataObj.id}`}>
                        <Box imgs={dataObj.imageList} title={dataObj.title} content={dataObj.content}/>
                    </Link>)}
            </div>
            {/* <MoreBtn handlerMoreBtn={handlerMoreBtn} btnCheck={btnCheck}/> */}
            
        </div>
    )
}

export const Loader = async()=>{
    return await AllLoad()
}