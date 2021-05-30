import {ChangeEventHandler} from "react";

export default interface IInput {
    label: string,
    name: string,
    placeholder?: string,
    type?: string,
    changeValue?: ChangeEventHandler
    isValid?: boolean
}