'use client';

import Image from "next/image";
import { GedungA } from "@/assets/images/background";
import { LogoUmrah} from "@/assets/images/logo";
import {motion} from "motion/react";
//Data 
import feature from "@/data/fitur";
//Komponen
import Main from "@/components/Home/Main";
import Divisi from "@/components/Home/Divisi";
import Produk from "@/components/Home/Produk";
import Berita from "@/components/Home/Berita";
import Faq from "@/components/Home/Faq";
import Link from "next/link";
import OurTeam from "@/components/Home/OurTeam";
import MainLayout from "@/components/Layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="relative w-full overflow-hidden">
          {/* Background website  */}
          <Image 
            className="-z-10 fixed w-full md:h-auto h-[100vh] object-cover"
            src={GedungA} alt="0" quality={100} 
          />

        <div className=" h-[100dvh] md:h-auto relative">
            {/* Bagian atas tempat slogan dan logo // */}
            <div className="relative h-full flex flex-col align-center justify-center md:pt-40 pb-10 z-0 w-full">
              <center className="h-min self-center justify-center mt-0">
                <h1 className="top-0 z-0 p-4 text-white text-xl md:text-3xl text-center font-bold tracking-wide"> UKM Robotika UMRAH<br/>
                  &quot;Melangkah Bersama Menuju Teknologi Masa Depan&quot;
                </h1>
                <Image src={LogoUmrah} alt="Umrah" className="m-2 md:m-8 w-24 md:w-32"/>
              </center>
            </div>
            

            {/* Bagian menu atau fitur dalam web */}
            <div className="absolute md:relative bottom-4 grid grid-cols-2 md:flex justify-around gap-4 p-4 overflow-auto flex-nowrap w-full">
              {
                feature.map((item, key)=>(
                  <motion.div 
                  whileHover={{scale : 1.1}}
                  key={key} 
                  className={`${ (key>=feature.length-1 && key%2 == 0) ? "col-span-2" : ""} rounded-md md:rounded-none md:bg-primaryYellow w-full text-sm md:text-lg text-center font-bold text-primaryYellow border-2 md:border-0 border-primaryYellow md:text-primaryBlue p-2 whitespace-nowrap`}>
                    <Link href={item.url}  >
                        {item.title}
                    </Link>
                  </motion.div>
                ))
              }
            </div>
        </div>
        
          

          {/* Bagian Banner Utama */}
          <Main/>

          {/* Bagian banner team */}
          <OurTeam/>

          {/* Bagian Divisi */}
          <Divisi/>

          {/* Bagian Produk */}
          <Produk/>
      
          {/* Bagian Berita */}
          <Berita/>

          {/* Bagian Sponsor */}
          <div className="px-4 py-8 bg-white min-h-[50vh]" id="sponsorship">
            <center>
              <h2 className="text-primaryYellow font-bold tracking-wider border-b-2 w-min px-16 py-2 text-xl border-primaryYellow">Sponsorship</h2>
              <p className="p-4">-Belum ada sponsor-</p>
            </center>
          </div>


          {/* Bagian FAQ */}
          <Faq/>



      </div>
    </MainLayout>
   
  );
}
