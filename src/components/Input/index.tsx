import React from 'react';
import IInput from '../../interfaces/iinput';

import { Label, InputField, MsgError } from './styles';

const Input: React.FC<IInput> = ({ label, name, placeholder, type = "text", changeValue, isValid, step }) => {
    return (
        <>
            <Label>{label}</Label>
        <InputField isvalid={isValid?.toString()} placeholder={placeholder} type={type} name={name}  step={step} />
    <MsgError name={name} component="span" />
        </>
);
}

export default Input;