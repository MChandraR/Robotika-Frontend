import MainLayout from "@/components/Layout/MainLayout";
import divisi from "@/data/divisi";
import Image from "next/image";
const divisiList = ["mekanik", "elektrikal", "drafter", "programmer", "designer"];

export default async function Page({
    params,
  }: {
    params: Promise<{ divisi: string }>
  }){
    const id = (await params).divisi;
    const idx = divisiList.indexOf(id);
    return (

      <MainLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-[100dvh] p-4 md:p-12 pt-[8rem] md:pt-[8rem] w-full">
          {/* Profile area */}
          <div className="md:hidden h-[50vh] flex flex-col item-center justify-center pt-0">
            <Image src={`/images/person/${divisi[idx].head_division_id}.png`} width={1280} height={720} quality={100} alt="head_profile" className="self-center w-[50vw] h-[50vw] object-cover object-top" />
            <div className="self-center text-primaryYellow font-bold text-2xl pt-4">{divisi[idx].head_division}</div>
            <div className="self-center text-primaryYellow font-bold text-xl" >Head of {divisi[idx].name}</div>
          </div>
          
          {/* General desc */}
          <div className="mb-16 md:md-4 md:mt-8">
            <div className="bg-primaryYellow h-1 w-20 rounded-sm"></div>
              <div className="mt-2 text-primaryYellow text-3xl  font-bold ">
                  <h2>Divisi {divisi[idx].name}</h2>
                  <p className="text-gray-600 font-bold text-sm md:text-lg pt-4">{divisi[idx].long_desc}</p>
              </div>

            <div className="mt-16 bg-primaryYellow h-1 w-20 rounded-sm"></div>
              <div className="mt-2 text-primaryYellow text-3xl  font-bold ">
                  <h2>Tugas dan Fungsi</h2>
                  <ul className="pl-6 pt-4">
                    {divisi[idx].function.map((item, key)=>(
                      <li className="text-gray-700 text-sm md:text-lg py-1 list-disc" key={key}>{item}</li>
                    ))}
                  </ul>
              </div>
          </div>
           
          {/* Profile area */}
          <div className="hidden h-[50vh] md:flex flex-col item-center justify-center pt-16 pl-8">
            <Image src={`/images/person/${divisi[idx].head_division_id}.png`} width={1280} height={720} quality={100} alt="head_profile" className="self-center w-[25vw] h-[25vw] object-cover object-top" />
            <div className="self-center text-primaryYellow font-bold text-2xl pt-4">{divisi[idx].head_division}</div>
            <div className="self-center text-primaryYellow font-bold text-xl" >Head of {divisi[idx].name}</div>
          </div>
        </div>
      </MainLayout>

    );
}