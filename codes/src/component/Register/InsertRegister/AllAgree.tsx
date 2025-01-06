import mark from '../Img/mark.png'
import check from '../Img/check.png'

type Agree = {
    state:boolean,
    handleAgree:() => void,
}

export default function AllAgree({state, handleAgree}:Agree){
    return(
        <div className='h-[3.5rem] flex border-2 rounded-md mt-5'>
            <button onClick={handleAgree} className='flex items-center ml-3 font-bold'>
                <img src={state ? check : mark} className='w-5 h-5'/>
                <span className='text-sm text-[var(--logo-color)] mx-1'>[필수]</span>
                <span>인증 약관 전체동의</span>
            </button>
            {}
        </div>
    )
}