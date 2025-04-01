
interface EditDeleteType{
    title:string,
    onFunc:() => void
}

export default function EditDeleteBtn({title,onFunc}:EditDeleteType){
    return(
        <>
            <button className="w-[5rem] h-[3rem] border-2 border-[#89AAD9]" onClick={onFunc}>
                {title}
            </button>
        </>
    )
}