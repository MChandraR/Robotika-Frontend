import {motion} from "motion/react";
import { useState } from "react";

export default function Swal(
    {visible=false, setVisibility = useState, text=""}:
    {
        visible : boolean, 
        setVisibility : React.Dispatch<React.SetStateAction<boolean>>
        text? : string
    }){
    return (
        <motion.div 
        key={visible+"1"}
        initial={{scale : 0}}
        animate={visible ? {scale : 1} : {scale : 0}}
    
        className={`z-50 ${visible ? "flex" : "hidden"} top-0 h-[100dvh] item-center w-full left-0 flex align-center fixed justify-center`}>
            <div className="bg-primaryYellow rounded-lg p-8 self-center flex flex-col">
                <div className="text-5xl text-black self-center">
                    {text}
                </div>
                <div 
                    onClick={()=>setVisibility(!visible)} 
                    className="bg-primaryYellow w-fit self-center">
                    Close
                </div>
            </div>
        </motion.div>
    );
}