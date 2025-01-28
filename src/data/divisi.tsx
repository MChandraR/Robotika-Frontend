import { AIProcessor, Shipping, Service, Troubleshooting } from "@/assets/images/icon";

const divisi = [
    {
        id : 1,
        name : "Mekanik",
        desc : "Berfokus pada perbaikan prototype", 
        link : "/divisi/mekanik",
        image : Service
    },
    {
        id : 2, 
        name : "Elektrikal",
        desc : "Berfokus pada perakitan dan pemasangan komponen",
        link : "/divisi/elektrikal",
        image : Troubleshooting
    },
    {
        id : 3,
        name : "Drafter",
        desc : "Berfokus pada pembuatan desain dan lambung kapal",
        link : "/divisi/drafter",
        image : Shipping
    },
    {
        id : 4,
        name : "Programmer",
        desc : "Berfokus mengembangkan model AI dan program pada sistem tertanam",
        image : AIProcessor
    }
];

export default divisi;