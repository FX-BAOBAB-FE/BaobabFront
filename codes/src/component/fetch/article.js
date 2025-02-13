import Instance from "./Instance";


export const registerPost = async () => {
    try {
        console.log("📤 보내는 데이터:", data);
        const response = await Instance.post("/article-service/api/save", {
            title:'asdasd',
            content:'dasdas',
            category:'FURNITURE',
            price:1000,
            imageList:{
                imge
            }
        });
        console.log("✅ 응답 데이터:", response);
    } catch (error) {
        console.error("🚨 회원가입 실패:", error);
    }
};