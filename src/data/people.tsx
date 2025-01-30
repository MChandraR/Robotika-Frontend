interface Member{
    id : number,
    name : string,
    role : string,
    desc : string
}

const member:Member[] = [
    {
        id : 2201010012,
        name : "Raja Partahi Hutasoit",
        role : "Ketua Umum/Elektrikal",
        desc : "Ketua umum Robotika Umrah"
    },
    {
        id : 2201020103,
        name : "Muhammad Chandra Ramadhan",
        role : "Programmer",
        desc : "Programmer AI dibidang Autonomus , Web Developer."
    }
];

export default member;
export type {Member};