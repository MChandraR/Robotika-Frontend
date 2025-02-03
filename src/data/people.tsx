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
        desc : "Programmer AI dibidang Autonomus , Web Developer senang mencoba hal baru."
    },
    {
        id : 123,
        name : "Al Fitrah Saputra",
        role : "Wakil Ketua Umum/Elektrikal",
        desc : "Penggemar teknologi dengan fokus pada robotika dan mekanik. Sering bereksperimen dengan proyek DIY seperti robot dan kapal."
    },
    {
        id : 11411,
        name : "Muhammad Farhan",
        role : "Koordinator kompetisi",
        desc : "Bertanggung jawab sebagai koordinator kompetisi, spesialis dibidang naval architecture"
    },
    {
        id : 5414,
        name : "Sakinah Mansapira",
        role : "Team Media - Elektrikal",
        desc : "Bertanggung jawab dalam pembuatan dan pengelolaan konten media untuk Robotika UMRAH, termasuk desain grafis, dokumentasi, serta publikasi informasi di berbagai platform untuk mendukung kegiatan tim."
    },
    {
        id : 1142,
        name : "Ananda Muhar Nurdin",
        role : "Head of Designer",
        desc : "Kepala divisi designer, spesialis dibidang Naval Architecture."
    },
];

export default member;
export type {Member};