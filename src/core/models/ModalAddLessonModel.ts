import {CourseResponse} from "../../data/models/Response/CourseResponse";

export default interface ModalAddLessonModel {
    course: CourseResponse,
    show: boolean
}