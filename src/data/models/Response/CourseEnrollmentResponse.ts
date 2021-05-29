import {CourseResponse} from "./CourseResponse";

export interface CourseEnrollmentResponse {
    course: CourseResponse,
    status: number,
    id: string

}