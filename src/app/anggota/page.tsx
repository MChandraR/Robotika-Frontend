import member from "@/data/people";
import Image from "next/image";

export default function Page(){
    return (
        <div className="min-h-[100vh] p-6 md:p-16 pt-32 md:pt-32 flex flex-col gap-4">
            <div className="flex gap-4">
                <h1 className="text-black font-bold">Periode : </h1>
                <div className="bg-primaryYellow font-bold  px-4 rounded-md text-primaryBlue">
                    2025
                </div>
            </div>
            <h1 className="w-full md:w-1/2 uppercase font-bold text-4xl text-darkerBlue">Meet Our Team and Expert In Robotika UMRAH</h1>
            <p className="w-full md:-1/2 text-gray-700 font-bold">Perkenalkan para anggota kami yang selalu berdedikasi dan terus melakukan riset  demi menghasilkan penemuan baru. </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-8">
                {member.map((item,key)=>(
                    <div key={key}>
                        <Image 
                        className="rounded-full object-cover object-top grayscale w-[calc(48vw_-_2rem)] h-[calc(48vw_-_2rem)] md:w-[calc(16vw_-_2rem)] md:h-[calc(16vw_-_2rem)] bg-gray-100"
                        src={`/images/person/${item.id}.png`} width={480} height={480} alt="member-photo"/>
                        <h1 className="font-bold text-lg md:text-xl text-primaryYellow text-center">{item.name}</h1>
                        <h1 className="font-bold text-sm md:text-sm text-primaryYellow text-center">{item.role}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}