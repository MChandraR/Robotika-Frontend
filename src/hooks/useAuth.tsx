"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const setCookies = (name:string , value : string, expires : number)=>{
    if (typeof window === "undefined") return null;
    const exp = new Date() ;
    exp.setTime(exp.getTime() + expires);
    document.cookie = `${name}=${value};expires=${exp.toUTCString()};path=/`;
}

export const getCookies = (key : string) : string|null=>{
    if (typeof window === "undefined") return null;
    const cookies = document.cookie.split(";");
    const cookie = cookies.find(row => row.startsWith(`${key}=`));
    return cookie?.split("=")[1] ?? null;
}

export const useAuth = ()=>{
    const router = useRouter();

    const [token, setToken] = useState<string|null>(getCookies("token"));

    useEffect(()=>{
        const cookie = getCookies("token");
        if(cookie)setToken(cookie);
        else router.push("/login");
    },[router]);

    useEffect(()=>{
        if(token) setCookies("token", token, 3600000);
        else setCookies("token", "", 3600000);
    },[token]);
    

    return [token, setToken];
}