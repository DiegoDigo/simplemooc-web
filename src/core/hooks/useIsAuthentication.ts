import {useEffect, useState} from "react";
import {getLocalStorage} from "../util/localstorage.util";

const useIsAuthentication = () => {
    const [isAuthentication, setIsAuthentication] = useState(false);

    useEffect(() => {
        let localStorage = getLocalStorage("token");
        if (localStorage) {
            setIsAuthentication(true);
        }
    }, []);

    return isAuthentication;
};

export default useIsAuthentication;