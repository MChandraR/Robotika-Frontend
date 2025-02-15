import axios, { AxiosResponse } from "axios";
const baseUrl = "https://bpmp-kepri-backend.my.id/api";
import { 
    LoginInterface,  
    LoginResponse 
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
        handleRequest<LoginResponse>(axios.post(`${baseUrl}/login`, params))
};
