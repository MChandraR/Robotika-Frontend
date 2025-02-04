import berita from "@/data/dummy/berita";
import Image from "next/image";
import { FiCalendar } from "react-icons/fi";

export default async function Page({
    params,
}:{
    params : Promise<{id : number}>
}){
    const id = (await params).id??0;
    const post = berita[id-1];
    return (
        <div className="min-h-[100vh] p-6 md:p-8 pt-32 text-black mb-16">
            <div className="bg-primaryYellow h-1 w-20 rounded-sm"></div>
            <div className="text-primaryYellow font-bold text-xl md:text-3xl pt-2">Post / {post.category}</div>

            {/* Bagian berita */}
            <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-8">
                <Image 
                className="w-full max-h-[70vh] object-cover"
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
        
        </div>
    );
}