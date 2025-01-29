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
        title : "Selamat kepada Raja Partahi Hutasoit atas terpilihnya sebagai Ketua Umum UKM ROBOTIKA UMRAH Periode 2025",
        image : "/images/post/image_3.png",
        url : "/berita"
    },
    {
        id : 4,
        date : "2025/09/11 09:00:00.00",
        title : "Selamat kepada Raja Partahi Hutasoit atas terpilihnya sebagai Ketua Umum UKM ROBOTIKA UMRAH Periode 2025",
        image : "/images/post/image_4.png",
        url : "/berita"
    },
    {
        id : 5,
        date : "2025/09/11 09:00:00.00",
        title : "Selamat kepada Raja Partahi Hutasoit atas terpilihnya sebagai Ketua Umum UKM ROBOTIKA UMRAH Periode 2025",
        image : "/images/post/image_5.png",
        url : "/berita"
    }
];

export default berita;

export type {TypeBerita};