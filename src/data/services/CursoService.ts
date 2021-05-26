import api from "../api";
import {BaseResponse} from "../models/Response/BaseResponse";
import {CourseResponse} from "../models/Response/CourseResponse";

export const getAllCourse = () => {
    return api.get<BaseResponse<Array<CourseResponse>>>("courses");
}

export const getCourseBySlug = (slug: string) => {
    return api.get<BaseResponse<CourseResponse>>(`courses/${slug}`);
}
