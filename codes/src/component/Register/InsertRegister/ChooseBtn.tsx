type CBtn={
    List:string[],
    State:string,
    One:() => void,
    Two:() => void,
}
export default function({List,State, One,Two}:CBtn){
    return(
        <div>
            <button onClick={One} className='border-2 w-[8rem] h-[2.5rem] rounded-l-md'>
                {List[0]}
            </button>
            <button onClick={Two} className='border-y-2 border-r-2 w-[8rem] h-[2.5rem] rounded-r-md'>
                {List[1]}
            </button>
        </div>
    )
}