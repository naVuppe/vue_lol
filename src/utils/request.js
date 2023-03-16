import axios from "axios";

const request = axios.create({
    baseURL: 'https://dog.ceo/api/', // url = base url + request url
    // 超时时间 单位是ms，这里设置了3s的超时时间
    timeout: 3000,
});

// Add a request interceptor
request.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        return config;
    }
);

// Add a response interceptor
request.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response;
    }
);

export default request;