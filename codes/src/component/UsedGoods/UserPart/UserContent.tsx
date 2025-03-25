import LikeSee from "./LikeSee";
import eye from './Img/eye.png'
import heart from './Img/heart.png'
import message from './Img/message-text.png'
import { useLoaderData } from "react-router-dom";
import BoxDataObj from "../../Types/BoxDataObj";
export default function UserContext(){
    const data = useLoaderData() as BoxDataObj
    return(
        <div>
            <h2 className="font-bold text-3xl mb-5">{data.title}</h2>
            <div className="mb-5">
                <p>{data.content}</p>
                <br/>
                <p> </p>
            </div>
            <div className="flex">
                <LikeSee img={heart} alt={"하트 이미지"}/>
                <LikeSee img={message} alt={"메세지 이미지"}/>
                <LikeSee img={eye} alt={"본횟수 이미지"}/>
            </div>
        </div>
    )
}