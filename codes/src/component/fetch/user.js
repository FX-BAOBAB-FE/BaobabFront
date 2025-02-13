import Instance from "./Instance";


export const registerPost = async (data) => {
    if (!data || Object.keys(data).length === 0) {
        console.error("🚨 회원가입 요청 데이터가 없습니다!", data);
        return;
    }
    
    try {
        console.log("📤 보내는 데이터:", data);
        const response = await Instance.post("/user-service/open-api/register", data);
        console.log("✅ 응답 데이터:", response);
    } catch (error) {
        console.error("🚨 회원가입 실패:", error);
    }
};