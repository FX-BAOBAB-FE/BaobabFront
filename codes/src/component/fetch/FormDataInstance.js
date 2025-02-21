import axios from "axios";

const BaseURL = process.env.REACT_APP_API_URL || "https://baobab.run/";
const FormDataInstance = axios.create({
    baseURL:BaseURL,
    timeout:5000,
    headers: {
        "Content-Type": "multipart/form-data",
    },
})

export default FormDataInstance;