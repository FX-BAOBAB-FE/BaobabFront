import { Link } from "react-router-dom";

export default function RegisterBtn(){
    return(
        <Link to={'/Regist'} className='
            flex justify-center items-center w-[9rem] h-[4rem] bg-[var(--logo-color)] text-xl
            rounded-md text-white hover:bg-[#5F7FF5] active:bg-[#3D6EE3]'
            >
                등록하기
        </Link>
    )
}