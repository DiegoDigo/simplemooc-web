import {LessonResponse} from "../../data/models/Response/LessonResponse";

export interface TableModel {
    lessons: Array<LessonResponse>,
    isVideos: Function
}