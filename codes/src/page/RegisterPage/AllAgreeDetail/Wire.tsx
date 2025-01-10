import Detail from "../../../component/Register/AgreeDetail/Detail";
import {WireContent} from "./WireContent";

export default function Wire(){
    return(
        <div className="flex w-full h-full justify-center">
            <Detail category={['SKT','KT','LG']} name="통신사 이용약관" contentList={WireContent}/>
        </div>
    )
}