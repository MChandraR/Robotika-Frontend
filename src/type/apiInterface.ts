export interface LoginInterface{
    email? :string,
    password ? :string
}

export interface LoginResponse{
    status? : number,
    message? :string,
    data? : {
        token ? :  string
    }
}