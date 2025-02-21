import FormDataInstance from "./FormDataInstance";

export const InsertPoster = async (img) => {
    try {
        const formData = new FormData();
        formData.append("title",'asdasdasd');
        formData.append("content",'asdasdasd');
        formData.append("category",'FURNITURE');
        formData.append("price",'1000');
        img.forEach((image) => {
            formData.append("imageList",image);
        })
        for (let pair of formData.entries()) {
            console.log(`📤 ${pair[0]}:`, pair[1]);
        }
        const response = await FormDataInstance.post("/article-service/api/save",formData,{
            headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2N2FjOTFiYjRmMjgwOTMwNjdhYzdiYWQiLCJleHAiOjE3Mzk0NDEwNzR9.iNRhyUXwI3BEy-DQ62_s23Q3T-r8gfEyz2JMFQYcngM`
            }
        })
        console.log("✅ 응답 데이터:", response);
    } catch (error) {
        console.error("🚨 등록 실패:", error);
    }
};