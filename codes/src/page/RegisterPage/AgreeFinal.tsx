import { useEffect, useState } from "react"
import { contnet } from "./content"
import { Link } from "react-router-dom";
import CheckBtn from "../../component/Register/CheckBtn";
import NextBtn from "../../component/Register/NextBtn";

export default function AgreeFinal(){
    const [allChk,setAllChk] = useState(false);
    const [chk1,setChk1] = useState(false);
    const [chk2,setChk2] = useState(false);
    const [chk3,setChk3] = useState(false);
    const [chk4,setChk4] = useState(false);
    const [chk5,setChk5] = useState(false);

    function onAllChk() {
        const bool = !allChk;
        setAllChk(bool);
        setChk1(bool);
        setChk2(bool);
        setChk3(bool);
        setChk4(bool);
        setChk5(bool);
    }

    // 각 체크박스 상태를 개별적으로 업데이트
    function onChk1() {
    setChk1((prev) => !prev);
    }

    function onChk2() {
    setChk2((prev) => !prev);
    }

    function onChk3() {
    setChk3((prev) => !prev);
    }

    function onChk4() {
    setChk4((prev) => !prev);
    }

    function onChk5() {
    setChk5((prev) => !prev);
    }
    
    useEffect(() => {
        const allChecked = chk1 && chk2 && chk3 && chk4 && chk5;
        setAllChk(allChecked);
    }, [chk1, chk2, chk3, chk4, chk5]); // 개별 상태 변경 시 트리거
    
    return(
        <div className="flex flex-col bg w-full h-[165%] items-center">
            <CheckBtn onClick={onAllChk} state={allChk} title="전체 동의하기" need="">
                실명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택), 이벤트・혜택 정보 수신(선택) 동의를 포함합니다.
            </CheckBtn>

            <CheckBtn onClick={onChk1} state={chk1} title="BAOBAB 이용약관" need={"[필수]"}>
                {contnet.Terms_of_Use}
            </CheckBtn>

            <CheckBtn onClick={onChk2} state={chk2} title="개인정보 수집 및 이용" need={"[필수]"}>
                {contnet.Personal_information}
            </CheckBtn>

            <CheckBtn onClick={onChk3} state={chk3} title="실명 인증된 아이디로 가입" need={"[선택]"}>
                {contnet.verified}
            </CheckBtn>

            <CheckBtn onClick={onChk4} state={chk4} title="위치기반 서비스 이용 약관" need={"[선택]"}>
                {contnet.location}
            </CheckBtn>

            <CheckBtn onClick={onChk5} state={chk5} title="개인정보 수집 및 이용" need={"[선택]"}>
                {contnet.info_use}
            </CheckBtn>
            <NextBtn state={chk1 && chk2} path="register"/>
        </div>
    )
}