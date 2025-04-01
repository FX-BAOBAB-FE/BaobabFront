import LikeSee from "./LikeSee";
import eye from './Img/eye.png'
import heart from './Img/heart.png'
import message from './Img/message-text.png'
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import BoxDataObj from "../../Types/BoxDataObj";
import { deletePoster } from "../../fetch/articleLoad";
import { useState } from "react";
import EditDeleteBtn from "./EditDeleteBtn";
import YesOrNoModal from "../../Modal/YesOrNoModal";
export default function UserContext(){
    const data = useLoaderData() as BoxDataObj
    const {urlId} = useParams();
    const navigate = useNavigate();
    console.log(urlId);

    const DeleteFunc = async() => {
        await deletePoster(urlId);
        alert('삭제되었습니다!')
        navigate(-1)
    }
    return(
        <div className="h-full flex flex-col justify-between">
            <h2 className="font-bold text-3xl mb-5">{data.title}</h2>
            <div className="mb-5">
                <p>{data.content}</p>
                <br/>
                <p> </p>
            </div>
            <div className="flex justify-between">
                <div className="flex">
                    <LikeSee img={heart} alt={"하트 이미지"}/>
                    <LikeSee img={message} alt={"메세지 이미지"}/>
                    <LikeSee img={eye} alt={"본횟수 이미지"}/>
                </div>
                <div className="w-[5rem] h-[3rem]">
                    <YesOrNoModal title="삭제" content="정말 삭제하시겠습니까" handleFunc={DeleteFunc}/>
                </div>
            </div>
        </div>
    )
}