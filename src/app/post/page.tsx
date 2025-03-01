"use client"
import Berita from "@/components/Home/Berita";
import Image from "next/image";
import { GedungA } from "@/assets/images/background";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";
import MainLayout from "@/components/Layout/MainLayout";
import { useEffect, useState } from "react";
import { Post } from "@/service/api";
import { PostType } from "@/type/postType";
import { postStorageUrl } from "@/service/api";
import  DOMPurify  from "dompurify";

export default function Page(){
    const [berita, setBerita] = useState<PostType[]|null>(null);

    useEffect(()=>{
        Post.getPost({limit : 5}).then((response)=>{
            if(response.status===200 && response.data){
                setBerita(response.data);
            }
        });
    },[]);

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
                    <h1 className=" text-primaryYellow font-bold text-3xl lg:text-5xl lg:mb-16">Postingan</h1>
                    
                    <div className="flex  flex-col my-4 gap-y-4 lg:gap-y-8">
                        {berita?.map((item,key)=>(
                            <div className=" grid grid-cols-[40%_60%] md:grid-cols-[30%_70%] gap-2  md:gap-4 lg:gap-8" key={key}>
                                <Image src={`${postStorageUrl}/${item.image}`} alt="pos_image" width={640} height={480} className="h-[20vh] md:h-[40vh] object-cover"></Image>
                                <div className="flex flex-col gap-1 md:gap-2">
                                    <div className="font-bold uppercase bg-primaryYellow w-min px-2 md:px-4 text-primaryBlue text-xs md:text-lg ">{item.category}</div>
                                    <Link href={`/post/${item.id}`} className="text-darkerBlue font-bold text-md md:text-xl lg:text-4xl max-h-[4.8rem] md:max-h-[5.4rem] overflow-hidden">{item.title}</Link>
                                    <div className="flex gap-2 item-center">
                                        <FiCalendar className="text-primaryBlue text-sm md:text-xl"/>
                                        <div className="text-primaryBlue text-xs md:text-sm lg:text-lg font-bold">{new Date(item.date??0).toDateString()}</div>
                                    </div>
                                    <p className="text-xs md:text-lg lg:text-2xl max-h-[3.2rem] md:max-h-[7rem] lg:max-h-[16rem] text-justify  pr-8 overflow-hidden text-gray-700" dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(item.content) }}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}