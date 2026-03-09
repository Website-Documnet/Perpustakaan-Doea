// Data Buku
let books = [
    {
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        year: "2005",
        category: "fiksi Roman",
        desc: "kisah inspiratif 10 anak miskin di Belitung yang berjuang keras untuk mendapatkan pendidikan di SD Muhammadiyah yang terancam ditutup, dengan semangat persahabatan, kegigihan, dan didukung oleh guru-guru yang berdedikasi seperti Bu Muslimah, menghadapi keterbatasan ekonomi dan kondisi sekolah yang memprihatinkan untuk meraih impian mereka.",
        image: "assets/Andrea Hirata - Laskar Pelangi_0000.jpg",
        readUrl: "https://kalteng.kemenag.go.id/file/majalah/1613240554837.pdf",
        pdfUrl: "https://kalteng.kemenag.go.id/file/majalah/1613240554837.pdf"
    },
    {
        title: "Bumi Manusia",
        author: "Pramoedya Ananta Toer",
        year: "1980",
        category: "Novel Fiksi",
        desc: "perjalanan dan kehidupan Minke, seorang pribumi cerdas di masa kolonial Belanda awal abad ke-20, yang berjuang melawan diskriminasi, membangun identitas, cinta dengan Annelies, dan kesadaran nasionalisme di tengah penindasan sosial dan politik, serta menyoroti isu kemanusiaan dan pendidikan sebagai jalan perubahan.",
        image: "assets/bumi manusia.jpg.jpeg",
        readUrl: "https://www.scribd.com/document/441276213/BUMI-MANUSIA-pdf",
        pdfUrl: "https://www.scribd.com/document/441276213/BUMI-MANUSIA-pdf"
    },
    {
        title: "Filosofi Teras",
        author: "Henry Manampiring",
        year: "2019",
        category: "Non-fiksi",
        desc: "filsafat Yunani-Romawi kuno yang bisa membantu kita mengatasi emosi negatif dan menghasilkan mental yang tangguh dalam menghadapi naik-turunnya kehidupan.",
        image: "assets/filososfi teras.jpg.jpeg",
        readUrl: "https://www.scribd.com/document/407689652/Filosofi-teras-pdf",
        pdfUrl: "https://www.scribd.com/document/407689652/Filosofi-teras-pdf"
    },
    {
        title: "Cantik Itu Luka",
        author: "Eka Kurniawan",
        year: "2002",
        category: "Fiksi sastra",
        desc: "kisah tragis Dewi Ayu, seorang wanita cantik keturunan Indo, dan keluarganya di Indonesia pada masa kolonial hingga pasca-kemerdekaan, di mana kecantikannya justru menjadi kutukan yang membawanya pada penderitaan, prostitusi, dan kekerasan, serta bagaimana luka dan sejarah mewaris secara turun-temurun melalui anak-anaknya, mengkritik patriarki dan ketidakadilan gender",
        image: "assets/cantik itu luka.jpg.jpeg",
        readUrl: "https://www.scribd.com/document/516564682/Eka-Kurniawan-Cantik-Itu-Luka",
        pdfUrl: "https://www.scribd.com/document/516564682/Eka-Kurniawan-Cantik-Itu-Luka"
    }
];

