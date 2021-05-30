import React, {useEffect, useState} from 'react';
import {ImageStyle} from './styles';
import notfound from "../../images/notfound.png";
import {ImageModal} from "../../core/models/ImageModal";


const Image: React.FC<ImageModal> = ({url, home = false}) => {

    const [urlPath, setUrlPath] = useState<any>(undefined);
    const [isHome, setIsHome] = useState<boolean>(false);

    const onError = () => {
        setUrlPath(notfound);
    }

    useEffect(() => {
        setUrlPath(url);
        setIsHome(home);
    }, [url, home]);

    return (
        <ImageStyle src={urlPath} onError={onError} isHome={isHome}/>
    );
}

export default Image;