import FormDataInstance from "./FormDataInstance";
export const AllLoad = async () =>{
    try{
        const data = await FormDataInstance.get('/article-service/open-api/list');
        console.log(data.data.body);
        return data.data.body
    }catch(e){
        console.log(e);
    }
}

export const categoryLoad = ()=>{
    
}

export const InsertPoster = async(formData) =>{
    try{
        const response = await FormDataInstance.post("/article-service/api/save",formData)
        console.log(response);
    }catch(e){
        console.log(e);
    }
}

export const deletePoster = async(id) => {
    try{
        const response = await FormDataInstance.delete(`/article-service/api/${id}`);
    }catch(e){
        console.log(e)
    }
}