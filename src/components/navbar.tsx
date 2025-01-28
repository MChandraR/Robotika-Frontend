'use client';
import {LogoRobotika} from "@/assets/images/logo";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";

const Navbar = ()=>{
    const [bgColor, setBgColor] = useState("bg-transparent");

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // Mendapatkan posisi scroll
        if (scrollPosition > 200) { // Ganti nilai ini sesuai kebutuhan
        setBgColor("bg-darkerBlue");
        } else {
        setBgColor("bg-transparent");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
           <div className={`fixed z-50 top-0 left-0 flex flex-wrap align-middle justify-around p-2 w-full`}>
                <div className=" w-1/2">
                    <Image src={LogoRobotika} width={150} height={50} alt="logorobotik"/>
                </div>
                <div className="flex text-primaryYellow font-bold flex-row justify-end items-center gap-4 w-1/2">
                    <Link href={"/"}>Beranda</Link>
                    <Link href={"/#divisi"}>Divisi</Link>
                    <Link href={"/program"}>Program</Link>
                    <Link href={"/galeri"}>Galeri</Link>
                    <Link href={"/login"}>Masuk</Link>
                </div>
            </div>
    );
}   

export default Navbar