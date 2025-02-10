import { Banner1 } from "@/assets/images/background";
import Image from "next/image";

export default function Page(){
    return(
        <div className="min-h-[100vh] p-8 pt-32">
            <h2 className="text-darkerBlue font-bold tracking-wider text-3xl">GALERI</h2>

            <div className="flex pt-8 flex-wrap overflow-auto gap-4">

                {[...Array(10)].map((_,key)=>(
                    <div className="relative shrink-0" key={key}>
                        <Image 
                        className="w-[calc(25vw_-_2rem)] h-[30vw] object-cover rounded-lg" 
                        src={Banner1} alt="banner" width={1280} height={720}></Image>
                        <h2 className="absolute bottom-8 text-center w-full font-bold text-3xl text-primaryYellow">KKI 2024</h2>
                    </div>
                ))}
                
            </div>
        
        </div>
    );
}