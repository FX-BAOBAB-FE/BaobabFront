import { useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import ZoomInModal from "../../../Modal/ZoomInModal";
import RegisterBtn from "../../MainGoodsCompoent/RegisterBtn";
import { useNavigate } from "react-router-dom";

export interface FileItem{
    id:string,
    imageUrl:File,
    imageKind:string,
}

interface ImgInputRef{
    imgList:FileItem[],
    setImgList: React.Dispatch<React.SetStateAction<FileItem[]>>,
    wLength:number,
    onDelete?:() => {}
}
export default function ImgInput({imgList,setImgList,wLength,onDelete}:ImgInputRef){
    const [modalShow, setModalShow] = useState({check:false, img:''});
    console.log(wLength)
    
    const selectImg= (img:string)=>{
        setModalShow({check:true,img:img});
    }

    const handleDeleteImg = (id: string) => {
        setImgList(prev => prev.filter(img => img.id !== id));
      };

    const onChangeImg = (e:React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files) return
        
        const newFile:FileItem[] = Array.from(files).map((file) =>{
            const fileName = file.name
            const ext = fileName.split('.').pop()?.toLowerCase();
            let kind = ''
            if(ext==='jpg' || ext == "png"){
                kind = 'ARTICLE'
            }else{
                kind = 'AR'
            }
            return { id:v4(), imageUrl:file, imageKind:kind,isNew:true}
        })
        
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
    return(
        <div className="flex flex-col w-full">
            <p className='font-bold text-xl'>이미지 첨부</p>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="img-list" direction="horizontal">
                    {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex flex-row items-center w-full 
                            overflow-x-scroll border-2 min-w-[25rem]"
                        style={{height:`${7*wLength}rem`}}
                        
                        >
                            {imgList.map((img, index) => (
                                <Draggable key={img.id} draggableId={img.id} index={index}>
                                    {(provided) => (
                                        <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`relative border-2 mx-2 shrink-0`}
                                        style={{
                                            width: index === 0 ? `${7* wLength}rem` : `${2.5* wLength}rem`, 
                                            height: index === 0 ? `${5* wLength}rem` : `${2.5* wLength}rem`}}
                                        onClick={() => {
                                            selectImg(URL.createObjectURL(img.imageUrl))
                                        }}
                                        >
                        
                                            <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation(); // 확대 클릭 막기
                                                handleDeleteImg(img.id);
                                            }}
                                            className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full text-xs z-10"
                                            >
                                            ✕
                                            </button>

                                            <img
                                            src={URL.createObjectURL(img.imageUrl)}
                                            alt="이미지"
                                            className="w-full h-full object-cover"
                                            />

                                            {index === 0 && (
                                            <p className="text-center text-sm text-blue-500 font-bold">대표</p>
                                            )}
                                        </div>)}
                                    </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>)}
                </Droppable>
            </DragDropContext>
            <ZoomInModal show={modalShow} onHide={()=>setModalShow({check:false,img:''})}/>
            <div className='w-full flex items-center justify-center'>
                <label 
                htmlFor="inputFile" 
                className='w-[5.5rem] h-[2.5rem] flex items-center justify-center border-2 mt-2 mb-4 rounded-lg border-[#9C8ADA]'>
                    이미지 추가
                </label>
            </div>
            <input type="file" name="imgList" accept="image/*" multiple id='inputFile' onChange={onChangeImg} />
        </div>
    )
}