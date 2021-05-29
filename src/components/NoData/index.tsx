import React from 'react';

import {NoDataText} from './styels';
import {NoDataModel} from "../../core/models/NoDataModel";

const NoData: React.FC<NoDataModel> = ({msg}) => {

    return (
        <NoDataText>{msg}</NoDataText>
    );

}

export default NoData;