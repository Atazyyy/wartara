// Data seed Wartara — SELURUH nama, tokoh, peristiwa, kutipan, dan angka FIKTIF
// untuk keperluan demo. Tidak ada afiliasi dengan media nyata mana pun.
// Jam tayang dihitung relatif (hoursAgo) supaya portal selalu terlihat segar.

export const WA_NUMBER = "6281234567890";

export const DISCLAIMER =
  "Seluruh nama, peristiwa, dan kutipan adalah fiktif untuk keperluan demo";

export const TAGLINE = "Berita Tuntas, Bahasa Awam — Edisi Digital";

export const CATEGORIES = [
  "Nasional",
  "Ekonomi",
  "Teknologi",
  "Olahraga",
  "Hiburan",
  "Dunia",
];

// ---------- Jurnalis (fiktif) ----------
export const AUTHORS = [
  {
    id: "nadia",
    name: "Nadia Prameswari",
    role: "Redaktur Nasional",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "bagus",
    name: "Bagus Firmansyah",
    role: "Editor Ekonomi",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "sekar",
    name: "Sekar Ayu Lestari",
    role: "Jurnalis Teknologi",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "rendi",
    name: "Rendi Saputra",
    role: "Jurnalis Olahraga",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "mega",
    name: "Mega Puspita",
    role: "Jurnalis Hiburan",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "farhan",
    name: "Farhan Maulana",
    role: "Redaktur Dunia",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=800&q=70",
  },
];

export const authorById = (id) =>
  AUTHORS.find((a) => a.id === id) || {
    id: "redaksi",
    name: "Tim Redaksi Wartara",
    role: "Redaksi",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=70",
  };

// ---------- Breaking ticker ----------
export const TICKER = [
  "Bus listrik gratis di Bogor resmi masuk masa uji coba tiga bulan",
  "Cakra Muda FC Bandung menang 2-1 atas Samudra FC di laga pembuka Liga Teratai",
  "Startup logistik SakuGita amankan pendanaan Seri B Rp 210 miliar",
  "Larissa Mahesa pecahkan rekor nasional lari 10.000 meter",
  "Film \u201cAnak-Anak Muara\u201d tembus dua juta penonton",
  "Konferensi Energi Bersih Asia-Pasifik sepakati target sampah laut turun 30 persen",
  "Pusat data berenergi terbarukan PT Awan Lestari mulai dibangun di Batam",
  "Festival Musik Senja Nusantara ludes jual tiket fase pertama dalam tiga jam",
];

// ---------- Cuaca mock (bukan prakiraan resmi) ----------
export const WEATHER = [
  { city: "Bandung", temp: 24, cond: "Cerah Berawan", icon: "cloudsun", humidity: 68, wind: 9 },
  { city: "Jakarta", temp: 31, cond: "Cerah", icon: "sun", humidity: 61, wind: 12 },
  { city: "Surabaya", temp: 33, cond: "Panas Terik", icon: "sun", humidity: 55, wind: 10 },
  { city: "Yogyakarta", temp: 28, cond: "Hujan Ringan", icon: "rain", humidity: 82, wind: 14 },
  { city: "Medan", temp: 30, cond: "Berawan", icon: "cloud", humidity: 75, wind: 8 },
];

// ---------- Kurs mock (bukan acuan transaksi) ----------
export const RATES = [
  { code: "USD", name: "Dolar AS", value: 15725, diff: 15 },
  { code: "EUR", name: "Euro", value: 17048, diff: -22 },
  { code: "SGD", name: "Dolar Singapura", value: 11790, diff: 8 },
  { code: "JPY", name: "Yen (per 100)", value: 10435, diff: -4 },
];

