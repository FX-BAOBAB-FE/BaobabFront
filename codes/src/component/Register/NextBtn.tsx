import { Link } from "react-router-dom";

type BtnType = {
    path:string,
    state:boolean
}

export default function NextBtn({path,state}:BtnType){
    return(
        <Link to={path} className="w-[35rem] h-32">
            <button className={
            `w-[35rem] h-14 border-2 bg-[#4C6EF5]
            disabled:bg-slate-400
            fixed bottom-4 rounded-md
            text-white font-bold text-xl
            active:bg-[#3B5DE4]
            `}
            disabled={state ? false : true}
            onClick={() => {}}
            >
                다음
            </button>
        </Link>
    )
}