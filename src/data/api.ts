import axios from "axios";
import {getLocalStorage, setLocalStorage} from "../core/util/localstorage.util";
import {BaseResponse} from "./models/Response/BaseResponse";
import {TokenResponse} from "./models/Response/TokenResponse";
import { toast } from 'react-toastify';
import { createBrowserHistory } from 'history';

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1",
});

const history = createBrowserHistory();

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
    if (response?.status === 201) {
        toast.success(response?.data?.message)
    }
    return response
}, function (error) {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;
        return api.post<BaseResponse<TokenResponse>>("users/token/refresh",
            {
                "refresh": getLocalStorage("refresh")
            })
            .then(res => {
                if (res.status === 200 && res.data.success) {
                    const {token, refresh} = res.data.content;
                    setLocalStorage("token", token);
                    setLocalStorage("refresh", refresh);

                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + getLocalStorage("token");

                    return axios(originalRequest);
                }
            })
    }

    if (error?.response?.status === 403) {
        toast.warn("Não tem premisão pra isso.")
        history.goBack();
    }

    if (error?.response?.status === 406) {
        toast.error(error?.response?.data.message)
    }

    return Promise.reject(error);
});

export default api;