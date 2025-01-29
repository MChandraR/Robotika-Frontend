import { BsArrowLeftCircle , BsArrowRightCircle} from "react-icons/bs";
import {Product} from "@/data/produk";
import Image from "next/image";
import {motion} from "motion/react";
import { useState } from "react";

export default function Produk(){
    const [idx, setIdx] = useState(0);

    const changePage = (num:number)=>{
        setIdx( idx =>
            idx = (Product.length + idx + num) % Product.length
        );
    }
    
    return (
        <div className="bg-white p-4 md:p-8 pt-16 md:pt-8">
            <div className="w-[5rem] h-[4px] bg-primaryYellow mb-1"></div>
            <h1 className="text-primaryYellow text-3xl font-bold tracking-wider w-min whitespace-nowrap">PRODUK KAMI</h1>
            
            <center className="pb-8 relative pt-16 md:pt-8">
                <motion.div whileHover={{scale:1.2}} className="absolute top-[40%] left-0 md:left-1/4 w-[3rem] text-primaryYellow text-5xl" onClick={()=>changePage(-1)}>
                    <BsArrowLeftCircle />
                </motion.div>
                <motion.div whileHover={{scale:1.2}} className="absolute top-[40%] right-0 md:right-1/4 w-[3rem] text-primaryYellow text-5xl" onClick={()=>changePage(+1)}>
                    <BsArrowRightCircle />
                </motion.div>
                
                <motion.div 
                    key={idx}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}>
                    <Image src={Product[idx].productImage ?? ""} width={1920} height={1080} quality={100} alt="" className="w-[30vw] md:w-[20vw]"/>
                    <h2 className="text-primaryBlue font-bold text-xl md:text-3xl m-4 tracking-wider" >{Product[idx].productName}</h2>
                    <div className="flex gap-2 align-center justify-center">
                        {
                        Product[0].productCategory.map((item,key)=>(
                            <div key={key} className="bg-primaryYellow text-primaryBlue rounded-sm px-4 font-bold tracking-wider text-sm md:text-lg">{item}</div>
                        ))
                        }
                    </div>
                    <p className="py-4 w-[90%] md:w-[65%] text-gray-700 text-sm md:text-lg">{Product[idx].productDesc}</p>
                </motion.div>
              
            </center>

        </div>
    );
}