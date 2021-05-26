import axios from "axios";
import {getLocalStorage, setLocalStorage} from "../core/util/localstorage.util";
import {BaseResponse} from "./models/Response/BaseResponse";
import {TokenResponse} from "./models/Response/TokenResponse";

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1",
});


api.interceptors.request.use(
    async config => {
        const token = getLocalStorage("token");
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
    });


api.interceptors.response.use((response) => {
    return response
}, function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;
        return api.post<BaseResponse<TokenResponse>>("users/token/refresh",
            {
                "refresh": getLocalStorage("refresh")
            })
            .then(res => {
                if (res.status === 200 && res.data.success) {
                    const { token, refresh } = res.data.content;
                    setLocalStorage("token", token);
                    setLocalStorage("refresh", refresh);

                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + getLocalStorage("token");

                    return axios(originalRequest);
                }
            })
    }
    return Promise.reject(error);
});

export default api;