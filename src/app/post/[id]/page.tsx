import berita from "@/data/dummy/berita";
import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";

export default async function Page({
    params,
}:{
    params : Promise<{id : number}>
}){
    const id = (await params).id??0;
    const post = berita[id-1];
    return (
        <div className="min-h-[100vh] p-6 md:p-8 pt-32 md:pt-32 text-black mb-16">
            <div className="bg-primaryYellow h-2 w-28 rounded-[1rem]"></div>
            <div className="text-primaryYellow font-bold text-xl md:text-3xl pt-2">Post / {post.category}</div>

            {/* Bagian berita */}
            <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-8">
                <Image 
                className="w-full max-h-[60vh] object-cover"
                src={`/images/post/image_${post.id}.png`} width={1280} height={720} alt="post-image"/>

                {/* Detail berita */}
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 item-center">
                        <FiCalendar className="text-primaryBlue text-2xl"/>
                        <div className="text-primaryBlue font-bold">{new Date(post.date??0).toUTCString()}</div>
                    </div>
                    <h1 className="text-primaryYellow uppercase text-3xl tracking-wider font-bold min-h-0 max-h-[7rem] overflow-hidden ">{post.title}</h1>
                    {/* Lis tag */}
                    <div className="flex gap-2">
                        <div className="bg-primaryBlue px-2 font-bold rounded-sm text-white">Berita</div>
                        <div className="bg-primaryBlue px-2 font-bold rounded-sm text-white">Berita</div>
                    </div>
                    {/* Kontent  */}
                    <p className=" text-gray-700 text-sm  md:text-lg font-bold text-justify">
                        &#9;{post.title}
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
                                <div className="text-primaryBlue text-xs md:text-sm font-bold">{new Date(post.date??0).toUTCString()}</div>
                            </div>
                            <p className="text-sm max-h-[2.5rem] overflow-hidden">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        
        </div>
    );
}