"use client"
import MainLayout from "@/components/Layout/MainLayout";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Inter } from "next/font/google";
import { Member } from "@/service/api";
import { MemberType } from "@/type/member";
import { memberStorageUrl } from "@/service/api";

const inter = Inter({ subsets: ['latin'] })

export default function Page(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setYear] = useState(new Date().getFullYear());
    const [member, setMember] = useState<Map<number, MemberType[]|null>>(new Map<number, MemberType[]|null>);
    const [years, setYears] = useState([new Date().getFullYear()]);
    const [year, setPeriod] = useState<number>(0);

    useEffect(()=>{
        const yearss = [];
        for(let i=new Date().getFullYear();  i>=2016 ; i--)yearss.push(i);
        setYears(yearss);
        
       
    }, []);
    
    const getMember = (period : number)=>{
        if(!member.get(period)){
            Member.getMember({period : period, order : "ASC"}).then((response)=>{
                if(response.status === 200 && response.data ){
                    setMember( (item) =>  item?.set(period, response.data??null));
                    setPeriod(period);

                }
            });
        }else{
            //DIbuat nested karena yang diatas itu asinkronus
            //Jadi ngga bisa bypass atau langsung set tanpa else
            setPeriod(period);
        }
    }

    useEffect(()=>{
       if(year===0)getMember(new Date().getFullYear());
    },[getMember]);
   

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (yearr: number) => {
        setYear(yearr);
        getMember(yearr);
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
                                {selectedYear}
                                <FaCaretDown className="ml-2" />
                            </button>

                            {/* Dropdown menu */}
                            {isOpen && (
                                <div className="origin-top-right absolute
                                                left-0 mt-2 w-56 rounded-md
                                                shadow-lg bg-white ring-1 ring-black
                                                ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {years.map((year, index) => (
                                            <div
                                                key={index}
                                                className="block px-4 py-2
                                                        text-sm text-black
                                                        hover:bg-gray-100"
                                                onClick={() => handleSelect(year)}
                                            >
                                                {year}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <h1 className={`${inter.className}w-full md:w-2/3 uppercase font-extrabold text-5xl text-darkerBlue`}>Meet Our Team and Experts In Robotika UMRAH</h1>
                <p className={`${inter.className}w-full md:-1/2 text-gray-700 font-extrabold`}>Perkenalkan para anggota kami yang selalu berdedikasi dan terus melakukan riset  demi menghasilkan penemuan baru. </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    { year ? member?.get(year)?.map((item,key)=>(
                        <div className="flex flex-col " key={key}>
                            <Image 
                            className="self-center rounded-full object-cover object-top grayscale w-[calc(48vw_-_2rem)] h-[calc(48vw_-_2rem)] md:w-[calc(18vw_-_2rem)] md:h-[calc(18vw_-_2rem)] bg-gray-100"
                            src={`${memberStorageUrl}/${item.image}`} width={480} height={480} alt="member-photo"/>
                            <h1 className="font-bold text-lg md:text-xl text-primaryYellow text-center">{item.name}</h1>
                            <h1 className="font-bold text-sm md:text-sm text-primaryYellow text-center">{typeof item.role === "string" ? item.role : item.role?.name}</h1>
                        </div>
                    )) : <div></div>}
                </div>
            </div>
        </MainLayout>
    );
}