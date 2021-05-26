import api from "../api";
import {BaseResponse} from "../models/Response/BaseResponse";
import {CourseResponse} from "../models/Response/CourseResponse";

export const getAllCourse = () =>  {
    return api.get<BaseResponse<Array<CourseResponse>>>("courses");
}
