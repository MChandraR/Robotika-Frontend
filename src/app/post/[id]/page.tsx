"use client"
import berita from "@/data/dummy/berita";
import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
import  DOMPurify  from "dompurify";
import Link from "next/link";
import MainLayout from "@/components/Layout/MainLayout";
import { Post, postStorageUrl } from "@/service/api";
import { useEffect, useState } from "react";
import { PostType } from "@/type/postType";
import { useParams } from "next/navigation";

export default function Page(){
    const [post, setPost] = useState<PostType|null>(null);
    const param = useParams<{id : string}>();

    useEffect(()=>{
        Post.getPost({id : param.id}).then((response)=>{
            if(response.data) setPost(response.data?.[0]);
        });
    },[param.id]);

    return (
        <MainLayout>
            <div className="min-h-[100vh] p-6 md:p-8 pt-32 md:pt-32 text-black mb-16">
                <div className="bg-primaryYellow h-2 w-28 rounded-[1rem]"></div>
                <div className="text-primaryYellow font-bold text-xl md:text-3xl pt-2">Post / {post?.category}</div>

                {/* Bagian berita */}
                <div className="grid grid-cols-1 md:grid-cols-[40%_60%] pt-8 gap-8">
                    <Image 
                    className="hidden md:inline w-full md:min-h-[62vh] max-h-[65vh] object-cover"
                    src={`${postStorageUrl}/${post?.image}`} width={1280} height={720} alt="post-image"/>

                    {/* Detail berita */}
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 item-center">
                            <FiCalendar className="text-primaryBlue text-2xl"/>
                            <div className="text-primaryBlue font-bold">{new Date(post?.date??0).toUTCString()}</div>
                        </div>
                        <h1 className="text-primaryYellow uppercase text-3xl tracking-wider font-bold min-h-0 max-h-[7rem] overflow-hidden ">{post?.title}</h1>
                        {/* Lis tag */}
                        <div className="flex gap-2">
                            {
                                post?.tag?
                                post?.tag?.split(";").map((item,key)=>(
                                    <div key={key} className="bg-primaryBlue px-2 font-bold rounded-sm text-white tracking-wider">#{item}</div>
                                )):
                                <div className="bg-primaryBlue px-2 font-bold rounded-sm text-white tracking-wider">#{post?.category??"Umum"}</div>

                            }
                        </div>
                        <Image 
                        className="md:hidden w-full md:min-h-[62vh] max-h-[65vh] object-cover"
                        src={`${postStorageUrl}/${post?.image}`} width={1280} height={720} alt="post-image"/>
                        {/* Kontent  */}
                        <p dangerouslySetInnerHTML={{__html : DOMPurify.sanitize( post?.content??"")}} className=" text-gray-700 text-[.9rem] md:text-lg font-semibold text-justify md:pr-8 ">
                            
                        </p>
                    </div>
                </div>

                <div className="mt-20 bg-primaryYellow h-2 w-32 rounded-[1rem]"></div>
                <div className="text-primaryYellow text-left font-bold text-xl md:text-3xl pt-2">Lihat postingan lainnya</div>
                {/* Postingan lainnya */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-2 mt-8">
                    {berita.slice(-4).map((item,key)=>(
                        <div className="grid grid-cols-[40%_60%] md:grid-cols-[30%_70%] gap-2 md:gap-4" key={key}>
                            <Image src={`/images/post/image_${item.id}.png`} alt="pos_image" width={640} height={480} className="h-full"></Image>
                            <div className="flex flex-col gap-1 md:gap-2">
                                <div className="font-bold uppercase bg-primaryYellow w-min px-2 md:px-4 text-primaryBlue text-xs md:text-sm ">{item.category}</div>
                                <Link href={`/post/${item.id}`} className="text-darkerBlue font-bold text-md max-h-[3rem] overflow-hidden">{item.title}</Link>
                                <div className="flex gap-2 item-center">
                                    <FiCalendar className="text-primaryBlue text-sm md:text-xl"/>
                                    <div className="text-primaryBlue text-xs md:text-sm font-bold">{new Date(item.date??0).toUTCString()}</div>
                                </div>
                                <p className="text-sm max-h-[2.5rem] overflow-hidden ">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            
            </div>
        </MainLayout>
    );
}