import axios from "axios";

const HeaderConfig={
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
}
export const addnote=(obj)=>{
    let response=axios.post("https://localhost:44365/api/Notes/Add",obj,HeaderConfig)
    return response;
}
export const fetchnodes=()=>{
    let response=axios.get("https://localhost:44365/api/Notes/Allnotes",HeaderConfig)
    return response;
}
export const colornote=(d1,d2)=>{
    let response=axios.put(`https://localhost:44365/api/Notes/Color?noteid=${d1}&color=${d2}`,null,HeaderConfig)
    return response;
}
export const trashnote=(d1)=>{
    let response=axios.put(`https://localhost:44365/api/Notes/Trash?noteid=${d1}`,null,HeaderConfig)
    return response;
}
export const deletenote=(d1)=>{
    let response=axios.delete(`https://localhost:44365/api/Notes/Remove?noteid=${d1}`,null,HeaderConfig)
    return response;
}
export const archivenote=(d1)=>{
    let response=axios.put(`https://localhost:44365/api/Notes/Archive?noteid=${d1}`,null,HeaderConfig)
    return response;
}
export const pinnote=(d1)=>{
    let response=axios.put(`https://localhost:44365/api/Notes/Pin?noteid=${d1}`,null,HeaderConfig)
    return response;
}

export const updatenote=(d1,obj)=>{
    let response=axios.put(`https://localhost:44365/api/Notes/Update?noteid=${d1}`,obj,HeaderConfig)
    return response;
}