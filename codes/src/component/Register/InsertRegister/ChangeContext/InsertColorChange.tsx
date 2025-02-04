type InsertInputType = {
    children:any,
    state:boolean|undefined,
    bool:boolean
}

export default function InsertColorChange({state,bool,children}:InsertInputType){
    return(
        <div className={`h-[4rem] w-full flex items-center border-2 my-1
            ${state ?'border-[var(--logo-color)] ': bool || state !==undefined ? 'border-red-500' : 'border-[#dfdfdf]'}
          `}>
            {children}
        </div>
    )
}