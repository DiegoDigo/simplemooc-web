export interface Token {
    id: string
    active: boolean,
    role: string,
    nbf: number,
    exp: number,
    iat: number
}