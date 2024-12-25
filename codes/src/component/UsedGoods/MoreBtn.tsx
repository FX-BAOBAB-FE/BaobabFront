import {MoreBtnProps} from '../Types/MoreBtnProps'

//더보기 버튼
export default function MoreBtn({ handlerMoreBtn, btnCheck }: MoreBtnProps) {
    return (
        <div>
            {!btnCheck &&
                <div className='mt-10 flex justify-center items-center rounded-2xl border-[#4C6EF5] border'>
                    <button className='w-52 h-12 text-[#4C6EF5]'
                        onClick={handlerMoreBtn}>More</button>
                </div>}
        </div>
    )
}