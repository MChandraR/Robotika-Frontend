"use client"
import Navbar from "@/components/Navbar";
import { motion } from "motion/react";
import { FaLock, FaUser } from "react-icons/fa";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Auth } from "@/service/api";

const inter = Inter({ subsets: ['latin'] })

export default function Page(){
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const HandleSubmit = async()=>{
        if(username === "" || password ===""){
            alert("Harap isi fiel dengan lengkap !");
            return;
        }
        Auth.Login({email: username, password : password}).then((response)=>{
            if("data" in response){
                alert(response.message);
                return;
            }
            alert(response.status);
        });
    };


    return(
        <div className="min-h-[100dvh] p-10 md:p-24 pt-36 flex item-center">
            <Navbar/>

            <div className="grid grid-cols-1 md:grid-cols-2 self-center gap-8 md:gap-4 md:mt-32">  
                <div className={`${inter.className} self-center justify-self-start text-darkerBlue font-bold text-4xl md:text-[4rem] md:leading-[4.5rem] tracking-wider w-[75%] `}>Selamat Datang di Menu Admin</div>
                <div className="self-center justify-self-center text-primaryYellow flex flex-col gap-2 w-full md:w-2/3">
                    <div className="font-bold tracking-wider text-xl">Username</div>
                    <div className="relative flex gap-4">
                        <FaUser className="absolute self-center left-4"/>
                        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className="pl-10 pr-4 bg-[#F6F6F6] text-[#6E6E6E] border-primaryYellow border-[1px] rounded-full leading-10 w-full" placeholder="Masukkan username"/>
                    </div>
                    <div className="font-bold tracking-wider text-xl pt-4">Password</div>
                    <div className="relative flex gap-4 ">
                        <FaLock className="absolute self-center left-4"/>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="pl-10 pr-4 bg-[#F6F6F6] text-[#6E6E6E] border-primaryYellow border-[1px] rounded-full leading-10 w-full" placeholder="Masukkan username"/>
                    </div>

                    <motion.div onClick={()=>HandleSubmit()} className="mt-8 text-darkerBlue text-center border-primaryYellow bg-primaryYellow border-[1px] font-bold text-xl rounded-full leading-[3rem] w-full">Login</motion.div>
                </div>
            </div>
        </div>
    );
}