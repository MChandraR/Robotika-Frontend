import axios, { AxiosResponse } from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const storageUrl = "https://robotika.s3.ap-southeast-2.amazonaws.com";
export const postStorageUrl = `${storageUrl}/public/post`;

import { 
    LoginInterface,  
    LoginResponse,
    PostResponse,
    AddPost,
    EditPost
} from "@/type/apiInterface";
import { getCookies } from "@/hooks/useAuth";


const axiosConfig = {
    headers: {
        Authorization : "Bearer " + getCookies("token")
    }
};
const handleRequest = async <T>(request: Promise<AxiosResponse<T>>): Promise<T|{status : number, message : string}>=> {
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                status: error.response?.status || 500,
                message: error.response?.data?.message || error.message || "Unknown error",
            };
        }

        return {
            status: 500,
            message: "Unexpected error occurred",
        };
    }
};


export const Auth = {
    Login: (params: LoginInterface): Promise<LoginResponse> => 
        handleRequest<LoginResponse>(axios.post(`${baseUrl}/auth`, params))
};

export const Post = {
    getPost : (param? : {id? : string|null, filter?:string , limit? : number, order?: "ASC"|"DESC"}) : Promise<PostResponse> =>
        handleRequest<PostResponse>(
            axios.get(`${baseUrl}/post?`+
                `${param?.id? "id="+param?.id : ""}`+
                `${param?.filter? "filter="+param?.filter : ""}`+
                `${param?.order? "order="+param?.order : ""}`+
                `${param?.limit? "limit="+param?.limit : ""}`
            )
        ),

    addPost: (param : AddPost) : Promise<PostResponse> => 
        handleRequest<PostResponse>(axios.post(`${baseUrl}/post`, param, axiosConfig )),

    updatePost : (param : EditPost) : Promise<PostResponse> => 
        handleRequest<PostResponse>(axios.put(`${baseUrl}/post`, param ,  axiosConfig)),

    deletePost : (param : {id : string}) : Promise<PostResponse> => 
        handleRequest<PostResponse>(axios.delete(`${baseUrl}/post?id=${param.id}`, axiosConfig))
}
