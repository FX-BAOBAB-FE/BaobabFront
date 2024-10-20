import ChooseThisPlan from "./ChooseThisPlan";
import ProjectInfoDetail from "./ProjectInfoDetail";

interface details{
    Project:string,
    Object:string,
    Active:string,
    add : string[],
    
}
interface Detail{
    title:string,
    price:string,
    color:string,
    details:details,
}

export default function Card({title, price, details,color}:Detail){
    const {Project,Object,Active,add} = details;
    
    return(
        <div className='w-[30%] h-[35rem] border-2 flex flex-col items-center justify-around'>
            <div>
                <p style={{color:`${color}`}}>{title.toUpperCase()}</p>
                <hr style={{background:`${color}` , width:`${title.length}`, height:'5px'}}/>
            </div>
            <p className="font-bold text-4xl">${price}</p>
            <div className="flex flex-col items-center h-1/3">
                <ProjectInfoDetail title="Projects" value={Project} color={color} />
                <ProjectInfoDetail title="Object per project" value={Object} color={color} />
                <ProjectInfoDetail title="Active user" value={Active} color={color} />
                {add.map((data) => <p style={{color:`${color}`}}>{data}</p>)}
            </div>
            <ChooseThisPlan color={color} keyword={title}/>
        </div>
    )
}