interface ProdukInterface{
    productName? : string,
    productDesc? : string,
    productCategory : string[],
    productImage? : string
}


const Product:ProdukInterface[] = [
    {
        productName : "Goerindam Cybersea - ASV",
        productDesc : "ASV, sebagai kapal tanpa awak yang mampu menjalankan berbagai tugas, dari survei laut hingga pengawasan perairan, menawarkan potensi besar untuk meningkatkan kapasitas surveilans dan manajemen di sektor kelautan.Hal ini didukung oleh kondisi demografi dan usia produktif sumber daya manusia di Indonesia yang memerlukan persiapan, pelatihan, dan cara berpikir kritis-logis untuk menghadapi kemajuan di masa depan.",
        productCategory : ["KKI", "Prototype", "ASV"],
        productImage : "/images/product/asv.png"
    }
];

export {
    Product
};
export type { ProdukInterface };
