import React from "react"

type LikeSeeType ={
    img:string,
    alt:string,
}

export default function LikeSee({img,alt}:LikeSeeType){
    return(
        <div className="flex mr-3">
            <img className="mr-2 w-5 h-5" src={img} alt={alt} />
            <p>999</p>
        </div>
    )
}