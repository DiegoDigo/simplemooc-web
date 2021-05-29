import api from "../api";
import {BaseResponse} from "../models/Response/BaseResponse";
import {CourseResponse} from "../models/Response/CourseResponse";
import {CourseRequest} from "../models/Request/CourseRequest";

export const getAllCourse = () => {
    return api.get<BaseResponse<Array<CourseResponse>>>("courses");
}

export const getCourseBySlug = (slug: string) => {
    return api.get<BaseResponse<CourseResponse>>(`courses/${slug}`);
}

export const postCourse = (course: CourseRequest) => {

    const frm = new FormData()
    frm.append('image', course.image);
    frm.append('description', course.description);
    frm.append('name', course.name);

    return api.post<BaseResponse<CourseResponse>>(`courses/`, frm);
}
