import axios from "axios";

const BaseURL = process.env.REACT_APP_API_URL || "https://baobab.run/";
const FormDataInstance = axios.create({
    baseURL:BaseURL,
    timeout:5000,
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2N2MyZWQ5OTQxNzZiNjA3OWJiNTkzNWUiLCJleHAiOjE3NDI4MDMzNTd9.E-zQFR_caayKCHCxza64nBTD76dSjR1t4EWonnBwkqY"
    },
})

export default FormDataInstance;