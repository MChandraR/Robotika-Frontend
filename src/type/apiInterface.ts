import { PostType } from "./postType"

export interface LoginInterface{
    username? :string,
    password ? :string
}

export interface LoginResponse{
    status? : number,
    message? :string,
    data? : {
        token ? :  string,
        username ? :string
    }
}

export interface PostResponse{
    status? : number,
    message? :string,
    data? : PostType[]
}

export interface AddPost{
    title : string,
    tag? : string,
    content : string,
    date : string,
    image : string,
    category? : string,
    url : string
}

export interface EditPost{
    id : string,
    title? : string,
    tag? : string,
    content? : string,
    date? : string,
    image? : string,
    category? : string,
    url? : string
}