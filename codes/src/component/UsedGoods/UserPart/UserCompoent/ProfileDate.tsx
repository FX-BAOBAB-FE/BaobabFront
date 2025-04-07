import { useLoaderData } from 'react-router-dom'
import UserImg from './Img/UserImg.png'
import BoxDataObj from '../../../Types/BoxDataObj'

export default function ProfileDate(){
    const data = useLoaderData() as BoxDataObj
    const date = new Date(data.registeredAt);
    console.log(date);
    return(
        <div className="w-full h-[4rem] flex justify-between items-center">
            <div className='flex items-center flex-nowrap'>
                <img className='rounded-full w-[4rem] h-[4rem]' src={data.profileImageUrl} alt="userProfile" />
                <p className='ml-5 font-semibold'>{data.nickname}</p>
            </div>
            <p>{date.toLocaleDateString('ko-KR')}</p>
        </div>
    )
}