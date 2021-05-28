import api from "../api";
import {BaseResponse} from "../models/Response/BaseResponse";
import {LessonResponse} from "../models/Response/LessonResponse";

export const getLesson = async (courseId: string) =>  {
    return await api.get<BaseResponse<Array<LessonResponse>>>(`lessons/${courseId}`);
}
