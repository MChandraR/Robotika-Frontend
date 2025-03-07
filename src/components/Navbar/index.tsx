'use client';
import {LogoRobotika} from "@/assets/images/logo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState,useEffect } from "react";
import ScrollToTop from "../Utils/ScrollToTop";
const Navbar = ()=>{
    const route = usePathname();
    const [bgColor, setBgColor] = useState(route == "/" ? "bg-transparent" : "bg-darkerBlue");
    const minScroll = route == "/" ? 200 : 0;
  
    const handleScroll = () => {
        const scrollPosition = window.scrollY; // Mendapatkan posisi scroll
        if (scrollPosition > minScroll) { // Ganti nilai ini sesuai kebutuhan
        setBgColor("bg-darkerBlue");
        } else {
        setBgColor(route == "/" ? "bg-transparent" : "bg-darkerBlue");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    });
    
    return (
        <div key={route} className={`${route==="/" ? bgColor : "bg-darkerBlue"} fixed z-50 top-0 left-0 flex flex-wrap align-middle justify-around py-2 px-2 md:px-4 w-full transition-colors`}>
            <Link className=" w-1/2" href="/">
                <Image src={LogoRobotika} width={150} height={50} alt="logorobotik" className = "lg:w-48"/>
            </Link>
            <div className="flex text-primaryYellow font-bold flex-row justify-end items-center gap-2 md:gap-4 w-1/2 text-sm md:text-lg lg:text-2xl ">
                <Link href={"/"} className="hidden md:block">Beranda</Link>
                <Link href={"/post"}>Postingan</Link>
                <Link href={"/anggota"}>Anggota</Link>
                <Link href={"/galeri"}>Galeri</Link>
                <Link href={"/login"}>Masuk</Link>
            </div>
            {/* Utility */}
            <ScrollToTop/>
        </div>
    );
}   

export default Navbar