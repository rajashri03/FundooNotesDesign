import axios from "axios";
export const signin =(obj)=>{
    let response=axios.post("https://localhost:44365/api/User/Login",obj)
    return response;
}


export const signup = (obj) => {
    let response = axios.post("https://localhost:44365/api/User/Add",obj)
    return response;
}