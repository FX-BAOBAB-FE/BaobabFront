import UserImg from './Img/UserImg.png'

export default function ProfileDate(){
    return(
        <div className="w-full h-[4rem] flex justify-between items-center">
            <div className='flex items-center flex-nowrap'>
                <img className='rounded-full w-[4rem] h-[4rem]' src={UserImg} alt="userProfile" />
                <p className=''>Dreamer1004</p>
            </div>
            <p>2024.05.01</p>
        </div>
    )
}