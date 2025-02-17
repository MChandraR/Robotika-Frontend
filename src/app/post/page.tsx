"use client"
import Berita from "@/components/Home/Berita";
import Image from "next/image";
import { GedungA } from "@/assets/images/background";
import berita from "@/data/dummy/berita";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";
import MainLayout from "@/components/Layout/MainLayout";

export default function Page(){
    return (
        <MainLayout>     
            <Image 
                className="z-0 fixed w-full md:h-auto h-[100vh] object-cover"
                src={GedungA} alt="0" quality={100} 
            />
            <div className="relative">
                <div className="h-20"></div>
                {/* Background website  */}
                <Berita bgcolor="relative bg-transparent"/>
                <div className="bg-white z-10 relativebg-white p-5 md:p-8 pt-12">
                    <div className="w-[5rem] h-[4px] bg-primaryYellow mb-1"></div>
                    <h1 className=" text-primaryYellow font-bold text-3xl ">Postingan</h1>
                    
                    <div className="flex  flex-col my-4 gap-y-4">
                        {berita.slice(-4).map((item,key)=>(
                            <div className=" grid grid-cols-[40%_60%] md:grid-cols-[30%_70%] gap-2 md:gap-4" key={key}>
                                <Image src={`/images/post/image_${item.id}.png`} alt="pos_image" width={640} height={480} className="h-[20vh] md:h-[40vh] object-cover"></Image>
                                <div className="flex flex-col gap-1 md:gap-2">
                                    <div className="font-bold uppercase bg-primaryYellow w-min px-2 md:px-4 text-primaryBlue text-xs md:text-lg ">{item.category}</div>
                                    <Link href={`/post/${item.id}`} className="text-darkerBlue font-bold text-md md:text-xl max-h-[4.8rem] md:max-h-[5.4rem] overflow-hidden">{item.title}</Link>
                                    <div className="flex gap-2 item-center">
                                        <FiCalendar className="text-primaryBlue text-sm md:text-xl"/>
                                        <div className="text-primaryBlue text-xs md:text-sm font-bold">{new Date(item.date??0).toUTCString()}</div>
                                    </div>
                                    <p className="text-xs md:text-lg max-h-[3.2rem] md:max-h-[7rem] overflow-hidden text-gray-700">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}