import axios from "axios"
export const axiosInstance = axios.create({
    timeout : 15000 ,
    headers : {
        "Content-Type" : "application/json"
    },
    baseURL : "http://localhost:3000",
    withCredentials : true ,

    
})