// Data Buku Sekolah per Kelas
let booksByKelas = {
    "X": [
        {
            title: "Agama Islam Kelas X",
            author: "Kurikulum 2021",
            desc: "Buku teks Pendidikan Agama Islam untuk siswa SMA/SMK kelas X",
            image: "assets/agama lustrasi_keberagaman_.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Islam-BS-KLS-X.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Islam-BS-KLS-X.pdf"
        },
        {
            title: "Bahasa Indonesia Kelas X",
            author: "Kurikulum 2021",
            desc: "Buku bahasa Indonesia untuk siswa SMA/SMK kelas X",
            image: "assets/bahasa-indonesia-menjadi-bahasa-persatuan-fUfy9XucBv.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Bahasa_Indonesia_BS_KLS_X_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Bahasa_Indonesia_BS_KLS_X_Rev.pdf"
        },
        {
            title: "Bahasa Inggris Kelas X",
            author: "Kurikulum 2021",
            desc: "Buku bahasa Inggris untuk siswa SMA/SMK kelas X",
            image: "assets/Manfaat-Belajar-Bahasa-Inggris-untuk-Pelajar-yang-Wajib-Diketahui.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/k13/bukusiswa/Kelas%20X%20Bahasa%20Inggris%20BS%20press.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/k13/bukusiswa/Kelas%20X%20Bahasa%20Inggris%20BS%20press.pdf"
        },
        {
            title: "Pendidikan Pancasila Kelas X",
            author: "Kurikulum 2021",
            desc: "Buku Pendidikan Pancasila untuk siswa SMA/SMK kelas X",
            image: "assets/pendidikan pancasila.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Pendidikan-Pancasila-BS-KLS-X.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Pendidikan-Pancasila-BS-KLS-X.pdf"
        },
        {
            title: "Matematika Kelas X",
            author: "Kurikulum 2021",
            desc: "Buku matematika untuk siswa SMA/SMK kelas X",
            image: "assets/matematika.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika_BS_KLS_X_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika_BS_KLS_X_Rev.pdf"
        },
        {
            title: "IPA Kelas X",
            author: "Kurikulum 2021",
            desc: "Buku Ilmu Pengetahuan Alam untuk siswa SMA/SMK kelas X",
            image: "assets/ipa.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/IPA_BS_KLS_X_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/IPA_BS_KLS_X_Rev.pdf"
        },
        {
            title: "IPS Kelas X",
            author: "Kurikulum 2021",
            desc: "Buku Ilmu Pengetahuan Sosial untuk siswa SMA/SMK kelas X",
            image: "assets/ips.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/IPS_BS_KLS_X_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/IPS_BS_KLS_X_Rev.pdf"
        },
        {
            title: "PJOK Kelas X",
            author: "Kurikulum 2021",
            desc: "Buku Pendidikan Jasmani Olah Raga dan Kesehatan untuk siswa SMA/SMK kelas X",
            image: "assets/olahraga.jpg.png",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/PJOK_BS_KLS_X.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/PJOK_BS_KLS_X.pdf"
        },
        {
            title: "Informatika Kelas X",
            author: "Kurikulum 2021",
            desc: "Buku Informatika untuk siswa SMA/SMK kelas X",
            image: "assets/informatika.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Informatika_BS_KLS_X_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Informatika_BS_KLS_X_Rev.pdf"
        }
    ],
    "XI": [
        {
            title: "Agama Islam Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku teks Pendidikan Agama Islam untuk siswa SMA/SMK kelas XI",
            image: "assets/agama lustrasi_keberagaman_.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Islam-BS-KLS-XI.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Islam-BS-KLS-XI.pdf"
        },
        {
            title: "Bahasa Indonesia Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku bahasa Indonesia untuk siswa SMA/SMK kelas XI",
            image: "assets/bahasa-indonesia-menjadi-bahasa-persatuan-fUfy9XucBv.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Indonesia_BS_KLS_XI_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Indonesia_BS_KLS_XI_Rev.pdf"
        },
        {
            title: "Bahasa Inggris Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku bahasa Inggris untuk siswa SMA/SMK kelas XI",
            image: "assets/Manfaat-Belajar-Bahasa-Inggris-untuk-Pelajar-yang-Wajib-Diketahui.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Bahasa-Inggris-BS-KLS-XI-efc.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Bahasa-Inggris-BS-KLS-XI-efc.pdf"
        },
        {
            title: "Pendidikan Pancasila Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku Pendidikan Pancasila untuk siswa SMA/SMK kelas XI",
            image: "assets/pendidikan pancasila.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Pendidikan-Pancasila-BS-KLS-XI-Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Pendidikan-Pancasila-BS-KLS-XI-Rev.pdf"
        },
        {
            title: "Matematika Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku matematika untuk siswa SMA/SMK kelas XI",
            image: "assets/matematika.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika-BS-KLS-XI.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika-BS-KLS-XI.pdf"
        },
        {
            title: "Ekonomi Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku Ekonomi untuk siswa SMA/SMK kelas XI",
            image: "assets/ekonomi.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Ekonomi_BS_KLS_XI_Rev_2.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Ekonomi_BS_KLS_XI_Rev_2.pdf"
        },
        {
            title: "Sosiologi Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku Sosiologi untuk siswa SMA/SMK kelas XI",
            image: "assets/sosiologi.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Sosiologi_BS_KLS_XI_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Sosiologi_BS_KLS_XI_Rev.pdf"
        },
        {
            title: "Sejarah Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku Sejarah untuk siswa SMA/SMK kelas XI",
            image: "assets/Sejarah.png",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Sejarah-BS-KLS-XI.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Sejarah-BS-KLS-XI.pdf"
        },
        {
            title: "Fisika Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku Fisika untuk siswa SMA/SMK kelas XI",
            image: "assets/fisika.jpg.webp",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Fisika-BS-KLS-XI.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Fisika-BS-KLS-XI.pdf"
        },
        {
            title: "Geografi Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku Geografi untuk siswa SMA/SMK kelas XI",
            image: "assets/Konsep-Geografi.jpg.png",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Geografi_BS_KLS_XI_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Geografi_BS_KLS_XI_Rev.pdf"
        },
        {
            title: "Kimia Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku Kimia untuk siswa SMA/SMK kelas XI",
            image: "assets/Kimia_.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Kimia-BS-KLS-XI.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Kimia-BS-KLS-XI.pdf"
        },
        {
            title: "Biologi Kelas XI",
            author: "Kurikulum 2021",
            desc: "Buku Biologi untuk siswa SMA/SMK kelas XI",
            image: "assets/biologi.jpg.png",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Biologi-BS-KLS-XI.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Biologi-BS-KLS-XI.pdf"
        }
    ],
    "XII": [
        {
            title: "Agama Islam Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku teks Pendidikan Agama Islam untuk siswa SMA/SMK kelas XII",
            image: "assets/agama lustrasi_keberagaman_.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Islam_BS_KLS_XII_.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Islam_BS_KLS_XII_.pdf"
        },
        {
            title: "Bahasa Indonesia Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku bahasa Indonesia untuk siswa SMA/SMK kelas XII",
            image: "assets/bahasa-indonesia-menjadi-bahasa-persatuan-fUfy9XucBv.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Indonesia_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Indonesia_BS_KLS_XII.pdf"
        },
        {
            title: "Bahasa Indonesia Tingkat Lanjut Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku bahasa Indonesia tingkat lanjut untuk siswa SMA/SMK kelas XII",
            image: "assets/bahasa-indonesia-menjadi-bahasa-persatuan-fUfy9XucBv.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Indonesia_BS_TL_KLS_XII_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Indonesia_BS_TL_KLS_XII_Rev.pdf"
        },
        {
            title: "Bahasa Inggris Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku bahasa Inggris untuk siswa SMA/SMK kelas XII",
            image: "assets/Manfaat-Belajar-Bahasa-Inggris-untuk-Pelajar-yang-Wajib-Diketahui.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Inggris_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Inggris_BS_KLS_XII.pdf"
        },
        {
            title: "Bahasa Inggris Tingkat Lanjut Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku bahasa Inggris tingkat lanjut untuk siswa SMA/SMK kelas XII",
            image: "assets/Manfaat-Belajar-Bahasa-Inggris-untuk-Pelajar-yang-Wajib-Diketahui.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Inggris_Lanjut_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Inggris_Lanjut_BS_KLS_XII.pdf"
        },
        {
            title: "Matematika Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku matematika untuk siswa SMA/SMK kelas XII",
            image: "assets/matematika.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika-BS-KLS-XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika-BS-KLS-XII.pdf"
        },
        {
            title: "Matematika Tingkat Lanjut Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku matematika tingkat lanjut untuk siswa SMA/SMK kelas XII",
            image: "assets/matematika.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika-Lanjut-BS-KLS-XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika-Lanjut-BS-KLS-XII.pdf"
        },
        {
            title: "Pendidikan Pancasila Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Pendidikan Pancasila untuk siswa SMA/SMK kelas XII",
            image: "assets/pendidikan pancasila.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Pendidikan-Pancasila-BS-KLS-XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Pendidikan-Pancasila-BS-KLS-XII.pdf"
        },
        {
            title: "Ekonomi Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Ekonomi untuk siswa SMA/SMK kelas XII",
            image: "assets/ekonomi.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Ekonomi_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Ekonomi_BS_KLS_XII.pdf"
        },
        {
            title: "Sosiologi Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Sosiologi untuk siswa SMA/SMK kelas XII",
            image: "assets/sosiologi.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Sosiologi_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Sosiologi_BS_KLS_XII.pdf"
        },
        {
            title: "Sejarah Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Sejarah untuk siswa SMA/SMK kelas XII",
            image: "assets/Sejarah.png",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Sejarah_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Sejarah_BS_KLS_XII.pdf"
        },
        {
            title: "Kimia Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Kimia untuk siswa SMA/SMK kelas XII",
            image: "assets/Kimia_.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Kimia_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Kimia_BS_KLS_XII.pdf"
        },
        {
            title: "Biologi Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Biologi untuk siswa SMA/SMK kelas XII",
            image: "assets/biologi.jpg.png",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Biologi_BS_KLS_XII_Rev.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Biologi_BS_KLS_XII_Rev.pdf"
        },
        {
            title: "Antropologi Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Antropologi untuk siswa SMA/SMK kelas XII",
            image: "assets/Antropologi.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Antropologi_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Antropologi_BS_KLS_XII.pdf"
        },
        {
            title: "Fisika Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Fisika untuk siswa SMA/SMK kelas XII",
            image: "assets/fisika.jpg.webp",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Fisika_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Fisika_BS_KLS_XII.pdf"
        },
        {
            title: "Geografi Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Geografi untuk siswa SMA/SMK kelas XII",
            image: "assets/Konsep-Geografi.jpg.png",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Geografi_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Geografi_BS_KLS_XII.pdf"
        },
        {
            title: "Informatika Kelas XII",
            author: "Kurikulum Merdeka 2022",
            desc: "Buku Informatika untuk siswa SMA/SMK kelas XII",
            image: "assets/informatika.jpg.jpeg",
            readUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Informatika_BS_KLS_XII.pdf",
            pdfUrl: "https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Informatika_BS_KLS_XII.pdf"
        }
    ]
};

