import Detail from "../../../component/Register/AgreeDetail/Detail";
import {Identifycontent} from "./IdentifyContent";

export default function Identify(){
    return(
        <div className="flex w-full h-full justify-center">
            <Detail category={['SKT','KT','LG']} name="인증시 고유식별정보처리" contentList={Identifycontent}/>
        </div>
    )
}