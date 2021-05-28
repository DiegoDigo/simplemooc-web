export interface ContextProps {
    authenticated: boolean,
    setAuthenticated: (authenticate: boolean) => void;
    role: string,
    setRole: (role: string) => void;
}