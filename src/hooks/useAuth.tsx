"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const setCookies = (name:string , value : string, expires : number)=>{
    const exp = new Date() ;
    exp.setTime(exp.getTime() + expires);
    document.cookie = `${name}=${value};expires=${exp.toUTCString()};path=/`;
}

export const getCookies = (key: string): string | null => {
    if (typeof document === "undefined") return null; // 🔹 Hindari error di SSR
    const cookies = document.cookie.split(";").map(c => c.trim()); // 🔹 Trim spasi ekstra
    const cookie = cookies.find(row => row.startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
};


export const useAuth = ()=>{
    const router = useRouter();
    const [token, setToken] = useState<string|null>(null);

    useEffect(()=>{
        const cookie = getCookies("token");
        if(cookie && cookie !== "")setToken(cookie);
        else router.replace("/login");
    },[router]);

    useEffect(()=>{
        if(token) setCookies("token", token, 3600000);
    },[token]);
    

    return [token, setToken] as const;
}