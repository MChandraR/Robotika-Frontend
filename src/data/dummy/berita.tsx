interface TypeBerita{
    id? : number,
    date? : string,
    title? : string,
    image : string,
    url? : string
}

const berita:TypeBerita[] = [
    {
        id : 1,
        date : "2025/09/11 09:00:00.00",
        title : "Selamat kepada Raja Partahi Hutasoit atas terpilihnya sebagai Ketua Umum UKM ROBOTIKA UMRAH Periode 2025",
        image : "/images/post/image_1.png",
        url : "/berita"
    },
    {
        id : 2,
        date : "2025/09/11 09:00:00.00",
        title : "🎆 Selamat Tahun Baru 2025! 🎆UKM Robotika UMRAH mengucapkan: Semoga tahun baru ini membawa harapan baru ",
        image : "/images/post/image_2.png",
        url : "/berita"
    },
    {
        id : 3,
        date : "2025/09/11 09:00:00.00",
        title : "Segenap Keluarga Besar Robotika Universitas Maritim Raja Ali Haji mengucapkan, Selamat Hari Peringatan G30S/PKI, 30 September 2024. Sejarah adalah pelajaran berharga. G30S/PKI mengingatkan kita akan pentingnya menjaga persatuan, kesetiaan pada Pancasila, dan kewaspadaan terhadap segala bentuk ancaman terhadap kedaulatan bangsa. Mari bersama memperkokoh semangat kebangsaan demi masa depan Indonesia yang lebih damai dan bersatu. Badan Pengurus Harian Robotika Universitas Maritim Raja Ali Haji 2024/2025",
        image : "/images/post/image_3.png",
        url : "/berita"
    },
    {
        id : 4,
        date : "2025/09/11 09:00:00.00",
        title : "🎄 Selamat Natal 2024! 🎄UKM Robotika UMRAH mengucapkan: &quote;Semoga damai, kasih, dan sukacita Natal senantiasa menyertai kita semua. Mari kita rayakan momen penuh kehangatan ini dengan berbagi kebahagiaan dan cinta kepada sesama. 🌟&quote;",
        image : "/images/post/image_4.png",
        url : "/berita"
    },
    {
        id : 5,
        date : "2025/09/11 09:00:00.00",
        title : "Segenap Keluarga Besar Robotika Universitas Maritim Raja Ali Haji mengucapkan, Selamat Hari Kesaktian Pancasila, 01 Oktober 2024. Mari kita perkuat komitmen terhadap Pancasila sebagai dasar negara, meneguhkan persatuan dan kesatuan bangsa, serta melawan segala bentuk ideologi yang bertentangan. Bersama, kita jaga dan lestarikan nilai-nilai luhur Pancasila untuk generasi mendatang. Badan Pengurus Harian Robotika Universitas Maritim Raja Ali Haji 2024/2025",
        image : "/images/post/image_5.png",
        url : "/berita"
    }
];

export default berita;

export type {TypeBerita};