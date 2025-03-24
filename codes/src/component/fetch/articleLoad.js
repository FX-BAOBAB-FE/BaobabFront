import FormDataInstance from "./FormDataInstance";

export const AllLoad = async () =>{
    try{
        const data = await FormDataInstance.get('/article-service/api/list');
        return data.data.body
    }catch(e){
        console.log(e);
    }
}