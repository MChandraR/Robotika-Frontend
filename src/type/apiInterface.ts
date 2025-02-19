import { PostType } from "./postType"
import { MemberType } from "./member"

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

export interface MemberResponse{
    status? : number,
    message? : string,
    data? : MemberType[]
}

export interface MemberAdd{
    order? :number,
    name : string,
    image : string,
    period : number,
    role : string,
    role_type : string,
    description : string,
}

export interface MemberUpdate{
    id : string,
    order? : number,
    name? : string,
    image? : string,
    period? : number,
    role? : string,
    role_type? : string,
    description? : string,
}