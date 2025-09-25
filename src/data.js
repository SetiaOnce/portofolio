import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import iconvscode from "/assets/tools/vscode.png";
import iconbootstrap from "/assets/tools/bootstrap.png";
import iconjavascript from "/assets/tools/js.png";
import iconjquery from "/assets/tools/jquery.png";
import iconnodejs from "/assets/tools/nodejs.png";
import icongithub from "/assets/tools/github.png";
import iconcanva from "/assets/tools/canva.png";
import iconhtml from "/assets/tools/html.png";
import iconcss from "/assets/tools/css.png";
import iconphp from "/assets/tools/php.png";
import iconpostgresql from "/assets/tools/posgresql.png";
import iconmysql from "/assets/tools/mysql.png";
import iconlaravel from "/assets/tools/laravel.png";
import iconphotoshop from "/assets/tools/photoshop.png";
import iconpython from "/assets/tools/python.png";
import icondjango from "/assets/tools/django.png";
import iconultralytics from "/assets/tools/ultralytics.png";
import iconopencv from "/assets/tools/opencv.png";
import iconpytorch from "/assets/tools/pytorch.png";
import iconleaflet from "/assets/tools/leaflet-logo.png";

export const listTools = [
  // =========================
  // 1. Editor & Repository
  // =========================
  {
    id: 1,
    gambar: iconvscode,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: icongithub,
    nama: "GitHub",
    ket: "Repository",
    dad: "200",
  },

  // =========================
  // 2. Frontend Development
  // =========================
  {
    id: 3,
    gambar: iconhtml,
    nama: "HTML",
    ket: "Markup Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: iconcss,
    nama: "CSS",
    ket: "Styling Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: iconjavascript,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: iconjquery,
    nama: "jQuery",
    ket: "JavaScript Library",
    dad: "600",
  },
  {
    id: 7,
    gambar: iconbootstrap,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "700",
  },

  // =========================
  // 3. Backend Development
  // =========================
  {
    id: 8,
    gambar: iconphp,
    nama: "PHP",
    ket: "Programming Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: iconlaravel,
    nama: "Laravel",
    ket: "PHP Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: iconnodejs,
    nama: "Node.js",
    ket: "JavaScript Runtime",
    dad: "1000",
  },
  {
    id: 11,
    gambar: iconpython,
    nama: "Python",
    ket: "Programming Language",
    dad: "1100",
  },
  {
    id: 12,
    gambar: icondjango,
    nama: "Django",
    ket: "Python Framework",
    dad: "1200",
  },

  // =========================
  // 4. Database
  // =========================
  {
    id: 13,
    gambar: iconmysql,
    nama: "MySQL",
    ket: "Relational Database",
    dad: "1300",
  },
  {
    id: 14,
    gambar: iconpostgresql,
    nama: "PostgreSQL",
    ket: "Relational Database",
    dad: "1400",
  },

  // =========================
  // 5. AI & Computer Vision
  // =========================
  {
    id: 15,
    gambar: iconpytorch,
    nama: "PyTorch",
    ket: "Deep Learning Framework",
    dad: "1500",
  },
  {
    id: 16,
    gambar: iconopencv,
    nama: "OpenCV",
    ket: "Computer Vision Library",
    dad: "1600",
  },
  {
    id: 17,
    gambar: iconultralytics,
    nama: "Ultralytics",
    ket: "Vision AI Toolkit (YOLO)",
    dad: "1700",
  },

  // =========================
  // 6. Design Tools
  // =========================
  {
    id: 18,
    gambar: iconphotoshop,
    nama: "Photoshop",
    ket: "Graphic Design",
    dad: "1800",
  },
  {
    id: 19,
    gambar: iconcanva,
    nama: "Canva",
    ket: "Design Tool",
    dad: "1900",
  },
  // =========================
  // 6. Design Tools
  // =========================
  {
    id: 18,
    gambar: iconleaflet,
    nama: "Leaflet",
    ket: "Geolocation",
    dad: "1800",
  },
];