// ---------- Artikel ----------
export const ARTICLES = [
  {
    id: "n-bus-listrik",
    category: "Nasional",
    title: "Bus Listrik Gratis Mulai Uji Coba di Bogor, Rute Pertama Melintasi Enam Kelurahan",
    lead: "Konsorsium Kota Hijau bersama operator Nusantara Mobilitas menggelar uji coba tiga bulan. Layanan terbuka bagi publik tanpa tarif hingga Januari 2027, dengan armada awal sepuluh unit.",
    authorId: "nadia",
    hoursAgo: 2,
    views: 18420,
    readMinutes: 4,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "BOGOR — Sepuluh bus listrik berlivery hijau-kuning mulai beroperasi di jalanan Bogor, Selasa pagi, menandai dibukanya uji coba layanan angkutan kota berenerji listrik yang digratiskan kepada seluruh warga. Rute pertama membentang 14 kilometer melintasi enam kelurahan di kawasan timur kota, melayani 48 titik pemberhentian dari terminal hingga kawasan pendidikan.",
      "Kepala proyek Konsorsium Kota Hijau, Hendra Wijaya, menjelaskan masa uji coba tiga bulan ini dipakai untuk mengukur dua hal sekaligus: keandalan armada di medan berbukit dan kebiasaan perjalanan warga. \u201cKami tidak ingin berhenti di soal armadanya saja. Yang diuji adalah apakah jadwal, titik henti, dan waktu tempuh benar-benar cocok dengan ritme warga sehari-hari,\u201d ujarnya di sela pengecekan armada. Selama masa uji coba, data okupansi direkam per pemberhentian dan akan menjadi dasar penataan rute lanjutan.",
      "Respons warga di hari pertama terlihat antusias. Antrean di pemberhentian pertama sudah terbentuk sebelum pukul lima pagi, sebagian adalah pekerja shift pabrik yang selama ini bergantung pada angkutan kota konvensional. Rusmini, 52, penjual sayur yang rutin ke pasar induk, mengaku baru pertama kali naik bus ber-AC. \u201cKalau tarifnya tetap gratis dan jamnya tepat, saya berhenti bawa motor ke pasar,\u201d katanya sambil menata keranjangnya di rak tengah bus.",
      "Konsorsium menargetkan 24 unit armada beroperasi penuh pada fase kedua, ditambah peta digital yang menampilkan posisi bus secara langsung. Evaluasi tengah periode dijadwalkan enam pekan lagi; bila okupansi stabil di atas 55 persen, layanan akan dilanjutkan dengan skema tarif terjangkau dan pendanaan bersubsidi bersama mitra daerah. Hingga berita ini diturunkan, belum ada gangguan layanan yang dilaporkan.",
    ],
  },
  {
    id: "o-liga",
    category: "Olahraga",
    title: "Cakra Muda FC Bandung Buka Liga Teratai dengan Kemenangan 2-1 atas Samudra FC",
    lead: "Gol telat bayang Aditya Bagas di menit 88 mengantar Cakra Muda FC meraih tiga poin pertama di Stadion Siliwangi malam, di hadapan 21.000 penonton.",
    authorId: "rendi",
    hoursAgo: 4,
    views: 15230,
    readMinutes: 3,
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "BANDUNG — Musim baru Liga Teratai 1 dimulai dengan drama. Cakra Muda FC Bandung memastikan kemenangan 2-1 atas tamu Samudra FC Surabaya lewat gol menit 88 bek sayap Aditya Bagas, yang masuk sebagai pengganti sebelas menit sebelumnya. Stadion yang terisi 21 ribu penonton meledak saat bola tak bisa dihalau kiper lawan dari sepakan kedua di dalam kotak penalti.",
      "Samudra FC sebenarnya lebih dulu unggul pada babak pertama lewat tendangan bebas Rasyid Pramono yang menembus barisan tembok dan menusuk ke pojok kanan. Cakra Muda menyamakan kedudukan sepuluh menit sebelum turun minum melalui kepala kapten tim Yudha Kurnia dari sepak pojok. Pelatih Cakra Muda, Marco Prasetyo, mengaku menyuruh timnya menaikkan tempo sejak papan skor 0-1. \u201cKami bicara soal keberanian, bukan soal formasi. Pemain cadangan yang masuk memberi energi yang kita butuhkan,\u201d katanya pada konferensi pers.",
      "Statistik pertandingan mencatat penguasaan bola 57 persen untuk tuan rumah dengan 14 percobaan tembakan, tujuh di antaranya tepat sasaran. Kiper Samudra, Bagus Adrianto, dua kali menyelamatkan peluang matang pada babak kedua dan dipilih sebagai pemain terbaik sisi tamu meski timnya kalah. Samudra FC kini harus menyeimbangkan evaluasi sebelum laga kedua di kandangnya akhir pekan ini.",
      "Hasil lain malam yang sama: Gento FC Makassar menang tipis 1-0 di kandangnya atas Harapan Bangsa FC, sementara laga di Medan antara Rimba Raya FC dan Nilo City berakhir 2-2. Klasemen sementara menempatkan Cakra Muda di puncak sementara berdasarkan selisih gol. Jadwal pekan kedua Liga Teratai digelar Jumat ini, dengan derbi Jawa Barat antara Cakra Muda dan Sunda Kelana FC sebagai laga paling dinantikan.",
    ],
  },
  {
    id: "h-film",
    category: "Hiburan",
    title: "Film \u201cAnak-Anak Muara\u201d Tembus Dua Juta Penonton, Rilis Internasional Disiapkan",
    lead: "Drama keluarga karya sutradara muda Prameswari Adininggar mencapai angka dua juta penonton dalam 24 hari tayang, rekor tercepat untuk film berbiaya kecil di bioskop nasional.",
    authorId: "mega",
    hoursAgo: 8,
    views: 13980,
    readMinutes: 4,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "JAKARTA — Drama keluarga \u201cAnak-Anak Muara\u201d resmi melintasi batas dua juta penonton di bioskop nasional, Selasa malam, tepat 24 hari setelah rilis. Capaian itu menjadikan karya sutradara Prameswari Adininggar sebagai film berbiaya produksi di bawah lima miliar rupiah tercepat yang menembus angka tersebut dalam satu dekade terakhir, menurut rekap gabungan jaringan bioskop yang dirilis rumah produksi Sinema Lumbung.",
      "Film yang mengangkat kisah tiga bersaudara penambang pasir kecil di tepi sungai ini awalnya hanya tayang di 180 layar. Jumlah layar diperluas dua kali setelah kata-kata dari penonton menyebar di media sosial, hingga kini ditayangkan di 640 layar. \u201cKami tidak punya bintang paling mahal, yang kami punya adalah cerita yang membuat orang pulang bioskop lalu menelepon kakaknya,\u201d ujar produser Bagas Wicaksana dalam perayaan sederhana di Jakarta.",
      "Penayangan khusus untuk komunitas sekolah menjadi salah satu mesin pertumbuhan penonton. Sejumlah guru memanfaatkan film ini sebagai bahan diskusi soal pendidikan di daerah pesisir. Prameswari mengaku terkejut dengan pola penontonnya: hampir separuh pembelian tiket berupa pembelian grup di atas sepuluh kursi. \u201cIni film yang ditonton bersama-sama, bukan ditonton sendiri,\u201d ujarnya.",
      "Sinema Lumbung kini mempersiapkan rilis internasional terbatas di Singapura dan Kuala Lumpur pada awal tahun depan, ditambah pengiriman naskah ke beberapa festival film di Asia. Mesin pencari tiket menunjukkan okupansi pekan keempat masih di atas 40 persen pada hari kerja — angka yang biasanya sudah menandakan akhir putaran tayang, tetapi justru memicu jaringan bioskop menahan penggantian jadwal layar.",
    ],
  },
  {
    id: "e-sakugita",
    category: "Ekonomi",
    title: "Startup Logistik SakuGita Amankan Pendanaan Seri B Rp 210 Miliar",
    lead: "Dana baru akan dipakai membangun gudang mini di 25 kota menengah dan merekrut 300 pekerja. SakuGita kini melayani 9.200 pelaku usaha kecil.",
    authorId: "bagus",
    hoursAgo: 5,
    views: 11250,
    readMinutes: 4,
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "JAKARTA — Startup logistik antar-kota SakuGita mengumumkan penyelesaian pendanaan Seri B senilai 210 miliar rupiah, dipimpin dana usaha Meridian Capital bersama sejumlah investor lanjutan. Dana tersebut akan dipakai membangun jaringan gudang mini di 25 kota menengah, memperkuat aplikasi mitra pengemudi, dan merekrut 300 karyawan sepanjang dua kuartal ke depan.",
      "Didirikan enam tahun lalu oleh dua mantan insinyur dan seorang pemilik toko tekstil, SakuGita berfokus pada pengiriman barang dagangan untuk pelaku usaha mikro dan kecil yang selama ini kesulitan mendapatkan tarif konsolidasi. Perusahaan mengaku kini melayani 9.200 penjual aktif dengan rata-rata 42 ribu kiriman per bulan, naik tiga kali lipat dibanding dua tahun lalu. \u201cKota menengah punya permintaan yang nyata tetapi jaringannya belum rapi. Di situlah margin yang sehat ditemukan,\u201d kata chief executive Tariq Mahmud.",
      "Analis logistik menilai langkah ini menempatkan SakuGita di segmen yang berbeda dari perang besar pengiriman instan perkotaan. \u201cMereka tidak bersaing di tebusan kilat kota besar, melainkan di rute ritel antar-kota yang sehari tanpa jadwal tetap,\u201d ujar peneliti industri Dinda Kusumawardani. Ia menambahkan kunci keberlanjutan ada pada tingkat pengisian kendaraan pulang, yang kerap menjadi penentu untung di bisnis konsolidasi.",
      "Meridian Capital menyebut keputusan investasi bertumpu pada pertumbuhan pendapatan tiga tahun berturut-turut dan tingkat retensi penjual yang mencapai 87 persen. SakuGita menargetkan titik impas operasional pada akhir tahun depan, sebelum mempertimbangkan pendanaan lanjutan untuk membangun armada listrik milik sendiri di beberapa koridor padat.",
    ],
  },
  {
    id: "n-festival-literasi",
    category: "Nasional",
    title: "Festival Literasi Desa di Yogyakarta Ramai, Rak Baca Bergerak Akan Menjangkau 40 Dusun",
    lead: "Komunitas Kampung Baca menggelar festival dua hari yang dihadiri 7.500 pengunjung. Donasi 2.100 buku akan diangkut keliling dengan dua mobil perpustakaan kecil.",
    authorId: "nadia",
    hoursAgo: 7,
    views: 6320,
    readMinutes: 3,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "YOGYAKARTA — Halaman komunitas di kawasan selatan kota berubah menjadi pasar buku raksasa akhir pekan ini. Festival Literasi Desa yang diselenggarakan komunitas Kampung Baca menghadirkan 62 stan penerbit kecil, bazar buku bekas, pertunjukan wayang kertas, dan kelas menulis gratis yang diikuti pelajar dari 18 desa. Panitia mencatat sekitar 7.500 pengunjung selama dua hari.",
      "Momen paling ramai terjadi saat pengumuman hasil donasi buku: 2.100 judul terkumpul dari pengunjung dan penerbit peserta. Seluruh koleksi akan dipilah lalu diangkut keliling 40 dusun oleh dua mobil perpustakaan keliling yang dikelola relawan. \u201cBukunya harus bergerak. Rak yang diam hanya jadi pajangan, sedangkan anak di dusun butuh buku yang datang ke depan rumahnya,\u201d kata pendiri Kampung Baca, Lintang Prasasti.",
      "Festival tahunan ini juga mempertemukan pengelola taman baca dari berbagai provinsi dalam forum tertutup. Diskusi membahas persoalan klasik: langganan listrik yang stabil untuk ruang baca, honor pengelola, dan distribusi buku bergambar yang masih timpang antarwilayah. Peserta sepakat menyusun katalog gabungan sederhana agar taman baca desa dapat saling meminjam koleksi lewat kiriman reguler.",
      "Pemerintah kabupaten setempat hadir menyerahkan bantuan lemari baca untuk sepuluh dusun penerima tahap awal. Kampung Baca berencana memperbanyak titik pemberhentian mobil perpustakaan pada tahun depan, dengan prioritas dusun yang berjarak lebih dari enam kilometer dari sekolah terdekat. Daftar rute keliling diumumkan lewat grup relawan dan kanal komunitas pada awal bulan depan.",
    ],
  },
  {
    id: "t-datacenter",
    category: "Teknologi",
    title: "PT Awan Lestari Mulai Bangun Pusat Data Berenergi Terbarukan di Batam",
    lead: "Fasilitas kapasitas 20 megawatt diarea industri Batam akan dioperasikan bertahap mulai 2027. Daya penuh dijanjikan berasal dari tenaga surya dan air.",
    authorId: "sekar",
    hoursAgo: 9,
    views: 8940,
    readMinutes: 4,
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "BATAM — Penggalian tanah pertama pusat data PT Awan Lestari Nusantara dimulai di kawasan industri Batam, Selasa. Fasilitas dengan kapasitas awal 20 megawatt ini ditargetkan beroperasi bertahap mulai awal 2027 dan dipasarkan sebagai pusat data pertama di wilayah barat Indonesia yang seluruh daya operasional penuhnya dijanjikan bersumber dari energi terbarukan.",
      "Direktur utama Awan Lestari, Clara Hartanto, menjelaskan kombinasi pasokan akan berasal dari pembangkit surya di atap dan lahan sekitar, ditambah kontrak tenaga air dari pembangkit terdekat. Sistem pendinginan memakai sirkulasi udara luar saat cuaca memungkinkan, mengurangi konsumsi listrik untuk pendingin yang biasanya menyedot hampir separuh energi pusat data. \u201cEfisiensi bukan fitur tambahan; di bisnis ini ia harga tiket masuknya,\u201d ujarnya.",
      "Pilihan Batam dinilai strategis karena kedekatan kabel laut internasional dan posisinya sebagai simpul lalu lintas data antarpulau. Pengamat infrastruktur digital mengingatkan bahwa keberlanjutan klaim energi hijau harus dibuktikan lewat audit pasokan tahunan. \u201cKlaim \u2018berenergi terbarukan\u2019 paling mudah diuji dari sertifikat pasokan dan jam operasi nyata pembangkitnya, bukan dari brosur,\u201d catat peneliti Rizky Alfarizi dari lembaga kajian infrastruktur terbuka.",
      "Tahap pertama pembangunan menyerap 1.200 tenaga kerja konstruksi, sedangkan operasi penuh diestimasikan menyerap 250 pekerja tetap dengan berbagai program pelatihan teknisi lokal. Awan Lestari membuka kemitraan dengan tiga politeknik untuk kurikulum operasi fasilitas kritis, mencakup perawatan genset, manajemen pendingin, hingga keamanan fisik dan jaringan.",
    ],
  },
  {
    id: "e-cabai",
    category: "Ekonomi",
    title: "Harga Cabai Rawit Berbalik Naik, Pedagang Pasar Widasari Imbau Belanja Pagi",
    lead: "Harga di tingkat pedagang naik 38 persen dalam sepuluh hari akibat panen terganggu hujan. Pasar menambah jam bongkar muat subuh untuk menekan selisih harga.",
    authorId: "bagus",
    hoursAgo: 11,
    views: 10410,
    readMinutes: 3,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "JOMBANG — Ibu-ibu yang belanja di Pasar Widasari pagi ini menemukan angka baru di papan harga: cabai rawit merah dijual Rp 82.000 per kilogram, naik dari Rp 59.000 sepuluh hari lalu. Pedagang menjelaskan kenaikan menyusul panen yang terganggu hujan deras selama dua pekan di sentra produksi terdekat, membuat kiriman ke pasar menipis.",
      "Ketua asosiasi pedagang pasar, Suprapto Hadi, mengimbau pembeli menyesuaikan jam belanja. \u201cYang datang subuh masih dapat stok pagi dengan harga lebih wajar. Sore harga bisa naik lagi karena sisa dagangan tinggal sedikit,\u201d ujarnya. Manajemen pasar menambahkan jam bongkar muat mulai pukul tiga pagi dan membuka dua gerbang tambahan agar truk kecil dari sentra lain bisa lebih cepat menurunkan muatan.",
      "Petani di desa-desa sentra mengaku menanggung kerugian ganda: tanaman yang siap panen keriting akibat genangan, dan jalan usaha tani yang lumpuh membuat sebagian hasil tidak bisa diangkut tepat waktu. Kelompok tani menerapkan panen bertahap dan menyiapkan pengeringan sederhana untuk cabai kualitas kedua agar tetap laku ke pengolah sambal rumahan.",
      "Penyuluh pertanian dan asosiasi pasar setempat menyatakan siaga dua pekan ke depan: penyaluran benih toleran air untuk tanam ulang, pemadatan perbaikan jalan usaha tani, dan pemantauan harga harian lewat kelompok pesan terkait pedagang besar. Pengamat pangan menilai lonjakan ini masih musiman dan dapat mereda dalam tiga hingga empat minggu bila cuaca membaik, meski ia mengingatkan stok nasional tetap perlu dipantau menjelang akhir tahun.",
    ],
  },
  {
    id: "n-jembatan",
    category: "Nasional",
    title: "Jembatan Muara Salang Resmi Difungsikan, Tiga Desa Tak Lagi Bergantung Perahu Seberang",
    lead: "Jembatan sepanjang 180 meter menghubungkan dua kawasan yang selama ini hanya tersambung penyeberangan perahu. Waktu tempuh ke pasar kabupaten terpangkas dari dua jam menjadi 40 menit.",
    authorId: "nadia",
    hoursAgo: 26,
    views: 4210,
    readMinutes: 3,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "Prosesi tabur bunga ke sungai menandai peresmian jembatan Muara Salang, Senin pagi. Struktur beton sepanjang 180 meter ini menghubungkan tiga desa di tebal barat dengan ibu kota kecamatan di timur, menggantikan penyeberangan perahu yang selama puluhan tahun menjadi satu-satunya jalan keluar warga, terutama saat musim pasang.",
      "Pembangunan selama 20 bulan itu melibatkan kontraktor lokal PT Prakarsa Jalan Nusantara dan menyerap 280 tenaga kerja dari desa-desa sekitar. Kepala desa Muara Salang, Adnan Yusuf, mengaku paling menantikan perubahan layanan kesehatan. \u201cDulu pasien yang harus dirujuk menunggu perahu, kalau air pas jam malam kita sangat kewalahan. Sekarang ambulans bisa masuk sampai depan balai desa,\u201d katanya.",
      "Dampak ekonomi awal sudah terlihat dari penjadwalan angkutan desa. Dua operator mengumumkan rute baru pasar kabupaten dengan biaya per perjalanan turun separuh dibanding gabungan perahu plus ojek. Waktu tempuh ke pasar kabupaten terpangkas dari rata-rata dua jam menjadi 40 menit, membuka kemungkinan warga menjual hasil kebun segar langsung tanpa perantara penampung di tepi sungai.",
      "Tim pengawas mencatat masa pemeliharaan awal 12 bulan dengan inspeksi struktur tiap tiga bulan. Rencana lanjutan mencakup penerangan tenaga surya di kedua akses masuk dan trotoar pejalan kaki di sisi hulu. Warga berharap pembangunan serupa menyusul di titik penyeberangan tetangga yang masih aktif pada musim hujan.",
    ],
  },
  {
    id: "t-kelajar",
    category: "Teknologi",
    title: "Aplikasi Ruang Kelajar Rilis Mode Offline, Bahan Belajar Bisa Diunduh Tanpa Kuota",
    lead: "Fitur unduh paket pelajaran sekelas dimaksudkan untuk pelajar daerah sinyal terbatas. Dua ribu sekolah tergabung dalam uji coba awal.",
    authorId: "sekar",
    hoursAgo: 15,
    views: 7610,
    readMinutes: 3,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "BANDUNG — Perusahaan edutech Ruang Kelajar merilis mode offline untuk aplikasi belajarnya. Fitur baru memungkinkan siswa mengunduh paket materi satu semester untuk satu kelas dalam satu transaksi kecil di titik sinyal baik, lalu menggunakannya penuh tanpa koneksi internet — termasuk latihan soal, rekaman guru, dan umpan balik otomatis yang disinkronkan saat kembali daring.",
      "Pendiri sekaligus chief executive Alif Rehan mengatakan fitur ini lahir dari pemetaan pengguna. \u201cSeparuh pengguna kami belajar dari perangkat dengan kuota harian yang sangat kecil. Aplikasi yang menuntut koneksi penuh secara tidak langsung memilih siapa yang boleh belajar,\u201d ujarnya dalam acara peluncuran. Paket unduhan dirancang ringkas, maksimal 700 megabyte per semester, dengan kompresi teks dan audio yang lebih agresif daripada video.",
      "Uji coba awal melibatkan 2.000 sekolah di enam provinsi selama satu semester. Laporan sementara menunjukkan durasi belajar mingguan siswa di zona sinyal lemah naik 41 persen setelah memakai mode offline. Guru yang bergabung dalam program pendampingan mengaku perubahan terbesar ada pada pekerjaan rumah: tugas kini bisa dikerjakan malam hari di rumah tanpa menumpuk di area satu-satunya menara sinyal desa.",
      "Ruang Kelajar menyatakan mode offline tersedia gratis untuk semua tingkatan pengguna dan tidak terkait langganan. Perusahaan menargetkan 10.000 sekolah tergabung pada akhir tahun, didukung kerja sama penyaluran dengan dinas pendidikan kabupaten dan komunitas guru. Langkah serupa dinilai pengamat sebagai arah yang wajar bagi produk edutech Indonesia, di mana tantangan infrastruktur jaringan jauh lebih menentukan daripada fitur kecerdasan buatan.",
    ],
  },
  {
    id: "h-festival",
    category: "Hiburan",
    title: "Festival Musik Senja Nusantara Ludes Jual Tiket Fase Pertama dalam Tiga Jam",
    lead: "Panitia mengumumkan 40 penampil dari tiga panggung untuk festival tiga hari di Bandung. Tiket fase kedua dibuka Jumat depan dengan harga lanjutan.",
    authorId: "mega",
    hoursAgo: 18,
    views: 8760,
    readMinutes: 3,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "BANDUNG — Tiket fase pertama Festival Musik Senja Nusantara habis terjual dalam tiga jam sejak dibuka, Minggu malam. Panitia mengumumkan 40 penampil dari dalam dan luar negeri yang akan tampil di tiga panggung sepanjang tiga hari pada akhir pekan kedua Desember di kawasan lapang selatan kota.",
      "Kurator musik festival, Ayu Lestari Moerdiono, menyebut kurasi tahun ini menggeser bobot ke musisi independen daerah. \u201cKami ingin penonton pulang dengan nama baru yang mereka temukan sendiri, bukan hanya datang untuk satu headliner,\u201d ujarnya. Dua panggung utama akan menampilkan jadwal tanpa tumpang tindih, sementara panggung ketiga berbentuk pertunjukan duduk untuk set akustik panjang.",
      "Antrean daring membengkak hingga belasan ribu orang saat penjualan dibuka pukul delapan malam. Sejumlah calon pembeli mengeluhkan antrean yang lambat, tetapi panitia menegaskan sistem antrean berfungsi sesuai rancangan untuk menahan bot pembelian otomatis. Tiket fase kedua dibuka Jumat depan dengan harga lanjutan, dan kuota khusus pelajar tetap dipertahankan 15 persen dari total kapasitas.",
      "Pemilik usaha di sekitar lokasi mulai menyiapkan penjualan paket menginap bersama asosiasi penginapan kawasan. Panitia memperkirakan 60 ribu pengunjung selama tiga hari dan mengumumkan kerja sama transportasi daring serta layanan shuttle dari empat titik parkir luar. Jadwal tampil per hari diumumkan awal November setelah seluruh kontrak penampil ditandatangani.",
    ],
  },
  {
    id: "o-pelari",
    category: "Olahraga",
    title: "Larissa Mahesa Pecahkan Rekor Nasional 10.000 Meter di Kejuaraan Terbuka",
    lead: "Pelari berusia 22 tahun dari Solo mencatat waktu 31 menit 52 detik, memangkas rekor lama yang bertahan 11 tahun. Ia kini menyasar tiket kejuaraan Asia.",
    authorId: "rendi",
    hoursAgo: 20,
    views: 9120,
    readMinutes: 3,
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "SOLO — Di bawah langit mendung Stadion Sriwedari, Larissa Mahesa melintasi garis akhir nomor 10.000 meter putri dengan waktu 31 menit 52,40 detik, Selasa sore. Catatan itu memangkas rekor nasional lama yang bertahan 11 tahun dan menutup Kejuaraan Atletik Terbuka dengan salah satu momen terbaik sepanjang penyelenggaraan.",
      "Strategi balap Larissa terlihat matang sejak kelompok utama memecah diri pada lap kelima. Ia menempel pelari penguji hingga sisa 3.000 meter, lalu mengambil alih laju tanpa diganggu gugat. \u201cSaya tidak mengejar rekor, saya mengejar ritme yang saya latih. Rekor datang sendiri karena tubuh saya sudah di sana,\u201d kata pelatih sekaligus ayahnya, Slamet Mahesa, sesudah balap.",
      "Rekor lama pemiliknya, Dewi Anggraeni, menyapa langsung sang penghancur rekor lewat pesan singkat yang dibacakan panitia di papan elektronik stadion. Momen itu disambut tepuk tangan panjang dari penonton yang memadati tribun timur. Dewi menyebut pergantian rekor adalah tanda kesehatan nomor lari jarak jauh nasional yang selama ini dianggap stagnan.",
      "Larissa kini memasang sasaran pada standar kualifikasi kejuaraan Asia yang membutuhkan waktu di bawah 31 menit 30 detik. Federasi atletik provinsi menyatakan akan menambah jadwal latihan ketinggian di Dieng dan uji coba nomor 5.000 meter pada seri berikutnya di Semarang bulan depan.",
    ],
  },
  {
    id: "e-kopi",
    category: "Ekonomi",
    title: "Rantai Kopi Bawah Pohon Tambah 40 Gerai, Fokus ke Kota Menengah di Luar Jawa",
    lead: "Perusahaan roastery yang berangkat dari satu gerobak itu kini mengoperasikan 156 gerai. Ekspansi tahun ini menargetkan 70 persen lokasi baru di luar Jawa.",
    authorId: "bagus",
    hoursAgo: 30,
    views: 5890,
    readMinutes: 4,
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "MAKASSAR — Gerai ke-156 jaringan kopi Bawah Pohon dibuka di koridor kawasan pendidikan Makassar, Senin. Peluncuran itu menjadi gerai pertama dari rencana 40 pembukaan baru tahun ini, dengan 70 persen lokasi di luar Pulau Jawa — pergeseran yang menurut manajemen menjawab perlambatan pasar perkotaan besar.",
      "Jaringan yang berawal dari satu gerobak di pinggir kampus Bandung pada 2017 ini kini mengoperasikan pabrik sangrai sendiri di dua kota dan membeli biji dari 22 kelompok tani. Direktur operasi Felicia Taruli mengatakan model kota menengah menuntut penyesuaian menu dan ukuran gerai. \u201cDi kota menengah, gerai kami lebih kecil, harga menu paling ramah, dan meja panjangnya lebih banyak karena masyarakat memakai kafe sebagai ruang kerja bersama,\u201d katanya.",
      "Data internal perusahaan menunjukkan rata-rata transaksi gerai di luar Jawa hanya 12 persen di bawah gerai Jawa, sementara biaya sewa jauh lebih rendah — kombinasi yang membuat masa pemulihan investasi gerai baru lebih pendek. Persaingan di segmen ini pun mulai ramai: minimal tiga jaringan nasional lain mengumumkan ekspansi serupa ke kota yang sama selama enam bulan terakhir.",
      "Pengamat ritel menilai pertarungan berikutnya ada di konsistensi pasokan barista terlatih. Bawah Pohon merespons dengan akademi barista internal dua pekan yang wajib ditempuh seluruh staf baru, ditambah program kemitraan sekolah kejuruan di enam kota ekspansi. Perusahaan mengklaim tingkat pergantian staf baristanya turun ke 18 persen setelah skema karier kepala gerai diperkenalkan tahun lalu.",
    ],
  },
  {
    id: "t-smartcity",
    category: "Teknologi",
    title: "Sensor Drainase Rp 300 Ribu Bawa Tim Nagara Juara Smart City Challenge Asia",
    lead: "Tim muda dari Solo mengalahkan 31 peserta dari sembilan negara lewat sensor air murah berbasis radio komunitas yang tetap bekerja saat listrik padam.",
    authorId: "sekar",
    hoursAgo: 34,
    views: 5430,
    readMinutes: 4,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "SINGAPURA — Tim Nagara, kelompok lima insinyur muda asal Solo, dinobatkan sebagai juara Smart City Challenge Asia setelah mengalahkan 31 tim peserta dari sembilan negara. Penilaian juri berfokus pada satu hal yang sering diabaikan solusi kota cerdas: perangkat yang tetap berguna ketika listrik dan internet mati justru pada saat paling dibutuhkan.",
      "Karya tim ini adalah sensor ketinggian air drainase berbiaya pembuatan di bawah 300 ribu rupiah per titik. Perangkatnya mengirim data lewat jaringan radio komunitas berdaya rendah, menyimpan catatan di memori lokal, dan bertahan dengan baterai serta panel kecil tanpa layanan. Data ditampilkan di peta terbuka yang bisa diakses warga lewat pesan singkat biasa — tanpa aplikasi, tanpa paket data. \u201cKota cerdas yang hanya bekerja di jaringan yang sehat bukan kota cerdas. Banjir justru datang bersama pemadaman,\u201d kata ketua tim Dimas Ardiyanto usai pengumuman.",
      "Uji lapangan tiga bulan di 40 titik rawan Solo menghasilkan catatan genangan yang memungkinkan dinas terkait memetakan titik sumbatan dengan akurasi yang dinilai juri \u201cluar biasa untuk biaya sekecil itu\u201d. Dua kota peserta pendamping, satu di Vietnam dan satu di Filipina, menyatakan siap memakai desain terbuka tim Nagara dengan penyesuaian lokal.",
      "Tim Nagara merilis seluruh skema perangkat sebagai perangkat keras terbuka dan berencana mendirikan bengkel produksi kecil yang mempekerjakan teknisi lokal. Penghargaan ini disertai hibah pengembangan yang akan dipakai menambah ketahanan perangkat terhadap genangan penuh dan memproduksi 500 unit untuk kota-kota pendamping di Indonesia.",
    ],
  },
  {
    id: "d-energi",
    category: "Dunia",
    title: "Konferensi Energi Bersih Asia-Pasifik Sepakati Target Sampah Laut Turun 30 Persen pada 2032",
    lead: "Pernyataan bersama Kuala Lumpur menandatangani 19 negara peserta. Mekanisme pemantauan lewat satelit dan audit pelabuhan dijadwalkan mulai tahun depan.",
    authorId: "farhan",
    hoursAgo: 13,
    views: 4980,
    readMinutes: 4,
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "KUALA LUMPUR — Konferensi Energi Bersih dan Samudra Asia-Pasifik ditutup dengan pernyataan bersama yang ditandatangani 19 negara peserta: mengurangi aliran sampah plastik ke laut sebesar 30 persen pada 2032 dibandingkan garis dasar 2026. Kesepakatan itu menjadi hasil paling konkret dari tiga hari perundingan yang sempat menggantung soal pendanaan.",
      "Poin paling diperdebatkan adalah mekanisme pemantauan. Perjanjian akhir menetapkan penginderaan jauh lewat satelit ditambah audit sampah di pelabuhan-pelabuhan mitra yang dilakukan lembaga pihak ketiga, dengan laporan tahunan terbuka. Negara-negara kepulauan menekan agar target mengikat secara politis, sementara beberapa negara industri meminta fleksibilitas jadwal — hasil akhir menetapkan evaluasi tengah periode pada 2029 yang dapat menaikkan target, bukan menurunkannya.",
      "\u201cYang berubah bukan hanya angkanya, tetapi siapa yang menghitung. Untuk pertama kalinya data pelabuhan dan data satelit dibandingkan satu sama lain secara terbuka,\u201d kata dr. Aisyah Rahman, pemimpin delegasi ilmuwan dari jaringan penelitian samudra regional. Ia menilai komponen audit pihak ketiga menjadi pembeda dari kesepakatan serupa yang sebelumnya gagal bergerak.",
      "Paket pendanaan awal senilai 340 juta dolar AS dijanjikan gabungan lembaga pembangunan dan dana swasta, mencakup program pemilahan di 40 kota pesisir dan insentif pengumpul limbah formal. Kelompok lingkungan hidup menyambut kesepakatan sambil mengingatkan bahwa eksekusi berada di tingkat kota dan kabupaten — tempat kesepakatan internasional biasanya kehilangan tenaga. Pertemuan lanjutan ditetapkan di Manila pada akhir tahun depan.",
    ],
  },
  {
    id: "d-osaka",
    category: "Dunia",
    title: "Kafe Buku Menghidupkan Lagi Pasar Buku Independen Osaka",
    lead: "Toko buku lama yang tutup satu per satu kini bangkit dengan model baru: setengah kafe, setengah ruang baca, disewakan juga untuk kelas malam. Jumlah toko independen naik untuk pertama kali dalam satu dekade.",
    authorId: "farhan",
    hoursAgo: 40,
    views: 3260,
    readMinutes: 4,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=70",
    paragraphs: [
      "OSAKA — Di lorong belakang stasiun timur, toko buku Mori Bunko membuka pintunya pukul tujuh pagi seperti biasa. Yang berbeda adalah bau kopi sangrai yang mengalir dari bagian belakang toko: setengah bangunan kini berfungsi sebagai kafe dengan 24 kursi, rak majalah komunitas, dan meja panjang yang berubah menjadi kelas menulis setiap selasa malam.",
      "Mori Bunko adalah satu dari sembilan toko buku independen yang membuka kembali pintunya di Osaka dalam dua tahun terakhir — jumlah yang membuat peta toko buku kota ini untuk pertama kalinya dalam satu dekade bertambah, bukan berkurang. Model bisnisnya mirip: memisahkan ruang menjadi toko dan ruang ketiga yang menghasilkan pendapatan harian, sementara buku tetap menjadi identitas tempat.",
      "Pemilik generasi kedua, Kenji Morimoto, mengaku sempat bersiap menutup toko warisan ayahnya tiga tahun lalu. Perubahan datang dari keputusan sederhana: menyisihkan dua rak untuk koleksi pinjaman pelanggan dan membuka jam malam. \u201cPelanggan datang untuk kopi, lalu pulang membawa buku. Orang tidak membeli buku dari tempat yang tidak ingin mereka tinggali lama,\u201d katanya sambil mengisi rak penjualan mingguan dari persediaan bekas.",
      "Asosiasi toko buku kota merespons dengan pelatihan singkat perizinan usaha makanan dan pendampingan desain ulang ruang untuk anggota yang ingin mengubah model serupa. Kritik pun muncul — sejumlah pelanggan lama merasa suasana khas toko buku sunyi mulai memudar. Morimoto menjawab dengan satu aturan rumah: lantai dua tetap bebas kopi, bebas percakapan, dan tidak boleh diubah selama ia masih memegang kuncinya.",
    ],
  },
];

// ---------- Helper ----------
export const articleById = (id) => ARTICLES.find((a) => a.id === id);

export const relatedArticles = (article, n = 3) => {
  const sameCat = ARTICLES.filter(
    (a) => a.id !== article.id && a.category === article.category
  );
  const others = ARTICLES.filter(
    (a) => a.id !== article.id && a.category !== article.category
  ).sort((x, y) => y.views - x.views);
  return [...sameCat, ...others].slice(0, n);
};

export const popularArticles = (n = 5) =>
  [...ARTICLES].sort((a, b) => b.views - a.views).slice(0, n);
