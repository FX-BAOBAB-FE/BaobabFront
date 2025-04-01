import { useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import ZoomIn from "./ZoomIn";
import RegisterBtn from "../RegisterBtn";
import { useNavigate } from "react-router-dom";

export interface FileItem{
    id:string,
    imageList:File,
}

interface ImgInputRef{
    formRef:React.RefObject<HTMLFormElement>;
    imgList:FileItem[],
    setImgList: React.Dispatch<React.SetStateAction<FileItem[]>>;
}
export default function ImgInput({formRef,imgList,setImgList}:ImgInputRef){
    const [modalShow, setModalShow] = useState({check:false, img:''});
    
    const selectImg= (img:string)=>{
        setModalShow({check:true,img:img});
    }
    const onChangeImg = (e:React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files) return

        const newFile:FileItem[] = Array.from(files).map((file) =>({
            id:v4(),
            imageList:file,
        }))
        console.log(newFile)
        setImgList(prev => [...prev, ...newFile])
    }

    const onDragEnd = (result:any) =>{
        //드래그 실패시
        if(!result.destination) return;

        //result.source => 원래 위치, result.destination => 최종 위치
        
        //[변수]로 줄 경우 배열 하나 값만 받아옴
        const updatedList = Array.from(imgList);
        const [reorder] = updatedList.splice(result.source.index,1)
        updatedList.splice(result.destination.index,0,reorder);
        setImgList(updatedList);
    }

    const onClick = ()=>{}
    return(
        <>
        <p className='font-bold text-xl'>이미지 첨부</p>
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="img-list" direction="horizontal">
                {(provided) => (
                <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-row items-center w-[40rem] h-[14rem] overflow-x-scroll border-2"
                >
                {imgList.map((img, index) => (
                <Draggable key={img.id} draggableId={img.id} index={index}>
                    {(provided) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`${
                    index === 0
                        ? "w-[14rem] h-[10rem] border-2"
                        : "w-[5rem] h-[5rem] border-2"
                    } mx-2 shrink-0`}
                    onClick={() => selectImg(URL.createObjectURL(img.imageList))}
                    >
                        <img
                        src={URL.createObjectURL(img.imageList)}
                        alt="이미지"
                        className="w-full h-full object-cover"
                        />
                            {index === 0 && (
                            <p className="text-center text-sm text-blue-500 font-bold">대표</p>
                            )}
                    </div>                                
                    )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </div>)}
            </Droppable>
        </DragDropContext>
        <ZoomIn show={modalShow} onHide={()=>setModalShow({check:false,img:''})}/>
        <div className='w-full flex flex-col items-center justify-center'>
            <label htmlFor="inputFile" className='w-[5.5rem] h-[2.5rem] flex items-center justify-center border-2 mt-2 mb-4 rounded-lg border-[#9C8ADA]'>이미지 추가</label>
            <RegisterBtn onClick={onClick}/>
        </div>
        <input type="file" name="imgList" accept="image/*" multiple id='inputFile' onChange={onChangeImg} />
        </>
    )
}