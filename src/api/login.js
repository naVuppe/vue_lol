import axios from "axios";

const loginrequest = axios.create({
    baseURL: "http://localhost:10500/api/",
    timeout: 5000
});

export const login = (data)=> {
    return loginrequest({
        url: "/login",
        // 先用get请求，后面再改成post
        method: "post",
        data
    }); 
};