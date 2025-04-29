import { useState } from "react";

export default function BigImgSelect(){
    const [modalShow, setModalShow] = useState({check:false, img:''});

    const selectImg= (img:string)=>{
        setModalShow({check:true,img:img});
    }
    
    return(
        <div>
        </div>
    )
}