import { Product } from "@/type/product";

const Produk:Product[] = [
    {
        productName : "Goerindam Cybersea",
        productDesc : "ASV, sebagai kapal tanpa awak yang mampu menjalankan berbagai tugas, dari survei laut hingga pengawasan perairan, menawarkan potensi besar untuk meningkatkan kapasitas surveilans dan manajemen di sektor kelautan.Hal ini didukung oleh kondisi demografi dan usia produktif sumber daya manusia di Indonesia yang memerlukan persiapan, pelatihan, dan cara berpikir kritis-logis untuk menghadapi kemajuan di masa depan.",
        productCategory : ["KKI", "Prototype", "ASV"],
        productImage : "/images/product/asv.png"
    },
    {
        productName : "Goerindam EcoWave",
        productDesc : "ERC adalah kapal prototipe yang sepenuhnya menggunakan tenaga listrik sebagai sumber utama penggeraknya. Kapal ini dikendalikan dari jarak jauh dan dirancang sebagai platform pengujian serta pengembangan teknologi kapal listrik. Dengan sistem propulsi berbasis motor listrik, ERC memiliki keunggulan dalam efisiensi energi, ramah lingkungan, serta minim kebisingan. Kapal ini menjadi bagian dari inovasi UKM Robotika UMRAH dalam eksplorasi teknologi kapal berbasis energi terbarukan..",
        productCategory : ["KKI", "Prototype", "ERC"],
        productImage : "/images/product/erc.png"
    },
    {
        productName : "Goerindam Velocity",
        productDesc : "FERC adalah kapal yang menggunakan mesin berbahan bakar sebagai sumber tenaga utama dan dikendalikan dari jarak jauh. Kapal ini dirancang untuk menghadirkan performa tinggi dengan daya dorong yang lebih besar, sehingga cocok untuk berbagai skenario operasional seperti eksplorasi maritim dan pengujian sistem kendali jarak jauh. FERC menjadi langkah penting dalam penelitian UKM Robotika UMRAH dalam integrasi sistem kontrol dan efisiensi bahan bakar pada kapal tak berawak.",
        productCategory : ["KKI", "Prototype", "FERC"],
        productImage : "/images/product/ferc.png"
    }
];

export {
    Produk
};
export type { Product };
