import Detail from "../../../component/Register/AgreeDetail/Detail";
import {CertificationContent} from "./CertificationContent";

export default function Certification(){
    return(
        <div className="flex w-full h-full justify-center">
            <Detail category={['코리아크레딧뷰로','KG모빌리언스','SCI평가정보']} name="인증사 이용약관" contentList={CertificationContent}/>
        </div>
    )
}