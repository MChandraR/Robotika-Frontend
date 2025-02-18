"use client"
import MainLayout from "@/components/Layout/MainLayout";
import member from "@/data/people";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function Page(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(new Date().getFullYear());

    const [years, setYears] = useState([new Date().getFullYear()]);

    useEffect(()=>{
        const year = [];
        for(let i=new Date().getFullYear();  i>=2016 ; i--)year.push(i);
        setYears(year);
        
       
    }, []);

   

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (language: number) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };


    return (
        <MainLayout>
            <div className="min-h-[100vh] p-6 mb-20 md:p-16 pt-32 md:pt-32 flex flex-col gap-4">
                <div className="flex gap-4 h-12 item-center" >
                    <h1 className="text-black font-bold">Periode : </h1>
                    <div className="flex justify-center min-h-screen z-10">
                        <div className="relative inline-block text-left">
                            {/* Dropdown button */}
                            <button
                                type="button"
                                className="inline-flex justify-center w-full
                                        rounded-md border border-gray-300
                                        shadow-sm px-4 py-2 bg-white text-sm
                                        font-medium text-black hover:bg-gray-50"
                                onClick={toggleDropdown}
                            >
                                {selectedLanguage}
                                <FaCaretDown className="ml-2" />
                            </button>

                            {/* Dropdown menu */}
                            {isOpen && (
                                <div className="origin-top-right absolute
                                                left-0 mt-2 w-56 rounded-md
                                                shadow-lg bg-white ring-1 ring-black
                                                ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {years.map((language, index) => (
                                            <a
                                                key={index}
                                                href={`#?id=${language}`}
                                                className="block px-4 py-2
                                                        text-sm text-black
                                                        hover:bg-gray-100"
                                                onClick={() => handleSelect(language)}
                                            >
                                                {language}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <h1 className={`${inter.className}w-full md:w-2/3 uppercase font-extrabold text-5xl text-darkerBlue`}>Meet Our Team and Expert In Robotika UMRAH</h1>
                <p className={`${inter.className}w-full md:-1/2 text-gray-700 font-extrabold`}>Perkenalkan para anggota kami yang selalu berdedikasi dan terus melakukan riset  demi menghasilkan penemuan baru. </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {member.map((item,key)=>(
                        <div className="flex flex-col " key={key}>
                            <Image 
                            className="self-center rounded-full object-cover object-top grayscale w-[calc(48vw_-_2rem)] h-[calc(48vw_-_2rem)] md:w-[calc(18vw_-_2rem)] md:h-[calc(18vw_-_2rem)] bg-gray-100"
                            src={`/images/person/${item.id}.png`} width={480} height={480} alt="member-photo"/>
                            <h1 className="font-bold text-lg md:text-xl text-primaryYellow text-center">{item.name}</h1>
                            <h1 className="font-bold text-sm md:text-sm text-primaryYellow text-center">{item.name??""}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}