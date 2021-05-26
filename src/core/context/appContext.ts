import {createContext, useContext} from "react";
import {ContextProps} from "../models/ContextProps";

export const contextDefaultValues: ContextProps = {
    authenticated: false,
    setAuthenticated: () => {}
};

export const AppContext = createContext<ContextProps>(contextDefaultValues);
export const useAppContext = () => useContext(AppContext);