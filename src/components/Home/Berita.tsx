import { IoCalendar } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
//Data
import berita, { TypeBerita } from "@/data/dummy/berita";
import category from "@/data/updateCategory";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion , useInView} from "motion/react";

export default function Berita({bgcolor = "bg-filterBlue"}:{
  bgcolor? : string
}){
    const ref = useRef(null);
    const isInView = useInView(ref);

    const [idx, setIdx] = useState(0);

    const shuffleArray = (array:TypeBerita[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          // Pilih indeks acak dari 0 hingga i
          const j = Math.floor(Math.random() * (i + 1));
          
          // Tukar elemen array[i] dengan elemen array[j]
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
      
   
    useEffect(()=>{
        const inter = setInterval(()=>{
            shuffleArray(berita);
            console.log(berita[idx]);
            setIdx(Math.floor(Math.random() * berita.length));
        }, 5000);

        return ()=>clearInterval(inter);
    });

    return (
        <div className={`relative px-4 py-8 ${bgcolor}`}>
        <center>
            <h2 className="text-primaryYellow font-bold text-2xl text-center w-min whitespace-nowrap border-b-4 border-primaryYellow px-16 tracking-wide">Update Terbaru</h2>
            <div ref={ref} className="w-full grid grid-rows-[40%_40%_10%] md:grid-rows-none md:grid-cols-[33%_40%_20%] gap-[2%] h-[130vh] md:h-[70vh] mt-12 md:m-4 md:mt-12 " > 
              {/* Update utama */}
              <motion.div 
              initial={{opacity : 0, scale : 0}}
              animate={ isInView ? {opacity : 1, scale : 1} : {opacity : 0, scale : 0}}
              exit={{opacity : 0, scale : 0}}
              className={`relative w-full  h-full bg-cover bg-center`} >
                <Link key={idx} href={berita[idx].url??("/post/"+berita[idx].id)} className="text-white h-full w-full" >
                  <motion.div 
                      key={idx} 
                      initial={{transform:"translateX(100%)", opacity : 0}}
                      animate={{transform : "translateX(0%)",opacity : 1}}
                      exit={{transform : "translateX(-100%)", opacity : 1}}
                      className={`relative w-full  h-full bg-cover bg-center`}
                      style={{
                          backgroundImage: `url(${berita[idx]?.image })`,
                      }}>
                      <div key={idx}  className="text-white h-full w-full" >
                          <div className="absolute bottom-0 h-1/3 bg-darkBlue0_75 p-4">
                          <div className="flex gap-2 align-center mb-2">
                              <IoCalendar/>
                              <h2 className="text-[.7rem] font-bold">{new Date(berita[idx].date??"").toUTCString()}</h2>
                          </div>
                          <h2 className="font-bold text-left tracking-wider text-xl h-[5rem] overflow-hidden">{berita[idx].title}</h2>
                          </div>
                      </div>
                  </motion.div>
                </Link>
              </motion.div>
              

              {/* Berita List */}
              <div className="relative w-full grid grid-rows-2 grid-cols-2 gap-2">
                {
                  berita.filter((item,key)=>key>0 && key < 5).map((item,key)=>(
                    <motion.div
                        key={key +"-"+ idx} 
                        initial={{opacity : 0, scale : 0}}
                        animate={ isInView ? {opacity : 1, scale : 1} : {opacity : 0, scale : 0}}
                        exit={{opacity : 0, scale : 0}}
                        transition={isInView ?{delay : key * 0.2} : {delay : 0}}
                        className="relative h-full bg-cover object-center bg-center" 
                        >
                        <Link href={item.url??("/post/"+item.id)} >
                          <motion.div 
                              initial={{opacity : 0}}
                              animate={{opacity : 1}}
                              exit={{opacity:0.5}}
                              transition={{duration : 1 * (Math.random()*3)}}
                              className="relative h-full bg-cover object-center bg-center" 
                              style={{
                                  backgroundImage: `url(${item?.image ?? ""})`,
                              }} >
                              <div className="absolute bottom-0 h-[45%]  md:h-[40%] bg-darkBlue0_75 p-4">
                                  <div className="flex gap-2 align-center mb-1">
                                  <IoCalendar className="text-white text-[.5rem]"/>
                                  <span className="text-white text-[.5rem] font-bold">{new Date(item.date??"").toUTCString()}</span>
                                  </div>
                                  <h2 className="text-white font-bold text-left tracking-wider text-[.7rem] h-[3rem] overflow-hidden">{item.title}</h2>
                              </div>
                          </motion.div>
                        </Link>
                    </motion.div>
                   
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
                      <div key={key} className={`text-white text-left py-1 border-primaryYellow border-t-[1px] ${key>=category.length-1 ? "border-b-[1px]" :""}`}>
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
    );
}