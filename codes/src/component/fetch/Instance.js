import axios from "axios";
// ✅ 환경 변수 설정 (기본 URL)
const BaseURL = process.env.REACT_APP_API_URL || "https://baobab.run/";

// ✅ Axios 인스턴스 생성
const Instance = axios.create({
    baseURL: BaseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

// ✅ 모든 요청에 `result` 값을 자동 추가하는 인터셉터
Instance.interceptors.request.use(
    (config) => {
        // 기존 요청 데이터
        let requestData = config.data || {};
        // ✅ 요청 데이터가 객체인지 확인 (문자열이면 변환)
        if (typeof requestData === "string") {
            try {
                requestData = JSON.parse(requestData);
            } catch (error) {
                console.error("🚨 JSON 파싱 오류:", error);
            }
        }

        // ✅ 모든 요청에 `result` 값을 추가
        config.data = {
            result: {
                resultCode: 0,
                resultMessage: "string",
                resultDescription: "string",
            },
            body: requestData, // 기존 요청 데이터
        };
        return config; // 변경된 요청 데이터 반환
    },
    (error) => {
        console.error("🚨 요청 인터셉터 오류:", error);
        return Promise.reject(error);
    }
);

export default Instance