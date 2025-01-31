"use client"
import { Ship , Kraken} from "@/assets/images/icon";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NotFound(){
    const[x, setX] = useState(-100);
    useEffect(()=>{
        const inter = setInterval(()=>{
            
            const news = x >= 100 ? -100 :  x +.5 ;
            setX(news);
            console.log(`left-[${x}%]`);
        }, 100);
        return ()=>clearInterval(inter);
    })

    return (
        <div className="relative h-[100dvh] w-full text-gray-500 flex flex-col item-center justify-center">
            <div className="relative text-black mt-1/2 self-center">
                <h2 className="text-center text-darkestBlue text-[8rem] font-bold">404</h2>
                <h2 className="text-center text-darkestBlue text-md font-bold">Ups...Sepertinya halaman tidak ditemukan</h2>
            </div>
            <Image
                src={Ship}
                alt="test"
                className="absolute z-20 w-32"
                style={{ left: `${100-Math.abs(x)}%`, bottom : `${x%5 * .15}px`, transform : `scaleX(${x < 0 ? 1 : -1})`, transition: "left 0.1s linear" }} // Tambahkan efek smooth
            />  

            <Image
                src={Kraken}
                alt="test"
                className="absolute z-20 w-24"
                style={{ left: `${100-Math.abs(x) - 10}%`, bottom : `${x%5 * .15}px`, transform : `scaleX(${x < 0 ? 1 : -1})`, transition: "left 0.1s linear" }} // Tambahkan efek smooth
            />     
            <div className="bg-blue-500 absolute h-8 bottom-0 w-full">
            </div>   
        </div>
    );
}