import React from "react"

const LikeSee:React.FC<{img:string, alt:string}> = (props) =>{
    return(
        <div className="flex mr-3">
            <img className="mr-2 w-5 h-5" src={props.img} alt={props.alt} />
            <p>999</p>
        </div>
    )
}

export default LikeSee