import LikeSee from "./LikeSee";
import eye from '../Img/eye.png'
import heart from '../Img/heart.png'
import message from '../Img/message-text.png'
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import BoxDataObj from "../../../Types/BoxDataObj";
import { deletePoster } from "../../../fetch/articleLoad";
import { useState } from "react";
import YesOrNoModal from "../../../Modal/YesOrNoModal";
import { Button } from "react-bootstrap";
export default function UserContext(){
    const data = useLoaderData() as BoxDataObj
    const {urlId} = useParams();
    const navigate = useNavigate();

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
            <div className="flex justify-between items-center mb-2">
                <div className="flex h-[2rem]">
                    <LikeSee img={heart} alt={"하트 이미지"}/>
                    <LikeSee img={message} alt={"메세지 이미지"}/>
                    <LikeSee img={eye} alt={"본횟수 이미지"}/>
                </div>
                <div className="w-[10rem] h-[3rem] flex mb-2">
                    <Button variant='outline-success' className='w-[5rem] mr-3' onClick={() => navigate('edit')}>수정</Button>
                    <YesOrNoModal title="삭제" content="정말 삭제하시겠습니까" color="danger" handleFunc={DeleteFunc}/>
                </div>
            </div>
        </div>
    )
}