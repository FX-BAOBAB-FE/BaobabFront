import axios from "axios";

const BaseURL = process.env.REACT_APP_API_URL || "https://baobab.run/";
const FormDataInstance = axios.create({
    baseURL:BaseURL,
    timeout:5000,
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2N2MyZWQ5OTQxNzZiNjA3OWJiNTkzNWUiLCJleHAiOjE3NDM0OTA0NjZ9.FSzooSiVgFeAdlub_J-lO-xTnT5FMNvwNom6E58SDzo"
    },
})

export default FormDataInstance;