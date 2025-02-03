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
        ans : "Kamu bisa mengajukan pendaftaran melalui link yang akan dibagikan pada pengumuman ketika pendaftaran dibuka, silahkan kunjungi link dan isi data diri dan cv mu.",
        expand : false
    },
    {
        id : 2,
        q : "Siapa saja yang dapat bergabung dengan UKM ROBOTIKA UMRAH ?",
        ans : "UKM Robotika UMRAH membuka peluang bagi seluruh mahasiswa aktif UMRAH yang ingin bergabung dan aktif dalam UKM",
        expand : false
    },
    {
        id : 3,
        q : "Bagaimana ingin menjadi sponsor dari UKM ROBOTIKA UMRAH ?",
        ans : "Tata cara pengajuan mengenai sponsorship dapat diakses pada link berikut <a className='text-primaryYellow' href='/sponsorship'>Sponsorship</a> atau dapat langsung menghubungi narahubung <a className='text-primaryYellow' href='https://wa.me/6281363639216'>+62 813-6363-9216</a> ",
        expand : false
    },
    {
        id : 4,
        q : "Apa saja program dan kegiatan selama menjadi anggota ?",
        ans : "Sebagai anggota aktif UKM Robotika UMRAH kamu berhak mendapat Pelatihan sesuai dengan Divisi atau Minat kamu, kamu juga bisa ikut dalam berbagai riset serta perlombaan baik Nasional maupun Internasional",
        expand : false
    }
];

export default faq;
export type {FAQ};