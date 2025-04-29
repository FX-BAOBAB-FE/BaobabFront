import axios from "axios";

const BaseURL = process.env.REACT_APP_API_URL || "https://baobab.run/";
const FormDataInstance = axios.create({
    baseURL:BaseURL,
    timeout:5000,
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6IkJBU0lDX1VTRVIiLCJ1c2VySWQiOiI2N2MyZWQ5OTQxNzZiNjA3OWJiNTkzNWUiLCJleHAiOjE3NDQwMTI1MTJ9.Fi-nYttwy5Ix9feik-iAG1eKfocoa5kaFoZFXOsU5R4"
    },
})

export default FormDataInstance;