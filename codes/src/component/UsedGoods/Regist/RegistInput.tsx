import Dropdown from 'react-bootstrap/Dropdown';
import { ENUMLIST } from "../ENUMLIST";
import { DropdownButton } from 'react-bootstrap';

export default function RegistInput(){
    return(
        <div className="w-[70%] flex flex-col justify-center items-start">
            <div className="flex flex-col items-start">
                <p className="text-4xl my-8">상품 등록</p>
                <p className="font-bold text-xl">상품명</p>
                <p className="font-light">상품 종류와 특징을 나타낼 수 있도록 입력해주세요</p>
                <input className="w-[5rem] h-[2rem] border-2"/>
                <p>설명</p>
                <p className="font-light">상품 종류와 특징에 대해 자세히 입력해주세요</p>
                <input className="w-[5rem] h-[2rem] border-2"/>
                <p>카테고리</p>
                <div className="w-32">
                    <DropdownButton id="dropdown-basic-button" title="선택" className="w-full">
                    <Dropdown.Toggle id="dropdown-basic-button" className="w-full">
                        선택
                    </Dropdown.Toggle>
                        {ENUMLIST.map((idx) =>
                            <div className="dropdown-menu grid gap-2 grid-cols-2">
                            {ENUMLIST.map((idx, i) => (
                                <Dropdown.Item key={i} href={`#/action-${i + 1}`}>
                                {idx.value}
                                </Dropdown.Item>
                            ))}
                            </div>
                        )}
                    </DropdownButton>
                </div>
                <div className="w-[50%] h-[8rem] border-2 flex overflow-x-scroll">
                    <div className="flex space-x-2 w-max mt-4">
                        {ENUMLIST.map((idx) => 
                            <button className="w-[6rem] h-[5rem] text-xl">{idx.value}</button>
                        )}
                    </div>
                </div>
                <p>판매가</p>
                <input className="w-[5rem] h-[2rem] border-2"/>
                <p>이미지 첨부</p>
            </div>
        </div>
    )
}