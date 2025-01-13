import Detail from "../../../component/Register/AgreeDetail/Detail";
import { UseContnet } from "./UseContent";
export default function Use(){
    return(
        <div className="flex w-full h-full justify-center">
            <Detail category={['SKT','KT','LG']} name="인증시 개인정보이용" contentList={UseContnet}/>
        </div>
    )
}