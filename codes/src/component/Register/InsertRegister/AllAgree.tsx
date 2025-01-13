import mark from '../Img/mark.png'
import check from '../Img/check.png'
import arrow_down from './Img/arrow_down.png'
import arrow_up from './Img/arrow_up.png'
type Agree = {
    stateOpen:boolean,
    stateAgree:boolean,
    handleAgree:() => void,
    handleIsOpen:() => void,
}

export default function AllAgree({stateOpen,stateAgree, handleAgree, handleIsOpen}:Agree){
    return(
        <div className={`h-[3.5rem] flex justify-between border-2 border-b-[1px] mt-5 
            ${stateOpen ? 'rounded-t-md' :'rounded-md'}`}>
            <button onClick={handleAgree} className='flex items-center ml-3 font-bold'>
                <img src={stateAgree ? check : mark} className='w-5 h-5'/>
                <span className='text-sm text-[var(--logo-color)] mx-1'>[필수]</span>
                <span>인증 약관 전체동의</span>
            </button>
            <button onClick={handleIsOpen}>
                <img src={stateOpen ? arrow_up : arrow_down} className='w-5 h-5 mr-7'/>
            </button>
        </div>
    )
}