import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { LogoRobotika } from "@/assets/images/logo";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function OurTeam(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef);
    
    return (
        <div className="relative p-4 md:p-8 bg-white">
            <div className="w-[5rem] h-[4px] bg-primaryYellow mb-1"></div>
            <motion.h1 
                ref={ref}
                initial={{opacity : 0, transform : "translateX(-100%)"}}
                animate={isInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0 , transform : "translatex(-100%)"}}
                className="text-primaryYellow text-3xl font-bold tracking-wider w-min whitespace-nowrap">MEET OUR PEOPLE</motion.h1>
            <div className="relative grid grid-cols-[40%_50%_10%] mt-4 md:mt-8">
                <div className="flex absolute left-0 item-center justify-center h-full">
                    <GrPrevious className="relative text-primaryBlue self-center text-xl h-min "/>
                </div>
                {/* List foto */}
                <div className="z-10 flex flex-wrap overflow-auto w-full align-middle justify-end ">
                    <motion.div 
                        ref={cardRef}
                        initial={{opacity : 0, transform : "translateX(-100%)"}}
                        animate={isCardInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0, transform : "translateX(-100%)"}}
                        exit={{opacity : 0, transform : "translateX(-100%)"}}
                        className="bg-white border-primaryYellow border-2 w-[40%] h-[20vh] md:h-[50vh]  self-center p-4 rounded-md">
                        <Image src={"/images/person/raja_partahi.png"} width={480} height={640} alt="profile" className="w-full h-full object-contain grayscale"/>
                    </motion.div>

                    <motion.div 
                        initial={{opacity : 0, transform : "translateX(-100%)"}}
                        animate={isCardInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0, transform : "translateX(-100%)"}}
                        transition={isCardInView ?{delay : .2}: {delay : 0}}
                        exit={{opacity : 0, transform : "translateX(-100%)"}}
                        className="bg-white border-primaryYellow border-2 w-[60%] h-[25vh] md:h-[60vh] p-4 self-center ml-[-2rem] rounded-md">
                        <Image src={"/images/person/chandra.png"} width={480} height={640} alt="profile" className="w-full h-full object-contain grayscale"/>
                    </motion.div>
                </div>

                {/* Profile card */}
                <motion.div 
                    initial={{opacity : 0, transform : "translateX(100%)"}}
                    animate={isCardInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0, transform : "translateX(100%)"}}
                    exit={{opacity : 0, transform : "translateX(100%)"}}
                    className="z-0 h-[30vh] md:h-[65vh] relative -ml-20 md:-ml-8">
                    <Image src={"/images/background/profile-card2.png"} alt="profile-card" width={640} height={480} className="rounded-sm w-full h-full" />
                    <div className="absolute top-0 left-0 p-4 md:p-12 pl-20 md:pl-14">
                        <div className="border-primaryYellow border-l-4 pl-3">
                            <h2 className="text-black font-bold text-sm md:text-2xl tracking-wider">Muhammad Chandra Ramadhan</h2>
                            <h2 className="text-black font-bold text-lg ">Programmer</h2>
                        </div>
                        <p className="text-black font-bold mt-12 w-2/3">Programmer AI dibidang Autonomus , Web Developer.</p>
                    </div>
                    <Image src={LogoRobotika} alt="robotika" className="absolute bottom-4 left-12 w-1/4"></Image>
                </motion.div>
               
               <div className="flex items-center justify-center text-primaryBlue font-bold">
                {/* <span className="rotate-[90deg] text-lg">Next</span> */}
                <div className=" bg-dark0_15 py-4">
                    <GrNext className="font-bold text-4xl"/>
                </div>
               </div>
            </div>
       
        </div>
    );
}