import CollectDetail from "../../../component/Register/AgreeDetail/CollectDetail";
import { CollectContent } from "./CollectContent";

export default function Collect(){
    return(
        <div className="flex w-full h-full justify-center">
            <CollectDetail content={CollectContent}/>
        </div>
    )
}