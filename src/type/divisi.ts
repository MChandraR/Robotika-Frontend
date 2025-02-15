import { StaticImageData } from "next/image";

export interface Divisi{
    id : number,
    name : string,
    desc : string,
    long_desc : string,
    link : string,
    image : StaticImageData,
    head_division : string,
    head_division_id : number,
    function : string[]
}
