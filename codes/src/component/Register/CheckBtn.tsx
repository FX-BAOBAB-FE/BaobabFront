import mark from './Img/mark.png'
import check from './Img/check.png'

type CheckB = {
    need:string
    title:string,
    onClick: () => void,
    state: boolean,
    children:any,
}

export default function CheckBtn({need='',title, onClick, state, children}:CheckB){

    return(
        <div className='mt-10'>
            <div className="flex cursor-pointer">
                <button onClick={onClick} className='flex'>
                    <img className='w-7 h-7' src={state ? check : mark} alt="chk이미지"/>
                    <span className='ml-3 font-bold text-2xl leading-6 flex'>
                        <p className={`${need === '[필수]'? 'text-[#4C6EF5]': 'text-slate-400'} mr-2`}>{need}</p>{title}
                    </span>
                </button>
                <button className='font-thin leading-4 ml-2'>전체&gt;</button>
            </div>
            <div>
                <div className="w-[35rem] h-32 px-2 scrollbar-gutter-stable overflow-scroll
                    border-2 rounded-sm mt-4">
                    {children}
                </div>
            </div>
        </div>
    )
}