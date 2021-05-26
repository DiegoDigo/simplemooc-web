import React from 'react';
import IInput from '../../core/models/InputModel';

import {Label, InputField, MsgError} from './styles';

const Input: React.FC<IInput> = ({label, name, placeholder, type = "text", changeValue, isValid,}) => {
    return (
        <>
            <Label>{label}</Label>
            <InputField isvalid={isValid?.toString()} placeholder={placeholder} type={type} name={name}/>
            <MsgError name={name} component="span"/>
        </>
    );
}

export default Input;