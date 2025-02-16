import axios, { AxiosResponse } from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const storageUrl = "https://robotika.s3.ap-southeast-2.amazonaws.com";

import { 
    LoginInterface,  
    LoginResponse,
    PostResponse,
    AddPost
} from "@/type/apiInterface";

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
    getPost : () : Promise<PostResponse> =>
        handleRequest<PostResponse>(axios.get(`${baseUrl}/post`)),

    addPost: (param : AddPost) : Promise<PostResponse> => 
        handleRequest<PostResponse>(axios.post(`${baseUrl}/post`, param))
}
