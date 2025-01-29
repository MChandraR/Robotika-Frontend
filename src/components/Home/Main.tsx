import { Robot } from "@/assets/images/icon";
import { LogoRobotika,} from "@/assets/images/logo";
import { Banner1} from "@/assets/images/background";
import { GoChevronRight, GoChevronLeft  } from "react-icons/go";
import {motion} from "motion/react";

import Image from "next/image";


export default function Main(){
    const transition = {
    };
    return (
        <div className="bg-white relative text-primaryBlue py-6 p-4 md:p-6 w-full">
          
          <div className="flex">
            <h1 className="font-bold text-2xl" >Robotika UMRAH</h1>
            <Image src={Robot} alt="robot" width={35} height={25} />
          </div>
        
          <div className="bg-white mt-4 py-8 relative h-[70vh] md:h-[80vh]">
            {
            //Gambar banner
            <motion.div className="hidden" transition={transition} animate={{display:"block"}}>
                <Image className="absolute h-[65vh] md:h-[75vh] object-cover top-0 left-0 w-full rounded-tl-lg rounded-tr-3xl rounded-bl-3xl" src={Banner1} alt="banner"/>
            </motion.div>
             
            }
            
            {
            //Filter 
            <motion.div  className="absolute h-[65vh] md:h-[75vh] object-cover top-0 left-0 w-full bg-filterBlue rounded-tl-lg rounded-tr-3xl rounded-bl-3xl">

            </motion.div>
             
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
    );
}