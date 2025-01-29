'use client';

import Image from "next/image";
import { GedungA , Banner1} from "@/assets/images/background";
import { LogoRobotika, LogoUmrah} from "@/assets/images/logo";
import { useState, useEffect } from "react";
//Icon
import { Robot, ArrowRight } from "@/assets/images/icon";
import { GoChevronRight, GoChevronLeft, GoChevronDown  } from "react-icons/go";
import { BsArrowLeftCircle , BsArrowRightCircle} from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
//Data 
import feature from "@/data/fitur";
import divisi from "@/data/divisi";
import {Product} from "@/data/produk";
import berita from "@/data/dummy/berita";
import category from "@/data/updateCategory";
import faq from "@/data/faq";
//Komponen
import Link from "next/link";


export default function Home() {
  const [FaQ, setFaQ] = useState(faq);

  const openFaQ = async (idx:number)=>{
    setFaQ(prevFaQ => 
      prevFaQ.map((item, i) => 
          i === idx ? { ...item, expand: !item.expand } : item
      )
  );
  };

  return (
    <div className="relative w-full overflow-hidden">
        
      {/* Background website  */}
        <Image 
          className="-z-10 fixed w-full md:h-auto h-[100vh] object-cover"
          src={GedungA} alt="0" quality={100} 
        />

      {/* Bagian atas tempat slogan dan logo // */}
        <div className="relative pt-40 pb-10 z-0 w-full">
          <center>
            <h1 className="top-0 z-0 p-4 text-white text-xl md:text-3xl text-center font-bold tracking-wide">
              UKM Robotika UMRAH
              <br />
              &quot;Melangkah Bersama Menuju Teknologi Masa Depan&quot;
            </h1>

            <Image src={LogoUmrah} alt="Umrah" className="m-2 md:m-8 w-24 md:w-32"/>
          </center>
        </div>
       
        
        
      {/* Bagian menu atau fitur dalam web */}
        <div className="relative flex justify-around gap-4 p-4 overflow-auto flex-nowrap w-full">
          {
            feature.map((item, key)=>(
              <div key={key} className="bg-primaryYellow w-full text-sm md:text-lg text-center font-bold text-primaryBlue p-2 whitespace-nowrap">
                {item.title}
              </div>
            ))
          }
        </div>
       

       {/* Bagian Banner Utama */}
        <div className="bg-white relative text-primaryBlue py-6 p-4 md:p-6 w-full">
          
          <div className="flex">
            <h1 className="font-bold text-2xl" >Robotika UMRAH</h1>
            <Image src={Robot} alt="robot" width={35} height={25} />
          </div>
        
          <div className="bg-white mt-4 py-8 relative h-[70vh] md:h-[80vh]">
            {
              //Gambar banner
              <Image src={Banner1} alt="banner" 
              className="absolute h-[65vh] md:h-[75vh] object-cover top-0 left-0 w-full rounded-tl-lg rounded-tr-3xl rounded-bl-3xl">
              </Image>
            }
            
            {
              //Filter 
              <div
              className="absolute h-[65vh] md:h-[75vh] object-cover top-0 left-0 w-full bg-filterBlue rounded-tl-lg rounded-tr-3xl rounded-bl-3xl">
              </div>
            }
          

            <center>
            <Image 
              className="relative w-[20rem] mt-4 md:mt-20"
              src={LogoRobotika} alt="logo-robotik"
              />

            <p className="relative text-white font-bold px-10 md:px-[5rem] py-4 text-md md:text-xl tracking-wider">
              Robotika UMRAH merupakan UKM yang berfokus pada pengembangan skill dan talenta terutama dibidang robot dan kapal, dengan moto “Melangkah Bersama Menuju Teknologi Masa Depan”  kami akan terus menghasilkan inovasi baru yang tentunya dapat mendorong perkembangan teknologi di masa depan. 
            </p>
            </center>
            

            <GoChevronRight className="text-white absolute top-[40%] right-0 md:right-4 text-[3rem] font-bold"/>
            <GoChevronLeft className="text-white absolute top-[40%] left-0 md:left-4 text-[3rem] font-bold"/>

            
          </div>
        </div>

        {/* Bagian Divisi */}
        <div className="relative p-4 md:p-8 bg-white">
            <h1 className="text-primaryYellow text-3xl font-bold tracking-wider border-t-4 border-primaryYellow w-min pr-4">DIVISI</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[1.5%] mt-4">
            {
              divisi.map((item, key )=>(
                <Link href={item.link ?? "/divisi"} key={key}  className={`relative text-primaryBlue px-2 md:px-4 py-8 rounded-md bg-[url('/images/background/divisi-bg.png')] bg-cover h-[30vh] md:h-[60vh] border-gray-200 border-2`}>
                 <center>
                  <Image src={item.image} alt="logo_divisi" className="w-1/2" />
                  <h2 className="text-center font-bold text-2xl">{item.name}</h2>
                  <p className="text-black font-bold mt-2 mx-2 md:mx-6 text-[.7rem] md:text-lg">{item.desc}</p>
                  <div className="w-full h-full absolute top-0 left-0 flex align-bottom justify-center">
                      <Image src={ArrowRight}  alt="arrow-right" className="relative w-12 h-12 self-end mb-2 md:mb-6 bg-dark0_15 rounded-full p-2"/>
                  </div>
                 </center>
                </Link>
              ))
            }
            </div>
           
        
        </div>
        

        {/* Bagian Produk */}
        <div className="bg-white p-4 md:p-8 pt-16 md:pt-8">
          <div className="w-[5rem] h-[4px] bg-primaryYellow mb-1"></div>
          <h1 className="text-primaryYellow text-3xl font-bold tracking-wider w-min whitespace-nowrap">PRODUK KAMI</h1>
          
          <center className="pb-8 relative pt-16 md:pt-8">
            <BsArrowLeftCircle className="absolute top-[40%] left-0 md:left-1/4 w-[3rem] text-primaryYellow text-5xl"/>
            <BsArrowRightCircle className="absolute top-[40%] right-0 md:right-1/4 w-[3rem] text-primaryYellow text-5xl"/>

            <Image src={Product[0].productImage ?? ""} width={1920} height={1080} quality={100} alt="" className="w-[30vw] md:w-[20vw]"/>
            <h2 className="text-primaryBlue font-bold text-xl md:text-3xl m-4 tracking-wider" >{Product[0].productName}</h2>
            <div className="flex gap-2 align-center justify-center">
              {
                Product[0].productCategory.map((item,key)=>(
                  <div key={key} className="bg-primaryYellow text-primaryBlue rounded-sm px-4 font-bold tracking-wider text-sm md:text-lg">{item}</div>
                ))
              }
            </div>
            <p className="py-4 w-[90%] md:w-[65%] text-gray-700 text-sm md:text-lg">{Product[0].productDesc}</p>
          </center>

        </div>
            
        <div className="relative px-4 py-8 bg-filterBlue ">
          <center>
              <h2 className="text-primaryYellow font-bold text-2xl text-center w-min whitespace-nowrap border-b-4 border-primaryYellow px-16 tracking-wide">Update Terbaru</h2>
              <div className="w-full grid grid-rows-[40%_40%_10%] md:grid-rows-none md:grid-cols-[33%_40%_20%] gap-[2%] h-[130vh] md:h-[70vh] mt-12 md:m-4 md:mt-12 " > 
                {/* Update utama */}
                <Link href={berita[0].url??"/berita"} className={`relative w-full  h-full bg-cover bg-center`} style={{
                  backgroundImage: `url(${berita[0]?.image ?? ""})`,
                }}>
                  <div className="absolute bottom-0 h-1/3 bg-darkBlue0_75 p-4">
                    <div className="flex gap-2 align-center mb-2">
                      <IoCalendar/>
                      <h2 className="text-[.7rem] font-bold">{new Date(berita[0].date??"").toUTCString()}</h2>
                    </div>
                    <h2 className="font-bold text-left tracking-wider text-xl h-[5rem] overflow-hidden">{berita[0].title}</h2>
                  </div>
                </Link>

                {/* Berita List */}
                <div className="relative w-full grid grid-rows-2 grid-cols-2 gap-2">
                  {
                    berita.filter((item,key)=>key>0 && key < 5).map((item,key)=>(
                      <Link href={item.url??"/berita"} key={key} className="relative h-full bg-cover object-center bg-center" style={{
                        backgroundImage: `url(${item?.image ?? ""})`,
                      }}>
                        <div className="absolute bottom-0 h-[45%]  md:h-[40%] bg-darkBlue0_75 p-4">
                          <div className="flex gap-2 align-center mb-1">
                            <IoCalendar className="text-[.5rem]"/>
                            <span className="text-[.5rem] font-bold">{new Date(item.date??"").toUTCString()}</span>
                          </div>
                          <h2 className="font-bold text-left tracking-wider text-[.7rem] h-[3rem] overflow-hidden">{item.title}</h2>
                        </div>
                      </Link>
                    ))
                  }
                </div>

                {/* Search menu */}
                <div className="w-full">
                  {/* INput field */}
                  <div className="flex gap-1 w-full">
                    <input type="text" className="text-gray-400 font-normal text-sm w-full p-2" placeholder="Cari konten"/>
                    <FiSearch className="text-primaryBlue bg-primaryYellow p-1 w-10 h-full"/>
                  </div>
                  {/* Kategori list */}
                  <div className="flex flex-col mt-4">
                    {
                      category.map((item,key)=>(
                        <div key={key} className={`text-left py-1 border-primaryYellow border-t-[1px] ${key>=category.length-1 ? "border-b-[1px]" :""}`}>
                          <Link href={item.link??"/"}>
                            {item.category}
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
          </center>
        </div>

        {/* Bagian Sponsor */}
        <div className="px-4 py-8 bg-white min-h-[50vh]">
          <center>
           <h2 className="text-primaryYellow font-bold tracking-wider border-b-2 w-min px-16 py-2 text-xl border-primaryYellow">Sponsorship</h2>
           <p className="p-4">-Belum ada sponsor-</p>
          </center>
        </div>


        {/* Bagian FAQ */}
        <div className="bg-white p-4 md:p-8 pb-10 md:pb-16">
          <div className="w-[5rem] h-[4px] bg-primaryYellow mb-1"></div>
          <h1 className="text-primaryYellow text-3xl font-bold tracking-wider w-min whitespace-nowrap">FAQ</h1>
          {/* List pertanyaan */}
          <div className="grid grid-cols-1 mt-4 md:mt-8">
            {FaQ.map((item,key)=>(
              <div key={key} >
                <div className="flex  text-primaryBlue font-bold align-center text-md md:text-xl pr-4 border-gray-300 border-b-2 w-full py-4 cursor-pointer" onClick={()=>openFaQ(key)}>
                  <p className="w-full tracking-wide">{item.q}</p>
                  {item.expand ? <GoChevronDown className="text-3xl"/> : <GoChevronRight className="text-3xl"/>}
                  
                </div>
                {item.expand ? <p className="text-gray-600 font-bold py-4 text-sm">{item.ans}</p> : ""}
              </div>
             
              
            ))}
            
          </div>
        </div>

    </div>
   
  );
}
