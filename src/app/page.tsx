'use client';

import Image from "next/image";
import { GedungA , Banner1} from "@/assets/images/background";
import { LogoRobotika, LogoUmrah} from "@/assets/images/logo";
import { Robot, ArrowRight } from "@/assets/images/icon";
import { GoChevronRight, GoChevronLeft  } from "react-icons/go";
import { BsArrowLeftCircle , BsArrowRightCircle} from "react-icons/bs";
//Data 
import feature from "@/data/fitur";
import divisi from "@/data/divisi";
import {Product} from "@/data/produk";
//Komponen
import Footer from "@/components/Footer";


export default function Home() {
   
  return (
    <div className="relative w-full">
        
      {/* Background website  */}
        <Image 
          className="-z-10 fixed w-full"
          src={GedungA} alt="0" quality={100} 
        />

      {/* Bagian atas tempat slogan dan logo // */}
        <div className="relative pt-40 pb-10 z-0">
          <center>
            <h1 className="top-0 z-0 text-white text-3xl text-center font-bold tracking-wide">
              UKM Robotika UMRAH
              <br />
              &quot;Melangkah Bersama Menuju Teknologi Masa Depan&quot;
            </h1>

            <Image src={LogoUmrah} alt="Umrah" className="m-8 w-32"/>
          </center>
        </div>
       
        
        
      {/* Bagian menu atau fitur dalam web */}
        <div className="relative flex justify-around gap-4 p-4">
          {
            feature.map((item, key)=>(
              <div key={key} className="bg-primaryYellow w-full text-center font-bold text-primaryBlue p-2">
                {item.title}
              </div>
            ))
          }
        </div>
       

       {/* Bagian Banner Utama */}
        <div className="bg-white relative text-primaryBlue p-6">
          
          <div className="flex">
            <h1 className="font-bold text-2xl" >Robotika UMRAH</h1>
            <Image src={Robot} alt="robot" width={35} height={25} />
          </div>
        
          <div className="bg-white mt-4 py-8 relative h-[90vh]">
            {
              //Gambar banner
              <Image src={Banner1} alt="banner" 
              className="absolute h-[75vh] object-cover top-0 left-0 w-full rounded-tl-lg rounded-tr-3xl rounded-bl-3xl">
              </Image>
            }
            
            {
              //Filter 
              <div
              className="absolute h-[75vh] object-cover top-0 left-0 w-full bg-filterBlue rounded-tl-lg rounded-tr-3xl rounded-bl-3xl">
              </div>
            }
          

            <center>
            <Image 
              className="relative w-[20rem] mt-20"
              src={LogoRobotika} alt="logo-robotik"
              />

            <p className="relative text-white font-bold px-[5rem] py-4 text-xl tracking-wider">
              Robotika UMRAH merupakan salah satu UKM yang berfokus pada pengembangan skill dan talenta terutama dibidang robot dan kapal, dengan moto “Melangkah Bersama Menuju Teknologi Masa Depan”  kami akan terus menghasilkan inovasi baru yang tentunya dapat mendorong perkembangan teknologi di masa depan. 
            </p>
            </center>
            

            <GoChevronRight className="text-white absolute top-[40%] right-4 text-[3rem] font-bold"/>
            <GoChevronLeft className="text-white absolute top-[40%] left-4 text-[3rem] font-bold"/>

            
          </div>
        </div>

        {/* Bagian Divisi */}
        <div className="relative p-8 bg-white">
            <h1 className="text-primaryYellow text-3xl font-bold tracking-wider border-t-4 border-primaryYellow w-min pr-4">DIVISI</h1>
            
            <div className="grid grid-cols-4 gap-[1.5%] mt-4">
            {
              divisi.map((item, key )=>(
                <div key={key}  className={`relative text-primaryBlue px-4 py-8 rounded-md bg-[url('/images/background/divisi-bg.png')] bg-cover h-[60vh] border-gray-200 border-2`}>
                 <center>
                  <Image src={item.image} alt="logo_divisi" className="w-1/2" />
                  <h2 className="text-center font-bold text-2xl">{item.name}</h2>
                  <p className="text-black font-bold mt-2 mx-6">{item.desc}</p>
                  <div className="w-full h-full absolute top-0 left-0 flex align-bottom justify-center">
                      <Image src={ArrowRight}  alt="arrow-right" className="relative w-12 h-12 self-end mb-6 bg-dark0_15 rounded-full p-2"/>
                  </div>
                 </center>
                </div>
              ))
            }
            </div>
           
        
        </div>
        

        {/* Bagian Produk */}
        <div className="bg-white p-8">
          <div className="w-[5rem] h-[4px] bg-primaryYellow mb-1"></div>
          <h1 className="text-primaryYellow text-3xl font-bold tracking-wider w-min whitespace-nowrap">PRODUK KAMI</h1>
          
          <center className="py-8 relative">
            <BsArrowLeftCircle className="absolute top-[40%] left-1/4 w-[3rem] text-primaryYellow text-5xl"/>
            <BsArrowRightCircle className="absolute top-[40%] right-1/4 w-[3rem] text-primaryYellow text-5xl"/>

            <Image src={Product[0].productImage ?? ""} width={1920} height={1080} quality={100} alt="" className="w-[20vw]"/>
            <h2 className="text-primaryBlue font-bold text-3xl m-4 tracking-wider" >{Product[0].productName}</h2>
            <div className="flex gap-2 align-center justify-center">
              {
                Product[0].productCategory.map((item,key)=>(
                  <div key={key} className="bg-primaryYellow text-primaryBlue rounded-sm px-4">{item}</div>
                ))
              }
            </div>
            <p className="py-4 w-[65%] text-gray-700 text-lg">{Product[0].productDesc}</p>
          </center>

        </div>

        <Footer/>
    </div>
   
  );
}
