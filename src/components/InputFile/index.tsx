import React from 'react';


import {Label, InputField, MsgError} from './styles';
import InputFileModel from "../../core/models/InputFileModel";


const InputFile: React.FC<InputFileModel> = ({label, name, setFieldValue, type = "image/*"}) => {
    return (
        <>
            <Label>{label}</Label>
            <InputField type="file" name={name} accept={type} onChange={(event) => {
                const file = event.currentTarget?.files?.item(0);
                setFieldValue(name, file);
            }}/>
            <MsgError name={name} component="span"/>
        </>
    );
}

export default InputFile;