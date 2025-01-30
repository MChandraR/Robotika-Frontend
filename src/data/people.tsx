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
        id : 174,
        name : "Rhamadita Oktavia",
        role : "Bendahara/Elektrikal",
        desc : "Bendahara dan Elektrikal Robotika Umrah"
    },
    {
        id : 2201020103,
        name : "Muhammad Chandra Ramadhan",
        role : "Head of Programmer",
        desc : "Programmer AI dibidang Autonomus , Web Developer."
    },
    {
        id : 123,
        name : "Al Fitrah Saputra",
        role : "Wakil Ketua Umum/Elektrikal",
        desc : "Wakil Ketua umum Robotika Umrah"
    }
];

export default member;
export type {Member};