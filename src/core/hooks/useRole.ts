import {useEffect, useState} from "react";
import {getLocalStorage} from "../util/localstorage.util";
import {decode} from "jsonwebtoken";
import {Token} from "../models/Token";

const useRole = () => {
    const [role, setRole] = useState("");

    useEffect(() => {
        let localStorage = getLocalStorage("token");
        if (localStorage) {
            const token =decode(localStorage) as Token;
            setRole(token.role);
        }
    }, []);

    return role;
};

export default useRole;