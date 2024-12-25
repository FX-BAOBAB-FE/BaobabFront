import { onChanged } from "../../Types/onChanged";

export default function MonthYearBtn({onMonth, onYear,dateCheck}:onChanged){
    return(
        <div className="flex w-1/4 h-12 mb-10 justify-center items-center rounded-xl border-2">
            <button className={`
                    w-1/2
                    h-full
                    rounded-l-xl
                    ${dateCheck===1 ? 
                        "bg-[#343A40] text-white hover:bg-[#454B51] active:bg-[#565C61]"
                        
                    :
                        "text-[#343A40] hover:bg-[#EEEEEE] active:bg-[#DDDDDD]"}
                `} onClick={onMonth}>Monthly</button>
            <button className={`
                    w-1/2
                    h-full
                    rounded-r-xl
                    ${dateCheck===2 ? 
                        "bg-[#343A40] text-white hover:bg-[#454B51] active:bg-[#565C61]"
                    :
                        "text-[#343A40] hover:bg-[#EEEEEE] active:bg-[#DDDDDD]"
                    }  
                `} onClick={onYear}>Annual</button>
        </div>
    )
}