// User login data
let userData = null;

const bookGrid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const modal = document.getElementById('bookModal');
const closeModalBtn = document.getElementById('closeModal');

// Fungsi untuk mendapatkan semua buku (buku regular + buku sekolah)
function getAllBooks() {
    // Gabungkan buku regular dengan buku sekolah
    let allBooks = [...books];
    
    // Tambahkan buku dari setiap kelas dengan menandai sebagai buku sekolah
    ['X', 'XI', 'XII'].forEach(kelas => {
        booksByKelas[kelas].forEach(book => {
            allBooks.push({
                title: book.title,
                author: book.author,
                year: "Sekolah",
                category: "Sekolah - Kelas " + kelas,
                desc: book.desc,
                image: book.image,
                readUrl: book.readUrl,
                pdfUrl: book.pdfUrl,
                isSchoolBook: true,
                kelas: kelas
            });
        });
    });
    
    return allBooks;
}

// Semua buku digabungkan untuk pencarian
let allBooksCombined = getAllBooks();

// Fungsi Menampilkan Buku
function displayBooks(bookList) {
    bookGrid.innerHTML = '';
    if (bookList.length === 0) {
        bookGrid.innerHTML = '<p class="text-gray-500 col-span-full text-center">Buku tidak ditemukan.</p>';
        return;
    }
    bookList.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3 class="font-bold text-lg">${book.title}</h3>
            <p class="text-gray-400 italic text-sm mb-2">${book.author}</p>
            <span class="tag-mini">${book.category}</span>
        `;
        bookCard.onclick = () => openModal(book);
        bookGrid.appendChild(bookCard);
    });
}

// Fungsi Modal Buku
function openModal(book) {
    document.getElementById('modalTitle').innerText = book.title;
    document.getElementById('modalAuthor').innerText = 'oleh ' + book.author;
    document.getElementById('modalTag').innerText = `${book.category.toUpperCase()} • ${book.year || ''}`;
    document.getElementById('modalDesc').innerText = book.desc;
    document.getElementById('modalImg').src = book.image;
    
    // Set up button click handlers
    const readBtn = document.querySelector('.modal-actions .btn-primary-md');
    const downloadBtn = document.querySelector('.modal-actions .btn-outline-md');
    
    if (book.readUrl && book.readUrl !== '#') {
        readBtn.onclick = () => window.open(book.readUrl, '_blank');
        readBtn.disabled = false;
        readBtn.style.opacity = '1';
    } else {
        readBtn.onclick = () => alert('Link baca online belum tersedia untuk buku ini.');
        readBtn.disabled = false;
        readBtn.style.opacity = '1';
    }
    
    if (book.pdfUrl && book.pdfUrl !== '#') {
        downloadBtn.onclick = () => window.open(book.pdfUrl, '_blank');
        downloadBtn.disabled = false;
        downloadBtn.style.opacity = '1';
    } else {
        downloadBtn.onclick = () => alert('Link PDF belum tersedia untuk buku ini.');
        downloadBtn.disabled = false;
        downloadBtn.style.opacity = '1';
    }
    
    modal.classList.remove('hidden');
}

closeModalBtn.onclick = () => modal.classList.add('hidden');
window.onclick = (event) => { if (event.target == modal) modal.classList.add('hidden'); }

// Fitur Search - Mencari di semua buku termasuk buku sekolah
searchInput.oninput = (e) => {
    const term = e.target.value.toLowerCase();
    
    // Show/hide clear button based on input
    if (term.length > 0) {
        clearSearchBtn.classList.remove('hidden');
    } else {
        clearSearchBtn.classList.add('hidden');
    }
    
    if (term.length === 0) {
        // Jika search kosong, kembali ke tampilan awal (buku sastra/fiksi saja)
        displayBooks(books);
        filterButtons.forEach(b => {
            if (b.dataset.category === 'semua') {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
    } else {
        // Jika ada yang dicari, cari di semua buku
        const filtered = allBooksCombined.filter(b => b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term));
        displayBooks(filtered);
        
        // Hapus status aktif dari semua tombol filter saat melakukan pencarian
        filterButtons.forEach(b => b.classList.remove('active'));
    }
};

// Clear search button functionality
clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    displayBooks(books);
    filterButtons.forEach(b => {
        if (b.dataset.category === 'semua') {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    });
    searchInput.focus();
});

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Don't handle click here if it has onclick
        if (btn.onclick) return;
        
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        if (category === 'semua') {
            // Tampilkan hanya buku regular (buku sastra/fiksi), bukan buku sekolah
            displayBooks(books);
        } else if (category === 'Sekolah') {
            // Handled by onclick
        } else {
            // Filter berdasarkan kategori (dengan pencarian parsial, tidak case-sensitive)
            const filtered = books.filter(b => b.category.toLowerCase().includes(category.toLowerCase()));
            displayBooks(filtered);
        }
    });
});

// Login Screen Function
function handleLoginScreen(event) {
    event.preventDefault();
    
    const name = document.getElementById('loginNameScreen').value;
    const kelas = document.getElementById('loginKelasScreen').value;
    const sekolah = document.getElementById('loginSekolahScreen').value;
    
    userData = { name, kelas, sekolah };
    
    // Send data to Google Sheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyEy4rCuNitDf2yo3vFDKhNX-boSlexlJLCJb4Bx9Wi9yNhYqQxyTzZVTyu1QKntX7m/exec';
    const formData = new FormData();
    formData.append('NamaLengkap', name);
    formData.append('Kelas', kelas);
    formData.append('NamaSekolah', sekolah);
    formData.append('Tanggal', new Date().toLocaleDateString('id-ID'));
    formData.append('WaktuInput', new Date().toLocaleTimeString('id-ID'));
    
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            console.log('Data berhasil dikirim ke spreadsheet!');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    // Hide login screen and show main platform
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('mainPlatform').classList.remove('hidden');
    
    // Tampilkan halaman Beranda (Home) setelah login
    showSection('beranda');
    
    // Hide the Masuk button after login
    document.getElementById('navMasukBtn').classList.add('hidden');
}

// Navigation function
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section-page').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked nav item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(sectionId)) {
            item.classList.add('active');
        }
    });
}

// Login Modal Functions
function openLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
}

function handleLogin(event) {
    event.preventDefault();
    
    const name = document.getElementById('loginName').value;
    const kelas = document.getElementById('loginKelas').value;
    const sekolah = document.getElementById('loginSekolah').value;
    
    userData = { name, kelas, sekolah };
    
    // Hide form and show user info
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('loginInfo').classList.remove('hidden');
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayKelas').textContent = kelas;
    document.getElementById('displaySekolah').textContent = sekolah;
    
    // Change button text to user's name
    document.querySelector('.btn-primary').textContent = name;
}

// Kelola Modal Functions
function openKelolaModal() {
    document.getElementById('kelolaModal').classList.remove('hidden');
}

function closeKelolaModal() {
    document.getElementById('kelolaModal').classList.add('hidden');
    document.getElementById('kelolaForm').reset();
}

function handleAddBook(event) {
    event.preventDefault();
    
    const newBook = {
        title: document.getElementById('bookTitle').value,
        author: document.getElementById('bookAuthor').value,
        year: document.getElementById('bookYear').value,
        category: document.getElementById('bookCategory').value,
        desc: document.getElementById('bookDesc').value,
        image: document.getElementById('bookCover').value || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"
    };
    
    books.push(newBook);
    
    // Refresh the book grid
    displayBooks(books);
    
    // Close modal
    closeKelolaModal();
    
    alert('Buku berhasil ditambahkan ke katalog!');
}

// ============ SEKOLAH MODAL FUNCTIONS ============

// Open Sekolah Modal
function openSekolahModal() {
    document.getElementById('sekolahModal').classList.remove('hidden');
}

// Close Sekolah Modal
function closeSekolahModal() {
    document.getElementById('sekolahModal').classList.add('hidden');
}

// Show books for selected class
function showKelasBooks(kelas) {
    // Close sekolah modal
    closeSekolahModal();
    
    // Update title
    document.getElementById('kelasTitle').innerText = 'Buku Kelas ' + kelas;
    
    // Get books for this class
    const kelasBooks = booksByKelas[kelas];
    const booksList = document.getElementById('kelasBooksList');
    
    // Generate book list HTML
    booksList.innerHTML = '';
    kelasBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'kelas-book-item';
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="kelas-book-img">
            <div class="kelas-book-info">
                <h3 class="font-bold">${book.title}</h3>
                <p class="text-gray-500 text-sm">${book.author}</p>
                <p class="text-gray-400 text-sm mb-2">${book.desc}</p>
                <div class="kelas-book-actions">
                    <button class="btn-primary-sm" onclick="openKelasBookModal('${book.title}', '${book.author}', '${book.desc}', '${book.image}', '${book.readUrl}', '${book.pdfUrl}')">Baca / Unduh</button>
                </div>
            </div>
        `;
        booksList.appendChild(bookItem);
    });
    
    // Open kelas books modal
    document.getElementById('kelasBooksModal').classList.remove('hidden');
}

