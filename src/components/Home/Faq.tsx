import { GoChevronRight, GoChevronDown  } from "react-icons/go";
import { useState } from "react";
import faq from "@/data/faq";
import parse from 'html-react-parser';

export default function Faq(){
    const [FaQ, setFaQ] = useState(faq);
    
    const openFaQ = async (idx:number)=>{
        setFaQ(prevFaQ => 
            prevFaQ.map((item, i) => 
                i === idx ? { ...item, expand: !item.expand } : item
            )
        );
    };

    return (
     <div className="bg-white p-4 md:p-8 pb-10 md:pb-16">
        <div className="w-[5rem] h-[4px] bg-primaryYellow mb-1"></div>
        <h1 className="text-primaryYellow text-3xl font-bold tracking-wider w-min whitespace-nowrap">FAQ</h1>
        {/* List pertanyaan */}
        <div className="grid grid-cols-1 mt-4 md:mt-8">
          {FaQ.map((item,key)=>(
            <div key={key} >
              <div className="flex  text-primaryBlue font-bold align-center text-md md:text-xl pr-4 border-gray-300 border-b-2 w-full py-4 cursor-pointer" onClick={()=>openFaQ(key)}>
                <p className="w-full tracking-wide">{item.q}</p>
                {item.expand ? <GoChevronDown className="text-3xl"/> : <GoChevronRight className="text-3xl"/>}
                
              </div>
              {item.expand ? <p className="tracking-wider text-gray-600 font-bold py-4 text-sm">{parse(item.ans??"")}</p> : ""}
            </div>
          ))}
        </div>
      </div>
    );
}