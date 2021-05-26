import api from "../api";
import {BaseResponse} from "../models/Response/BaseResponse";
import {TokenResponse} from "../models/Response/TokenResponse";
import {LoginRequest} from "../models/Request/LoginRequest";
import {RegisterRequest} from "../models/Request/RegisterRequest";

export const login = async (login: LoginRequest) =>  {
    return await api.post<BaseResponse<TokenResponse>>("users/login", login);
}

export const create = async (register: RegisterRequest) =>  {
    return await api.post<BaseResponse<TokenResponse>>("users/register", register);
}