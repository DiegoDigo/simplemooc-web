import api from "../api";
import {BaseResponse} from "../models/Response/BaseResponse";
import {LessonResponse} from "../models/Response/LessonResponse";
import {LessonRequest} from "../models/Request/LessonRequest";

export const getLesson = async (courseId: string) =>  {
    return await api.get<BaseResponse<Array<LessonResponse>>>(`lessons/${courseId}`);
}

export const createLesson = async (lesson: LessonRequest) =>  {
    const frm = new FormData()
    frm.append('material', lesson.material);
    frm.append('name', lesson.name);
    frm.append('description', lesson.description);
    frm.append('courseId', lesson.courseId);
    return await api.post<BaseResponse<LessonResponse>>(`lessons`, frm);
}
