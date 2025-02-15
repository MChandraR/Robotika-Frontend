import { BsArrowLeftCircle , BsArrowRightCircle} from "react-icons/bs";
import {Produk} from "@/data/produk";
import Image from "next/image";
import { useState } from "react";
import {motion, useInView} from "motion/react";
import { useRef } from "react";

export default function ProductView(){
    const [idx, setIdx] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);
    const protoRef = useRef(null);
    const isInviewProto = useInView(protoRef);

    const changePage = (num:number)=>{
        setIdx( idx =>
            idx = (Produk.length + idx + num) % Produk.length
        );
    }
    
    return (
        <div className="bg-white p-4 md:p-8 pt-16 md:pt-8">
            <div className="w-[7rem] h-[6px] rounded-full bg-primaryYellow mb-1"></div>
            <motion.h1 
            ref={ref}
            initial={{opacity : 0, transform : "translateX(-100%)"}}
            animate={isInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0 , transform : "translatex(-100%)"}}
            className="text-primaryYellow text-4xl font-bold tracking-wider w-min whitespace-nowrap">PRODUK KAMI</motion.h1>
            
            <center className="pb-8 relative pt-16 md:pt-8">
                <motion.div whileHover={{scale:1.2}} className="absolute top-[40%] left-0 md:left-1/4 w-[3rem] text-primaryYellow text-5xl" onClick={()=>changePage(-1)}>
                    <BsArrowLeftCircle />
                </motion.div>
                <motion.div whileHover={{scale:1.2}} className="absolute top-[40%] right-0 md:right-1/4 w-[3rem] text-primaryYellow text-5xl" onClick={()=>changePage(+1)}>
                    <BsArrowRightCircle />
                </motion.div>

                <div ref={protoRef} className="absolute top-1/2 text-3xl left-1/2"></div>
                
                <motion.div 
                    key={idx}
                    initial={{ x: 300, opacity: 0 }}
                    transition={isInviewProto ? {delay : .2} : {delay : 0}}
                    animate={isInviewProto ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
                    exit={{ x: -300, opacity: 0 }}>
                    <Image src={Produk[idx].productImage ?? ""} width={1920} height={1080} quality={100} alt="" className="w-[30vw] md:w-[20vw]"/>
                    <h2  className="text-primaryBlue font-bold text-xl md:text-3xl m-4 tracking-wider" >{Produk[idx].productName}</h2>
                    <div className="flex gap-2 align-center justify-center">
                        {
                        Produk[idx].productCategory.map((item,key)=>(
                            <div key={key} className="bg-primaryYellow text-primaryBlue rounded-sm px-4 font-bold tracking-wider text-sm md:text-lg">{item}</div>
                        ))
                        }
                    </div>
                    <p className="py-4 w-[90%] md:w-[65%] text-gray-700 text-sm md:text-lg">{Produk[idx].productDesc}</p>
                </motion.div>
              
            </center>

        </div>
    );
}