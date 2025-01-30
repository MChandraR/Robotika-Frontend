import divisi from "@/data/divisi";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/assets/images/icon";
import {motion, useInView} from "motion/react";
import { useRef } from "react";

export default function Divisi(){
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className="relative p-4 md:p-8 bg-white">
        <motion.h1 
        ref={ref} 
        initial={{opacity : 0, transform : "translateX(-100%)"}}
        animate={isInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0 , transform : "translatex(-100%)"}}
        transition={isInView ? {delay : .2 } : {delay : 0}}
        exit={{opacity : 0 , transform : "translateX(-100%)}"}}
        className="text-primaryYellow text-3xl font-bold tracking-wider border-t-4 border-primaryYellow w-min pr-4">DIVISI</motion.h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1.5%] mt-4">
        {
          divisi.map((item, key )=>(
            <motion.div
            ref={ref}
            initial={{opacity:0, translate : "translateX(-100%)", scale : 0}}
            transition={isInView ? {delay : key * .2} : {delay : 0}}
            exit={{opacity:0, translate : "translateX(100%)", scale : 0}}
            animate={isInView ? {opacity : 1, scale : 1} : {opacity:0, scale : 0}}
            key={key}
            className={`relative text-primaryBlue px-2 md:px-4 py-8 rounded-md bg-[url('/images/background/divisi-bg.png')] bg-cover h-[30vh] md:h-[60vh] border-gray-200 border-2`}>
            <Link href={item.link ?? "/divisi"}   >
             <center>
              <Image src={item.image} alt="logo_divisi" className="w-1/2" />
              <h2 className="text-center font-bold text-2xl">{item.name}</h2>
              <p className="text-black font-bold mt-2 mx-2 md:mx-6 text-[.7rem] md:text-lg">{item.desc}</p>
              <div className="w-full h-full absolute top-0 left-0 flex align-bottom justify-center">
                  <motion.div whileHover={{scale:1.2}} className="relative w-12 h-12 self-end mb-2 md:mb-6 bg-dark0_15 rounded-full p-2">
                    <Image src={ArrowRight}  alt="arrow-right" />
                  </motion.div>
              </div>
             </center>
            </Link>
            </motion.div>
          ))
        }
        </div>
       
    </div>
    );
   
}