import React from 'react';
import {IconWrapper, Stars} from './styles';
import {StarsModels} from "../../core/models/StarsModels";


const IconStar: React.FC<StarsModels> = ({stars}) => {
    return (
        <IconWrapper>
            {Array.from({length: stars}, (v, i) => (
                <Stars key={i}/>
            ))}
        </IconWrapper>
    );
}

export default IconStar;