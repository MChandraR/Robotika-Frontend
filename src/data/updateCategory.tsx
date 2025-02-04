interface UpdateCategory {
    category? : string,
    link? : string
}


const category:UpdateCategory[] = [
    {
        category : "Berita",
        link : "/update/berita",
    },
    {
        category : "Prestasi",
        link : "/update/prestasi",
    },
    {
        category : "Kegiatan",
        link : "/update/kegiatan",
    }
];

export default category;