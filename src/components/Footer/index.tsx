import { LogoRobotika } from "@/assets/images/logo";
import Image from "next/image";

export default function Footer(){
    return (
        <div className="grid grid-cols-3 relative w-full h-max bg-darkerBlue p-4 pb-16">
            <div className="">
                <Image src={LogoRobotika} alt="robotik" className="w-[12rem] mb-4"></Image>
                <p className="font-semibold tracking-wider ps-2">Jalan Politeknik, Senggarang, Kec. Tanjungpinang <br />
                Kota, Kota Tanjung Pinang, <br />Kepulauan Riau 29115</p>
            </div>

            <div></div>

            <div className="flex flex-col justify-start w-full gap-2">
                <h1 className="font-bold text-lg">Contact Us</h1>
                <div className="bg-white h-[2px] w-full"></div>
                <div className="flex font-bold tracking-wider">
                    @robotika.umrah
                </div>
                <div className="flex font-bold tracking-wider">
                    +62 877 1975 6442
                </div>
            </div>
            <p className="absolute bottom-4 left-0 w-full text-center text-white">Copyright  &copy; 2025 Robotika UMRAH</p>
        </div>
    );
}