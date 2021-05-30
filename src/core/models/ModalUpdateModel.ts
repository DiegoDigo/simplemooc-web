import {CourseResponse} from "../../data/models/Response/CourseResponse";

export default interface ModalUpdateModel{
    show: boolean,
    course: CourseResponse,
    setAdd: Function
}