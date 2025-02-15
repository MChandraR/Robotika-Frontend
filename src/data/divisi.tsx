import { AIProcessor, Shipping, Service, Troubleshooting, Design } from "@/assets/images/icon";
import { Divisi } from "@/type/divisi";

const divisi:Divisi[] = [
    {
        id : 1,
        name : "Mechanical",
        desc : "Berfokus pada perbaikan prototype", 
        long_desc : "Divisi mekanik bertanggung jawab atas desain dan konstruksi fisik dari kapal atau robot. Mereka memastikan bahwa struktur robot cukup kuat, ringan, dan mampu menahan berbagai kondisi lingkungan.",
        link : "/divisi/mekanik",
        image : Service,
        head_division : "Leo Anarkis Sakti",
        head_division_id : 130,
        function : [
            "Merancang kerangka dan bodi robot/kapal.",
            "Memilih material yang sesuai (aluminium, plastik, serat karbon, dll.) untuk bobot dan kekuatan optimal.",
            "Memasang dan menyusun komponen mekanik seperti motor, gearbox, roda, baling-baling, lengan robot, dsb.",
            "Menyusun sistem pergerakan (roda, propulsi, aktuator, engsel mekanik, dll.)",
            "Melakukan uji coba mekanis untuk memastikan struktur kuat dan tahan lama."
        ]
    },
    {
        id : 2, 
        name : "Electrical",
        desc : "Berfokus pada perakitan dan pemasangan komponen",
        long_desc : "Divisi elektrikal menangani semua komponen elektronik dan sistem kelistrikan dalam robot/kapal. Mereka memastikan bahwa semua sensor, aktuator, dan sistem daya bekerja dengan baik.",
        link : "/divisi/elektrikal",
        image : Troubleshooting,
        head_division : "Fendi Gustiawan",
        head_division_id : 531101,
        function : [
            "Mendesain sirkuit elektronik untuk sistem kontrol dan sensor.",
            "Memilih dan mengintegrasikan komponen listrik seperti mikrokontroler, motor driver, sensor, dan baterai.",
            "Memastikan catu daya sesuai dengan kebutuhan sistem tanpa menyebabkan overvoltage atau overcurrent.",
            "Menghubungkan berbagai sensor (GPS, IMU, kamera, dll.) ke sistem pemrosesan data.",
            "Melakukan troubleshooting dan perbaikan jika terjadi masalah kelistrikan."
        ]
    },
    {
        id : 3,
        name : "Drafter",
        desc : "Berfokus pada pembuatan desain dan lambung kapal",
        long_desc : "Drafter bertanggung jawab dalam membuat gambar teknis dan dokumentasi desain yang digunakan oleh tim mekanik dan elektrikal.",
        link : "/divisi/drafter",
        image : Shipping,
        head_division : "Ramadhan Eka Putra",
        head_division_id : 340411,
        function : [
            "Membuat gambar teknis untuk produksi dan perakitan komponen robot.",
            "Menyusun dokumentasi spesifikasi teknis yang digunakan oleh tim mekanik dan elektrikal.",
            "Menghasilkan blueprint atau model 3D yang memudahkan pemahaman desain.",
            "Melakukan revisi desain berdasarkan hasil uji coba."
        ]
    },
    {
        id : 4,
        name : "Programmer",
        desc : "Berfokus mengembangkan model AI dan program pada sistem tertanam",
        long_desc : "Divisi programmer bertanggung jawab atas pemrograman kontrol dan kecerdasan buatan (AI) robot atau kapal.",
        link : "/divisi/programmer",
        image : AIProcessor,
        head_division : "Muhammad Chandra Ramadhan",
        head_division_id : 2201020103,
        function : [
            "Mengembangkan firmware untuk ESP32, Arduino, Raspberry Pi, atau mikrokontroler lainnya.",
            "Mengimplementasikan algoritma navigasi dan kontrol (misalnya PID, pathfinding, SLAM, dll.).",
            "Mengolah data sensor GPS, IMU, lidar, kamera, dll. untuk pengambilan keputusan otomatis.",
            "Membuat sistem komunikasi Wi-Fi, Bluetooth, atau komunikasi serial antara berbagai komponen.",
            "Mengembangkan interface pengguna (misalnya aplikasi berbasis web atau mobile untuk memantau robot).",
            "Menggunakan AI atau machine learning jika diperlukan (misalnya untuk computer vision atau deteksi objek)."
        ]
    },
    {
        id : 5,
        name : "Design",
        desc : "Mendesain aspek visual dan ergonomi dari robot atau kapal.",
        long_desc : "Divisi designer bertanggung jawab untuk mendesain aspek visual dan ergonomi dari robot atau kapal. Mereka fokus pada estetika, antarmuka pengguna (UI), dan pengalaman pengguna (UX), sehingga perangkat atau sistem yang dibuat tidak hanya fungsional, tetapi juga mudah digunakan dan menarik secara visual.",
        link : "/divisi/designer",
        image : Design,
        head_division : "Ananda Muhar Nurdin",
        head_division_id : 1142,
        function : [
            "Mendesain tampilan fisik robot/kapal, termasuk penataan bentuk, warna, dan detail eksterior.",
            "Membuat desain antarmuka pengguna (UI) untuk aplikasi kontrol, baik itu aplikasi mobile atau berbasis web, yang memungkinkan pengendalian atau pemantauan robot/kapal secara intuitif.",
            "Menyusun desain grafis dan ikonografi yang digunakan pada aplikasi atau perangkat keras (misalnya layar sentuh di kapal atau robot).",
            "Bekerja sama dengan tim mekanik untuk memastikan desain visual cocok dengan struktur dan fungsionalitas robot.",
            "Merancang elemen-elemen ergonomis yang memudahkan penggunaan dan interaksi pengguna dengan robot atau kapal.",
            "Membuat rendering 3D untuk visualisasi desain atau presentasi."
        ]
    }
];

export default divisi;
export type {Divisi}