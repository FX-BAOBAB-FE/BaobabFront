export interface ImgList{
    imageId:string,
    imageUrl:string
}

interface BoxDataObj{
    id:string
    title:string,
    content:string,
    category:string,
    price:number,
    imageList:ImgList[],
    profileImageUrl:string,
    registeredAt:string,
    status:string,
    nickname:string,
}

export default BoxDataObj;