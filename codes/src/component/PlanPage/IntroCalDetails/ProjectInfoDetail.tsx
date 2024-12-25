import { PJVal } from "../../Types/PJVal";

export default function ProjectInfoDetail({title,value,color}:PJVal){
    let WidthSize = '';

    if(title === 'Projects'){
        value.length <=2 ? WidthSize='w-24' : WidthSize='w-32'
    }else if(title === 'Object per project'){
        value.length <= 5 ? WidthSize='w-44': WidthSize='w-48' 
    }else{
        value.length <= 5 ? WidthSize='w-28': WidthSize='w-40' 
    }
    return(
    <div>
        <div className={`
            flex justify-around ${WidthSize} }
            `}>
            <p>{title}</p>
            <p style={{color:`${color}`}}>{value}</p>
        </div>
    </div>)
}