// Close Kelas Books Modal
function closeKelasBooksModal() {
    document.getElementById('kelasBooksModal').classList.add('hidden');
}

// Open modal for specific book in kelas
function openKelasBookModal(title, author, desc, image, readUrl, pdfUrl) {
    // Close kelas books modal
    closeKelasBooksModal();
    
    // Set book details
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalAuthor').innerText = 'oleh ' + author;
    document.getElementById('modalTag').innerText = 'BUKU SEKOLAH';
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalImg').src = image;
    
    // Set up button click handlers
    const readBtn = document.querySelector('.modal-actions .btn-primary-md');
    const downloadBtn = document.querySelector('.modal-actions .btn-outline-md');
    
    if (readUrl && readUrl !== '#') {
        readBtn.onclick = () => window.open(readUrl, '_blank');
        readBtn.disabled = false;
        readBtn.style.opacity = '1';
    } else {
        readBtn.onclick = () => alert('Link baca online belum tersedia untuk buku ini.');
        readBtn.disabled = false;
        readBtn.style.opacity = '1';
    }
    
    if (pdfUrl && pdfUrl !== '#') {
        downloadBtn.onclick = () => window.open(pdfUrl, '_blank');
        downloadBtn.disabled = false;
        downloadBtn.style.opacity = '1';
    } else {
        downloadBtn.onclick = () => alert('Link PDF belum tersedia untuk buku ini.');
        downloadBtn.disabled = false;
        downloadBtn.style.opacity = '1';
    }
    
    // Open modal
    modal.classList.remove('hidden');
}

// ============ PANDUAN & PRIVASI MODAL FUNCTIONS ============

// Open Panduan Modal
function openPanduanModal() {
    document.getElementById('panduanModal').classList.remove('hidden');
}

// Close Panduan Modal
function closePanduanModal() {
    document.getElementById('panduanModal').classList.add('hidden');
}

// Open Privasi Modal
function openPrivasiModal() {
    document.getElementById('privasiModal').classList.remove('hidden');
}

// Close Privasi Modal
function closePrivasiModal() {
    document.getElementById('privasiModal').classList.add('hidden');
}

// Inisialisasi Pertama
displayBooks(books);

