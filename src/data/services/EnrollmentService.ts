import api from "../api";
import {BaseResponse} from "../models/Response/BaseResponse";
import {CourseResponse} from "../models/Response/CourseResponse";
import { EnrollmentResponse } from "../models/Response/EnrollmentResponse";

export const getAllEnrollment = () => {
    return api.get<BaseResponse<Array<CourseResponse>>>("enrollments");
}

export const getEnrollmentByCourse = async (id: string) => {
    return api.post<BaseResponse<EnrollmentResponse>>("enrollments", {courseId: id});
}