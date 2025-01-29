
import { LogoRobotika } from "@/assets/images/logo";
import { FaInstagram , FaWhatsapp } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
        <div className="grid grid-cols-1 gap-8 md:gap-4  md:grid-cols-3 relative w-full h-max bg-darkerBlue p-4 pb-16">
            <div className="">
                <Image src={LogoRobotika} alt="robotik" className="w-[8rem] md:w-[12rem] mb-4"></Image>
                <p className="font-semibold tracking-wider ps-0 md:ps-2">Jalan Politeknik, Senggarang, Kec. Tanjungpinang <br />
                Kota, Kota Tanjung Pinang, <br />Kepulauan Riau 29115</p>
            </div>

            <div className="hidden md:block"></div>

            <div className="flex flex-col mb-8 md:md-0 justify-start w-full gap-2">
                <h1 className="font-bold text-white text-lg">Contact Us</h1>
                <div className="bg-white h-[2px] w-full"></div>
                <div className="flex text-white font-bold tracking-wider align-center gap-2 pt-4">
                    <FaInstagram className="text-3xl"/>
                    <Link href={"/instagram"}>@robotika.umrah</Link>
                </div>
                <div className="flex text-white font-bold tracking-wider align-center gap-2">
                    <FaWhatsapp className="text-3xl"/>
                    <Link href={"/wa"}>+62 877 1975 6442</Link>
                    
                </div>
            </div>
            <p className="absolute bottom-4 left-0 w-full text-center text-white">Copyright  &copy; 2025 Robotika UMRAH</p>
        </div>
    );
}