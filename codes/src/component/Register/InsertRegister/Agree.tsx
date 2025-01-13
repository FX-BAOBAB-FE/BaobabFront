import unChecked from './Img/unChecked.png'
import checked from './Img/checked.png'
import arrow_right from './Img/arrow_right.png'
import { Link } from 'react-router-dom'
type AgreeType ={
    state:boolean,
    name:string,
    href:string,
    onClick:() => void
}

export default function Agree({state,name,href, onClick}:AgreeType){
    return(
        <div className='flex items-center'>
            <button className='flex items-center ml-3' onClick={onClick}>
                <img src={state ? checked : unChecked} className='w-5 h-5'/>
                <p className='ml-2'>{name}</p>
            </button>
            <Link to={href} target="_blank">
                <img src={arrow_right} className="w-4 h-4 ml-1" />
            </Link>
        </div>
    )
}