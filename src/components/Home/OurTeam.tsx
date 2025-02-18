import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { LogoRobotika } from "@/assets/images/logo";
import { GrNext, GrPrevious } from "react-icons/gr";
import member from "@/data/people";

export default function OurTeam(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef);

    const [idx, setIdx] = useState(0);

    const changeIdx = (num:number)=>{
        setIdx((member.length + idx+num) % member.length);
    };

    const getIdx = (n=0)=>{
        return (member.length + idx+n) % member.length;
    };

    
    return (
        <div className="relative p-4 md:p-8 bg-white pb-8">
            <div className="w-[8rem] h-[6px] rounded-full bg-primaryYellow mb-1"></div>
            <motion.h1 
                ref={ref}
                initial={{opacity : 0, transform : "translateX(-100%)"}}
                animate={isInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0 , transform : "translatex(-100%)"}}
                className="z-10 text-primaryYellow text-4xl font-bold tracking-wider w-min whitespace-nowrap">MEET OUR PEOPLE</motion.h1>
            <div className="relative grid grid-cols-1 md:grid-cols-[40%_50%_10%] mt-4 md:mt-8">
                <div onClick={()=>changeIdx(1)} className="z-30 flex absolute left-0 item-center justify-center h-full">
                    <GrPrevious className="relative text-primaryBlue self-center text-xl h-min "/>
                </div>
                {/* List foto */}
                <div ref={cardRef} className="z-20 h-full absolute md:relative  w-[60%] md:w-full flex flex-wrap overflow-auto align-middle justify-sm md:justify-end ">
                    <motion.div 
                        key={"img0"+idx}
                        initial={{opacity : 0, transform : "translateX(-100%)"}}
                        animate={isCardInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0, transform : "translateX(-100%)"}}
                        exit={{opacity : 0, transform : "translateX(-100%)"}}
                        className="bg-white border-primaryYellow border-2 w-[40%] h-[20vh] md:h-[50vh]  self-center p-4 rounded-md">
                        <Image src={`/images/person/${member[getIdx(+1)].id}.png`} width={480} height={640} alt="profile" className="w-full h-full object-cover grayscale object-top"/>
                    </motion.div>

                    <motion.div 
                        key={"img1" + idx}
                        initial={{opacity : 0, transform : "translateX(-100%)"}}
                        animate={isCardInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0, transform : "translateX(-100%)"}}
                        transition={isCardInView ?{delay : .2}: {delay : 0}}
                        exit={{opacity : 0, transform : "translateX(-100%)"}}
                        className="bg-white border-primaryYellow border-2 w-[60%] h-[25vh] md:h-[60vh] p-4 self-center ml-[-2rem] rounded-md">
                        <Image src={`/images/person/${member[getIdx()].id}.png`} width={480} height={640} alt="profile" className="w-full h-full object-cover grayscale md:object-contain object-top"/>
                    </motion.div>
                </div>

                {/* Profile card */}
                <motion.div 
                    initial={{opacity : 0, transform : "translateX(100%)"}}
                    animate={isCardInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0, transform : "translateX(100%)"}}
                    exit={{opacity : 0, transform : "translateX(100%)"}}
                    className="z-10 md:left-auto md:relative h-[30vh] md:h-[65vh] ml-8  md:-ml-8">
                    <Image src={"/images/background/profile-card2.png"} alt="profile-card" width={640} height={480} className="rounded-sm w-full h-full" />
                    <div className="absolute top-0 left-0 p-4 md:p-12 pl-[50%] md:pl-14">
                        <div className="border-primaryYellow border-l-4 pl-3">
                            <motion.h1 
                            key={"name" +idx}
                            initial={{opacity : 0 , transform : "translateX(-100%)"}}
                            animate={{opacity : 1 , transform : "translateX(0)"}}
                            transition={{delay : 0 , duration : .2}}
                            exit={{opacity : 0 , transform : "translateX(-100%)"}}
                            className="text-black font-bold text-sm md:text-2xl tracking-wider">{member[idx].name}</motion.h1>
                            <motion.h1 
                            key={"role" +idx}
                            initial={{opacity : 0 , transform : "translateX(-100%)"}}
                            animate={{opacity : 1 , transform : "translateX(0)"}}
                            transition={{delay : .1 , duration : .2}}
                            exit={{opacity : 0 , transform : "translateX(-100%)"}}
                            className="text-black font-bold text-[.75rem] md:text-lg ">{member[idx].name??""}</motion.h1>
                        </div>
                        <motion.p 
                        key={"desc" +idx}
                        initial={{opacity : 0 , transform : "translateX(-100%)"}}
                        animate={{opacity : 1 , transform : "translateX(0)"}}
                        transition={{delay : .2 , duration : .2}}
                        exit={{opacity : 0 , transform : "translateX(-100%)"}}
                        className="text-black font-bold text-[.6rem] align-bottom h-full md:text-lg mt-20 drop-shadow-md drop-shadow-white md:mt-12 w-full md:w-2/3">{member[idx].desc}</motion.p>
                    </div>
                    <Image src={LogoRobotika} alt="robotika" className="absolute bottom-4 left-4 md:left-12 w-1/4"></Image>
                </motion.div>
               
               <div className="z-10 absolute md:relative -right-2 md:right-auto h-full flex items-center justify-center text-primaryBlue font-bold">
                {/* <span className="rotate-[90deg] text-lg">Next</span> */}
                <div className=" bg-dark0_15 py-4" onClick={()=>changeIdx(-1)}>
                    <GrNext className="font-bold text-4xl text-primaryYellow"/>
                </div>
               </div>
               <motion.div 
                    key={"img1" + idx}
                    initial={{opacity : 0, transform : "translateX(-100%)"}}
                    animate={isCardInView ? {opacity : 1, transform : "translateX(0)"} : {opacity : 0, transform : "translateX(-100%)"}}
                    transition={isCardInView ?{delay : .2}: {delay : 0}}
                    exit={{opacity : 0, transform : "translateX(-100%)"}}
                    className="hidden md:inline absolute right-8 bg-white border-primaryYellow border-2 w-[20%] h-[25vh] md:h-[50vh] p-4 self-center ml-[-2rem] rounded-md">
                    <Image src={`/images/person/${member[getIdx(-1)].id}.png`} width={480} height={640} alt="profile" className="w-full h-full object-cover grayscale md:object-contain object-top"/>
                </motion.div>
            </div>
       
        </div>
    );
}