import api from "../api";
import {BaseResponse} from "../models/BaseResponse";
import {CourseResponse} from "../models/CourseResponse";

export const getAllCourse = () =>  {
    return api.get<BaseResponse<Array<CourseResponse>>>("courses");
}
