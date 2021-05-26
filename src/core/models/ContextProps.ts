export interface ContextProps {
    authenticated: boolean,
    setAuthenticated: (authenticate: boolean) => void;
}