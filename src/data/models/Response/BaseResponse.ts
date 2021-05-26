export interface BaseResponse<T> {
    success: boolean,
    message: string,
    content: T
}