import Proyek1 from "/assets/proyek/Smartcampus.jpg";
import Proyek2 from "/assets/proyek/e-library.jpg";
import Proyek3 from "/assets/proyek/asset-management.jpg";
import Proyek4 from "/assets/proyek/rental.jpg";
import Proyek5 from "/assets/proyek/trackingtaruna.jpg";
import Proyek6 from "/assets/proyek/portalblu.jpg";
import Proyek7 from "/assets/proyek/railroad.jpg";
import Proyek8 from "/assets/proyek/timbangan.jpg";
import Proyek9 from "/assets/proyek/streamingcctv.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Portal SmartCampus",
    subtitle: "Portal SmartCampus PPI Madiun & POLTRADA Bali adalah sistem ...",
    fullDescription:"Portal SmartCampus PPI Madiun & POLTRADA Bali adalah sistem terintegrasi yang mempermudah pengelolaan layanan akademik, ketarunaan, administrasi, keuangan, perpustakaan, serta pengawasan kampus. Portal ini menyediakan satu akses pusat bagi mahasiswa, dosen, dan staf untuk memperoleh informasi penting dengan antarmuka yang responsif dan user-friendly.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://smartcampus.poltradabali.ac.id/",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "E-Library",
    subtitle: "Perpustakaan PPI Madiun & POLTRADA Bali adalah fasilitas perpustaka...",
    fullDescription:"Perpustakaan PPI Madiun & POLTRADA Bali adalah fasilitas perpustakaan yang menyediakan layanan sirkulasi, keanggotaan, koleksi jurnal & majalah, dan pustaka bebas. Tersedia pula fasilitas multimedia untuk mendukung penelitian dan belajar mahasiswa & dosen. Dengan akses digital (e-library) dan koleksi fisik yang lengkap, perpustakaan ini mendukung proses akademik agar lebih mudah, cepat, dan nyaman.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://perpustakaan.ppi.ac.id",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Asset Management",
    subtitle: "Aset PPI Madiun & POLTRADA Bali adalah sistem pengelolaan inventaris ...",
    fullDescription:"Aset PPI Madiun & POLTRADA Bali adalah sistem pengelolaan inventaris dan aset PPI Madiun & POLTRADA Bali. Melalui portal ini, anggota kampus dapat melihat, memesan, dan memonitor penggunaan aset secara digital — mulai dari ruang kelas, peralatan, sampai fasilitas lain. Dengan antarmuka yang terorganisir dan akses terpusat, sistem ini meningkatkan transparansi penggunaan aset dan efisiensi operasional institusi.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://aset.ppi.ac.id/login",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Rental Application",
    subtitle: "SIBLU PPI Madiun & POLTRADA Bali adalah sistem digital untuk layanan...",
    fullDescription:"SIBLU PPI Madiun & POLTRADA Bali adalah sistem digital untuk layanan rental kampus yang memungkinkan mahasiswa, dosen, dan staf memesan & menggunakan fasilitas kampus seperti kendaraan, ruangan, atau peralatan pendukung lainnya. Melalui portal ini, pengguna dapat melihat ketersediaan aset rental, membuat reservasi, dan memonitor status penggunaan secara transparan. Dengan antarmuka terpusat, sistem ini mendukung efisiensi operasional dan meningkatkan kenyamanan dalam pemanfaatan sumber daya kampus.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://siblu.poltradabali.ac.id",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Student Tracking",
    subtitle: "Tracking Taruna PPI Madiun & POLTRADA Bali adalah sistem berbasis ...",
    fullDescription:"Tracking Taruna PPI Madiun & POLTRADA Bali adalah sistem berbasis web dengan dukungan geolocation untuk memantau lokasi, aktivitas, dan data akademik taruna secara terintegrasi dan real-time.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://trackingtaruna.ppi.ac.id/",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Portal BLU",
    subtitle: "UJIDJKA adalah portal layanan online Balai Pengujian Perkeretaapian ...",
    fullDescription:"UJIDJKA adalah portal layanan online Balai Pengujian Perkeretaapian Kementerian Perhubungan yang menyediakan informasi pengujian sarana dan prasarana perkeretaapian, serta kompetensi SDM. Portal ini memfasilitasi transparansi regulasi, publikasi, dan data teknis pengujian dalam satu akses publik.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://ujidjka.kemenhub.go.id/",
    dad: "600",
  },
  {
    id: 7,
    image: Proyek7,
    title: "Railroad Crossing Map",
    subtitle: "Peta digital perlintasan sebidang kereta api...",
    fullDescription:"Peta digital perlintasan sebidang kereta api. Berbasis web dan geolocation, sehingga pengguna bisa melihat posisi perlintasan secara real-time fungsinya untuk identifikasi lokasi perlintasan resmi maupun liar, mendukung keselamatan dengan memberi informasi titik rawan kecelakaan serta memonitoring & analisa kepadatan kendaraan di sekitar perlintasan.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
    dad: "600",
  },
  {
    id: 8,
    image: Proyek8,
    title: "App Vehicle Weighing",
    subtitle: "Peta digital perlintasan sebidang kereta api...",
    fullDescription:"Peta digital perlintasan sebidang kereta api. Berbasis web dan geolocation, sehingga pengguna bisa melihat posisi perlintasan secara real-time fungsinya untuk identifikasi lokasi perlintasan resmi maupun liar, mendukung keselamatan dengan memberi informasi titik rawan kecelakaan serta memonitoring & analisa kepadatan kendaraan di sekitar perlintasan.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
    dad: "600",
  },
  {
    id: 9,
    image: Proyek9,
    title: "App Streaming CCTV Online",
    subtitle: "Peta digital perlintasan sebidang kereta api...",
    fullDescription:"Peta digital perlintasan sebidang kereta api. Berbasis web dan geolocation, sehingga pengguna bisa melihat posisi perlintasan secara real-time fungsinya untuk identifikasi lokasi perlintasan resmi maupun liar, mendukung keselamatan dengan memberi informasi titik rawan kecelakaan serta memonitoring & analisa kepadatan kendaraan di sekitar perlintasan.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
    dad: "600",
  },
];