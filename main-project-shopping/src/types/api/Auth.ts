export interface RegisterResponseType {
    jwt: string;
    user:User
}
export interface User {
    id: string;
    username: string;
    email: string;
    provider: string;
    confirm:boolean
    blocked: boolean
}