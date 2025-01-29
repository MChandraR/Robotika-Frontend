interface FAQ{
    id? : number,
    q? : string,
    ans? : string,
    expand? : boolean
}


const faq:FAQ[] = [
    {
        id : 1,
        q : "Bagaimana jika saya ingin menjadi bagian dari UKM ROBOTIKA UMRAH ?",
        ans : "Ya daftar !",
        expand : true
    },
    {
        id : 2,
        q : "Siapa saja yang dapat bergabung dengan UKM ROBOTIKA UMRAH ?",
        ans : "Ya daftar",
        expand : false
    },
    {
        id : 3,
        q : "Bagaimana ingin menjadi sponsor dari UKM ROBOTIKA UMRAH ?",
        ans : "Ya daftar",
        expand : false
    },
    {
        id : 4,
        q : "Apa saja program dan kegiatan selama menjadi anggota ?",
        ans : "Ya daftar",
        expand : false
    }
];

export default faq;
export type {FAQ};