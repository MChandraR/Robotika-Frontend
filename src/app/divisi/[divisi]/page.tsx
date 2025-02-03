import divisi from "@/data/divisi";
import Image from "next/image";
const divisiList = ["mekanik", "elektrikal", "drafter", "programmer"];

export default async function Page({
    params,
  }: {
    params: Promise<{ divisi: string }>
  }){
    const id = (await params).divisi;
    const idx = divisiList.indexOf(id);
    return (

        <div className="grid grid-cols-2 relative min-h-[100dvh] p-12 pt-[8rem] w-full">
          {/* General desc */}
          <div className="">
            <div className="bg-primaryYellow h-1 w-20 rounded-sm"></div>
              <div className="mt-2 text-primaryYellow text-3xl  font-bold ">
                  <h2>Divisi {divisi[idx].name}</h2>
                  <p className="text-gray-600 font-bold text-lg pt-4">{divisi[idx].long_desc}</p>
              </div>

            <div className="mt-16 bg-primaryYellow h-1 w-20 rounded-sm"></div>
              <div className="mt-2 text-primaryYellow text-3xl  font-bold ">
                  <h2>Tugas dan Fungsi</h2>
                  <p className="text-gray-600 font-bold text-lg pt-4">{divisi[idx].long_desc}</p>
              </div>
          </div>
           
          {/* Profile area */}
          <div className="h-[50vh] flex flex-col item-center justify-center pt-16 pl-8">
            <Image src={`/images/person/${divisi[idx].head_division_id}.png`} width={1280} height={720} quality={100} alt="head_profile" className="self-center w-[25vw] h-[25vw] object-cover object-top" />
            <div className="self-center text-primaryYellow font-bold text-2xl pt-4">{divisi[idx].head_division}</div>
            <div className="self-center text-primaryYellow font-bold text-xl" >Head of {divisi[idx].name}</div>
          </div>
        </div>
    );
}