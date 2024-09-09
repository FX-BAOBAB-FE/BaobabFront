import LikeSee from "./LikeSee";
import eye from './Img/eye.png'
import heart from './Img/heart.png'
import message from './Img/message-text.png'
export default function UserContext(){
    return(
        <div>
            <h2 className="font-bold text-3xl mb-5">Title area</h2>
            <div className="mb-5">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sint numquam iusto enim eos ullam eaque vel ad error neque, 
                    minus atque a obcaecati facilis eius reiciendis itaque porro ipsam esse. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae 
                    aliquam quos ea. In autem quaerat corrupti sit fugit, aliquam ipsa dolorem molestias 
                    facere perferendis consequatur! Odit exercitationem ad cupiditate. </p>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sint numquam iusto enim eos ullam eaque vel ad error neque, 
                    minus atque a obcaecati facilis eius reiciendis itaque porro ipsam esse. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae 
                    aliquam quos ea. In autem quaerat corrupti sit fugit, aliquam ipsa dolorem molestias 
                    facere perferendis consequatur! Odit exercitationem ad cupiditate. Lorem ipsum dolor 
                    sit amet consectetur adipisicing elit. Sint numquam iusto enim eos ullam 
                    eaque vel ad error neque, minus atque a obcaecati facilis eius reiciendis 
                    itaque porro ipsam esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit recusandae aliquam quos ea. In autem quaerat corrupti sit fugit, aliquam ipsa 
                    dolorem molestias facere perferendis consequatur! Odit exercitationem ad cupiditate. 
                </p>
            </div>
            <div className="flex">
                <LikeSee img={heart} alt={"하트 이미지"}/>
                <LikeSee img={message} alt={"메세지 이미지"}/>
                <LikeSee img={eye} alt={"본횟수 이미지"}/>
            </div>
        </div>
    )
}