/**
 * Master Data Desa Sukagalih, Kecamatan Sukaratu, Kabupaten Tasikmalaya
 * Dikompilasi dari Dokumen Resmi Profil Desa Sukagalih & Program KKN 2026 Universitas BTH
 */

const SukagalihData = {
  // Informasi Dasar & Identitas
  villageInfo: {
    name: "Desa Sukagalih",
    district: "Kecamatan Sukaratu",
    regency: "Kabupaten Tasikmalaya",
    province: "Jawa Barat",
    country: "Indonesia",
    postalCode: "46415",
    tagline: "Digitalisasi Desa Sukagalih: Mengenalkan Potensi, Menghubungkan Masyarakat.",
    shortDesc: "Desa Sukagalih merupakan salah satu desa di Kecamatan Sukaratu, Kabupaten Tasikmalaya, Jawa Barat yang berada di kaki Gunung Galunggung dengan panorama alam yang asri, kesuburan tanah vulkanik, potensi pertanian, perikanan kolam air tawar, serta kehangatan masyarakat gotong royong.",
    longDesc: "Desa Sukagalih terletak pada ketinggian 400 s.d 450 mdpl dengan topografi perbukitan dan hamparan sawah subur. Berjarak sekitar 4 Km dari ibu kota Kecamatan Sukaratu dan 16 Km dari pusat Ibu Kota Kabupaten Tasikmalaya melalui akses jalan beraspal hotmix. Website ini menjadi media informasi digital untuk mengenalkan kehidupan, potensi, kegiatan, dan masyarakat Desa Sukagalih secara berkelanjutan.",
    locationBadge: "Sukaratu • Tasikmalaya • Jawa Barat",
    coordinates: {
      lat: -7.2625,
      lng: 108.1633,
      zoom: 14
    },
    hotline: "0813-2369-0168",
    email: "ds.sukagalih@gmail.com",
    address: "Jl. Desa Sukagalih No. 01, Dusun Cikatubang, Kec. Sukaratu, Kab. Tasikmalaya, Jawa Barat 46415",
    officeHours: "Senin - Jumat: 08.00 - 15.30 WIB",
  },

  // Sejarah & Dasar Hukum
  history: {
    birthDate: "01 Januari 1979",
    legalBasis: [
      "Rafel Gubernur Kepala Daerah Tingkat 1 Provinsi Jawa Barat Nomor: 2046/M/5/1978 Tanggal 23 Mei 1978",
      "Bupati Kepala Daerah Tingkat II Kabupaten Tasikmalaya Nomor: PM.022.1/27/B/SK/1978 TMT 01 Januari 1979"
    ],
    narrative: "Desa Sukagalih merupakan desa hasil pemekaran dari Desa Sukamahi (Desa Induk), yang pada 1 Januari 1979 dimekarkan menjadi 3 desa mandiri: Desa Sukamahi (Desa Induk), Desa Sukagalih (Pemekaran), dan Desa Sukalaksana (kini masuk wilayah Kec. Bungursari Kota Tasikmalaya). Sejak berdirinya, Desa Sukagalih terus bertumbuh menjadi pusat pertanian dan kemasyarakatan yang harmonis di kaki Gunung Galunggung.",
    timeline: [
      { year: "1978", title: "Penerbitan SK Pemekaran", desc: "Dikeluarkannya Keputusan Gubernur Jabar & SK Bupati Tasikmalaya perihal pemekaran Desa Sukamahi." },
      { year: "1979", title: "Kelahiran Resmi Desa Sukagalih", desc: "TMT 01 Januari 1979, Desa Sukagalih resmi berdiri sebagai desa otonom dipimpin Kepala Desa pertama Bpk. Sadeli." },
      { year: "1979 - 1992", title: "Kepemimpinan Bpk. Sadeli", desc: "Masa bakti 2 periode meletakkan fondasi infrastruktur dasar dan tata ruang persawahan desa." },
      { year: "1992 - 1997", title: "Kepemimpinan Bpk. Kundang Siswara", desc: "Peningkatan saluran irigasi pertanian dan penguatan lembaga kemasyarakatan." },
      { year: "1997 - 2000", title: "Kepemimpinan Bpk. Ano Karno", desc: "Pengembangan sarana transportasi desa dan jalan penghubung antardusun." },
      { year: "2000 - 2007", title: "Kepemimpinan Bpk. Asep Suryaman, SP", desc: "Modernisasi pertanian, pembentukan kelompok tani terpadu, dan sarana pendidikan dasar." },
      { year: "2007 - 2013", title: "Kepemimpinan Bpk. Nanang Sunarli", desc: "Pembangunan sarana prasarana desa dan penguatan ekonomi kerakyatan." },
      { year: "2013 - 2018", title: "Kepemimpinan Bpk. Rajak Prihatnadi, PW, SP", desc: "Percepatan pembangunan lingkungan dan penguatan tata kelola pemerintahan desa." },
      { year: "2018 - 2025/Sekarang", title: "Kepemimpinan Bpk. Warman (2 Periode)", desc: "Era digitalisasi desa, pemerataan infrastruktur 4 dusun, pembinaan UMKM, dan penguatan kemandirian ekonomi desa." },
    ]
  },

  // Visi & Misi Resmi
  visionMission: {
    vision: "Desa Membangun secara Merata, Komprehensif di Segala Bidang",
    visionNote: "Visi ini dijabarkan dari Dokumen RPJM Desa Sukagalih sebagai pedoman seluruh rencana program pembangunan desa yang partisipatif dan berkesinambungan.",
    missions: [
      {
        no: "01",
        title: "Pemberdayaan SDM Religius",
        desc: "Membangun Sumber Daya Manusia yang religius, berakhlak mulia, dan berpendidikan melalui penguatan sarana keagamaan dan pembinaan generasi muda."
      },
      {
        no: "02",
        title: "Pembangunan Sistematis & Musyawarah",
        desc: "Menginventarisir sasaran pembangunan yang diperlukan secara sistematis melalui mekanisme musyawarah dengan masyarakat di tiap-tiap dusun dan RW."
      },
      {
        no: "03",
        title: "Pengembangan Potensi Lokal & Kesejahteraan",
        desc: "Menggali potensi wilayah Desa Sukagalih (pertanian, perikanan, UMKM, dan alam) serta mengembangkannya untuk kemakmuran dan kesejahteraan warga."
      },
      {
        no: "04",
        title: "Aparatur Desa Profesional & Akuntabel",
        desc: "Meningkatkan kinerja aparatur desa yang proporsional, akuntabel, transparan, dan berorientasi pada pelayanan prima kepada masyarakat."
      },
      {
        no: "05",
        title: "Sinergi Lembaga & Karang Taruna",
        desc: "Meningkatkan peran aktif Karang Taruna, PKK, RT/RW, dan kelompok masyarakat dalam setiap tahapan pembangunan desa."
      }
    ]
  },

  // Geografis & Wilayah
  geography: {
    totalAreaHa: 174,
    elevation: "400 - 450 mdpl",
    landType: "Tanah Darat, Persawahan Subur, dan Kolam Air Tawar",
    distanceToDistrict: "4 Km (Kecamatan Sukaratu)",
    distanceToRegency: "16 Km (Ibu Kota Kab. Tasikmalaya - Jalan Hotmix)",
    borders: {
      north: "Desa Sukasukur & Desa Sukajadi (Kecamatan Cisayong)",
      south: "Desa Sukamahi & Desa Sukaratu (Kecamatan Sukaratu)",
      east: "Kel. Sukamajukidul & Sukamajukaler (Kecamatan Indihiang)",
      west: "Desa Indrajaya (Kecamatan Sukaratu)"
    },
    landUse: [
      { type: "Pertanian", areaHa: 100, percentage: 57.5, color: "#3F7D3A" },
      { type: "Pemukiman", areaHa: 47, percentage: 27.0, color: "#8BCF7A" },
      { type: "Perikanan Kolam", areaHa: 17, percentage: 9.8, color: "#5FAF52" },
      { type: "Peternakan", areaHa: 10, percentage: 5.7, color: "#244A2A" }
    ],
    dusun: [
      {
        name: "Dusun Cikatubang",
        areaHa: 50,
        population: 1599,
        male: 819,
        female: 780,
        kk: 535,
        krt: 365,
        kadus: "Saepudin",
        desc: "Pusat pemerintahan desa, hamparan pertanian produktif, dan sentra kolam perikanan air tawar."
      },
      {
        name: "Dusun Sindanggalih",
        areaHa: 50,
        population: 1550,
        male: 800,
        female: 750,
        kk: 420,
        krt: 357,
        kadus: "Kokon Purkonudin",
        desc: "Kawasan pemukiman dinamis, sentra UMKM kerajinan, dan kelembagaan pertanian aktif."
      },
      {
        name: "Dusun Sindangkerta",
        areaHa: 40,
        population: 910,
        male: 500,
        female: 410,
        kk: 324,
        krt: 191,
        kadus: "W. Dartiwa",
        desc: "Area perbukitan hijau asri dengan komoditas palawija, perkebunan, dan peternakan rakyat."
      },
      {
        name: "Dusun Parakankawung",
        areaHa: 34,
        population: 800,
        male: 400,
        female: 400,
        kk: 264,
        krt: 193,
        kadus: "Nyanyang Abudin",
        desc: "Lanskap sawah terasering berteras yang memesona, sumber mata air jernih, dan peternakan."
      }
    ]
  },

  // Data Demografi Resmi (Total 5.237 Jiwa)
  demographics: {
    totalPopulation: 5237,
    malePopulation: 2684,
    femalePopulation: 2553,
    totalKK: 1865,
    maleKK: 1407,
    femaleKK: 458,
    totalKRT: 1106,
    maleKRT: 800,
    femaleKRT: 306,
    totalDusun: 4,
    totalRW: 8,
    totalRT: 23,

    // Distribusi Usia Penduduk
    ageGroups: [
      { range: "00-04 Thn", male: 257, female: 349, total: 606 },
      { range: "05-12 Thn", male: 202, female: 216, total: 418 },
      { range: "13-15 Thn", male: 164, female: 143, total: 307 },
      { range: "16-19 Thn", male: 140, female: 179, total: 319 },
      { range: "20-24 Thn", male: 143, female: 145, total: 288 },
      { range: "25-29 Thn", male: 132, female: 132, total: 264 },
      { range: "30-34 Thn", male: 239, female: 101, total: 340 },
      { range: "35-39 Thn", male: 142, female: 140, total: 282 },
      { range: "40-44 Thn", male: 138, female: 120, total: 258 },
      { range: "45-49 Thn", male: 139, female: 120, total: 259 },
      { range: "50-54 Thn", male: 156, female: 119, total: 275 },
      { range: "55-59 Thn", male: 132, female: 120, total: 252 },
      { range: "60-64 Thn", male: 149, female: 107, total: 256 },
      { range: "65-69 Thn", male: 130, female: 111, total: 241 },
      { range: "70-74 Thn", male: 134, female: 106, total: 240 },
      { range: ">75 Thn", male: 122, female: 132, total: 254 }
    ],

    // Tingkat Pendidikan
    education: [
      { level: "SLTP / Sederajat", count: 1737, color: "#3F7D3A" },
      { level: "SD / Sederajat", count: 1536, color: "#5FAF52" },
      { level: "TK / PAUD", count: 1353, color: "#8BCF7A" },
      { level: "SLTA / Sederajat", count: 100, color: "#244A2A" },
      { level: "Sarjana (S1)", count: 78, color: "#18331d" },
      { level: "Diploma (D3)", count: 38, color: "#72bf60" },
      { level: "Magister (S2)", count: 6, color: "#489640" }
    ],

    // Mata Pencaharian Penduduk
    occupations: [
      { job: "Buruh Harian Lepas", count: 300 },
      { job: "Pedagang / Warung", count: 150 },
      { job: "Karyawan Swasta", count: 100 },
      { job: "Peternak & Perikanan", count: 90 },
      { job: "Pengrajin Lokal", count: 50 },
      { job: "Jasa & Transportasi", count: 50 },
      { job: "Wiraswasta", count: 50 },
      { job: "Pegawai Negeri Sipil (PNS)", count: 41 },
      { job: "Pensiunan", count: 13 },
      { job: "Petani Mandiri", count: 10 },
      { job: "Tenaga Honorer", count: 7 },
      { job: "TNI / POLRI", count: 2 }
    ]
  },

  // Pemerintahan & Lembaga Desa (Nomor Telepon Pribadi Tidak Dicantumkan)
  government: {
    headOfVillage: {
      name: "Warman",
      title: "Kepala Desa Sukagalih",
      period: "2018 - Sekarang (Periode Ke-2)",
      education: "SLTA",
      birthDate: "Tasikmalaya, 06-11-1971"
    },
    secretary: {
      name: "Utep",
      title: "Sekretaris Desa",
      education: "SLTA",
      birthDate: "Tasikmalaya, 15-01-1973"
    },
    staff: [
      { name: "Asep Toha", role: "Kaur Perencanaan", edu: "SLTA", dob: "Tsm, 10-10-1969" },
      { name: "Bambang Turkamto", role: "Kaur TU & Umum", edu: "SLTA", dob: "Tsm, 07-10-1972" },
      { name: "Imas Yulianingsih", role: "Kaur Keuangan", edu: "SLTA", dob: "Tsm, 18-12-1985" },
      { name: "Atun Abdulrohim", role: "Kasi Pemerintahan", edu: "SLTA", dob: "Tsm, 12-10-1969", nipd: "19691012 06312006 0005" },
      { name: "Pipit Puspitasari Dewi", role: "Kasi Kesra", edu: "SLTA", dob: "Tsm, 04-09-1986" },
      { name: "Utang Sutarman", role: "Kasi Pelayanan", edu: "SLTA", dob: "Tsm, 08-12-1969" },
      { name: "Saepudin", role: "Kadus Cikatubang", edu: "SLTA", dob: "Tsm, 15-07-1974" },
      { name: "Kokon Purkonudin", role: "Kadus Sindanggalih", edu: "SLTA", dob: "Tsm, 14-03-1965" },
      { name: "W. Dartiwa", role: "Kadus Sindangkerta", edu: "SLTA", dob: "Tsm, 10-10-1980" },
      { name: "Nyanyang Abudin", role: "Kadus Parakankawung", edu: "SLTA", dob: "Tsm, 04-09-1975" },
      { name: "Windi Wardini", role: "Staf Kesejahteraan", edu: "SLTA", dob: "Pdgl, 15-06-1991" },
      { name: "Yosep Awaludin", role: "Staf Pemerintahan", edu: "SLTA", dob: "Cnjr, 31-01-1986" },
      { name: "Whisnusyah Ibrahim", role: "Staf Perencanaan", edu: "SLTA", dob: "Bdg, 21-03-1981" }
    ],

    // Badan Permusyawaratan Desa (BPD)
    bpd: [
      { name: "Tatan Cantaka Bahtiar, BA", role: "Ketua BPD", edu: "SLTA", dob: "Tsm, 04-03-1965" },
      { name: "Wawan Setiawan", role: "Wakil Ketua BPD", edu: "SLTA", dob: "Tsm, 14-03-1981" },
      { name: "Lili Dahli", role: "Sekretaris BPD", edu: "SLTA", dob: "Tsm, 19-10-1949" },
      { name: "Sintia Ratnasari", role: "Bendahara BPD", edu: "SLTA", dob: "Tsm, 21-01-1992" },
      { name: "Ateng Nurdin", role: "Bidang Pemerintahan", edu: "SLTA", dob: "Tsm, 09-07-1975" },
      { name: "Dadang Taryana", role: "Bidang Kemasyarakatan", edu: "SLTA", dob: "Bdg, 15-04-1964" },
      { name: "Andi Hidayat", role: "Bidang Pembangunan", edu: "SLTA", dob: "Tsm, 21-03-1984" }
    ],

    // Lembaga Pertanian & Gapoktan
    agricultureGroups: [
      { name: "GAPOKTAN Galih Mukti", ketua: "Tatang Ruhiyat", sekretaris: "Atun Abdulrohim", bendahara: "Lili Dahli", lokasi: "Desa Sukagalih" },
      { name: "Poktan Pada Suka Sarengkol", ketua: "Sambas Abdul Farid", sekretaris: "Tatang Somantri", bendahara: "Asep Suryaman, SP", lokasi: "Kp. Sarengkol" },
      { name: "Poktan Daya Remaja", ketua: "Jalaludin", sekretaris: "Rida Faujiah", bendahara: "Atun Abdulrohim", lokasi: "Kp. Cikatubang / Tolenjeng" },
      { name: "Poktan Jaya Makmur", ketua: "Tatan Cantaka Bahtiar", sekretaris: "Lili Dahli", bendahara: "Kokon Purkonudin", lokasi: "Kp. Sindanggalih" },
      { name: "Poktan Kerta Raharja", ketua: "Ediyanto Ruswiandi", sekretaris: "Dindin Rosidin Husna, S.IP", bendahara: "Ence Nurman", lokasi: "Kp. Sindangkerta" },
      { name: "Poktan Tunas Jaya", ketua: "Tatang Ruhiyat", sekretaris: "Yudi Iswahyudi", bendahara: "Enjah", lokasi: "Kp. Parakankawung" },
      { name: "KWT Mekar Rahayu (Wanita Tani)", ketua: "Dra. Atih", sekretaris: "Erna Karnia", bendahara: "Dede Erwina Hasyim", lokasi: "Kp. Cikatubang" },
      { name: "KWT Melati", ketua: "Hj. Dadah", sekretaris: "Rosyani", bendahara: "Patmasari", lokasi: "Kp. Sarengkol" },
      { name: "Padepokan Kabuyutan Tolenjeng", ketua: "Atun Abdulrohim", sekretaris: "Wisnu Ibrahim", bendahara: "Budi Setiawan", lokasi: "Kp. Cikatubang / Tolenjeng" }
    ],

    // Sarana Keagamaan (DKM Masjid)
    mosques: [
      { name: "DKM Nurul Awaliyah", ketua: "H. Romya", dusun: "Cikatubang", kampung: "Sarengkol", rt: "001", rw: "001" },
      { name: "DKM Nurul Hidayah", ketua: "H. Yusup", dusun: "Cikatubang", kampung: "Cikatubang", rt: "005", rw: "002" },
      { name: "DKM Al-Pur'qon", ketua: "Feri Purnama", dusun: "Cikatubang", kampung: "Cikatubang", rt: "005", rw: "002" },
      { name: "DKM Istiqomah", ketua: "H. Dadan M", dusun: "Sindanggalih", kampung: "Sindanggalih", rt: "009", rw: "003" },
      { name: "DKM Al-Mukaromah", ketua: "Saepul Ahyar, S.IP", dusun: "Sindanggalih", kampung: "Sindanggalih", rt: "013", rw: "005" },
      { name: "DKM Nurul Huda", ketua: "Miftah Farid", dusun: "Sindangkerta", kampung: "Sindangkerta", rt: "017", rw: "007" },
      { name: "DKM Nurul Iman", ketua: "Deden Sutisna", dusun: "Sindangkerta", kampung: "Sindangkerta", rt: "018", rw: "007" },
      { name: "DKM Darussalam", ketua: "Anwar Sanusi", dusun: "Parakankawung", kampung: "Parakankawung", rt: "021", rw: "008" }
    ],

    // Lembaga MUI & DMI
    religiousLeaders: {
      muiKetua: "Rojikin",
      dmiKetua: "Miftah Farid",
      dmiSekretaris: "Abdul Aziz",
      dmiBendahara: "Jajang Hidayat"
    }
  },

  // 6 Sektor Potensi Desa
  potentials: [
    {
      id: "pertanian",
      icon: "🌱",
      title: "Pertanian & Hasil Bumi",
      tagline: "Lumbung Padi Subur Berkah Vulkanik Galunggung",
      desc: "Dengan luas lahan pertanian 100 Ha, Sukagalih menghasilkan padi organik berkualitas tinggi, palawija segar, ubi jalar, sayuran hijau, dan jagung manis yang dialiri air pegunungan alami.",
      metrics: "100 Ha Lahan Produktif • 5 Poktan Aktif",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "perikanan",
      icon: "🐟",
      title: "Perikanan Kolam Air Tawar",
      tagline: "Budidaya Nila, Gurame & Ikan Mas Berkualitas",
      desc: "Memanfaatkan 17 Ha kolam air tawar dengan sistem pengairan alami yang jernih, memproduksi ikan konsumsi segar untuk kebutuhan pasar lokal Tasikmalaya dan sekitarnya.",
      metrics: "17 Ha Kolam Air Tawar • 90 Pembudidaya",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "lingkungan",
      icon: "🌳",
      title: "Lingkungan & Alam Asri",
      tagline: "Kesejukan Udara & Lanskap Hijau Kaki Galunggung",
      desc: "Terletak pada elevasi 400-450 mdpl, Desa Sukagalih diberkahi iklim sejuk, mata air alami yang melimpah, panorama sawah bertingkat, dan pepohonan rindang yang lestari.",
      metrics: "450 mdpl • 100% Suasana Pegunungan",
      image: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "umkm",
      icon: "🛍️",
      title: "UMKM & Olahan Pangan",
      tagline: "Produk Olahan Tradisional Bernilai Tambah",
      desc: "Pemberdayaan usaha mikro warga mulai dari olahan keripik pisang, sale pisang khas Tasikmalaya, gula aren murni, rempah-rempah olahan, hingga aneka olahan hasil perikanan.",
      metrics: "50+ Pelaku Usaha • Berdaya Mandiri",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "wisata",
      icon: "🏡",
      title: "Potensi Wisata & Edukasi",
      tagline: "Ekowisata Sawah, Mata Air & Jalur Trekking",
      desc: "Menawarkan potensi wisata pedesaan berbasis alam: tracking pematang sawah Parakankawung, kesegaran mata air Cikatubang, wisata pemancingan keluarga, dan kearifan lokal Sunda.",
      metrics: "4 Destinasi Potensial • Wisata Ramah Keluarga",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "kerajinan",
      icon: "🎨",
      title: "Kerajinan & Budaya Lokal",
      tagline: "Karya Anyaman Bambu & Tradisi Gotong Royong",
      desc: "Keterampilan tangan masyarakat dalam seni anyaman bambu, peralatan dapur tradisional ramah lingkungan, serta pelestarian seni budaya sunda di Padepokan Kabuyutan Tolenjeng.",
      metrics: "50 Pengrajin • Warisan Budaya Lestari",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80"
    }
  ],

  // Featured Story (Cerita dari Tanah Sukagalih)
  featuredStory: {
    title: "Cerita dari Tanah Sukagalih: Berkah Kesuburan Lereng Galunggung",
    subtitle: "Harmoni Alam, Air Jernih, dan Semangat Gotong Royong yang Menghidupi 4 Dusun",
    content: "Di bawah naungan kemegahan Gunung Galunggung, tanah Sukagalih telah berabad-abad menjadi sumber kehidupan yang menyejahterakan warganya. Melalui pemekaran resmi sejak 1979, empat kepunduhan—Cikatubang, Sindanggalih, Sindangkerta, dan Parakankawung—tumbuh menjadi ekosistem agraris yang tangguh. Aliran air jernih tanpa henti membasahi 100 hektar sawah produktif dan menghidupi belasan hektar kolam perikanan air tawar. Kini, semangat tradisi tersebut bertransformasi melalui digitalisasi desa bersama KKN 2026 Universitas BTH, membuka pintu promosi potensi lokal ke panggung nasional.",
    highlightStats: [
      { label: "Luas Pertanian", value: "100 Ha" },
      { label: "Warga Produktif", value: "5.237 Jiwa" },
      { label: "Elevasi Sejuk", value: "450 mdpl" },
      { label: "Dusun Bersatu", value: "4 Kepunduhan" }
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
  },

  // Direktori UMKM Desa Sukagalih
  umkm: [
    {
      id: "beras-organik-sukagalih",
      name: "Beras Organik Galunggung Sukagalih",
      umkmName: "Poktan Jaya Makmur",
      category: "Pertanian",
      price: "Rp 16.000 / kg",
      priceNum: 16000,
      badge: "Produk Unggulan",
      rating: 4.9,
      sold: "850+ kg",
      location: "Dusun Sindanggalih, RT 11 RW 04",
      whatsapp: "6281323690168",
      desc: "Beras putih premium organik yang dipanen dari sawah terasering Sukagalih. Dialiri mata air murni pegunungan tanpa pestisida kimia berbahaya, menghasilkan nasi yang pulen, wangi alami, dan kaya nutrisi.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ikan-nila-segar",
      name: "Ikan Nila & Gurame Kolam Segar",
      umkmName: "Mina Sejahtera Cikatubang",
      category: "Pertanian",
      price: "Rp 32.000 / kg",
      priceNum: 32000,
      badge: "Segar Harian",
      rating: 4.8,
      sold: "1.2 Ton/Bulan",
      location: "Dusun Cikatubang, Kp. Sarengkol",
      whatsapp: "6281323690168",
      desc: "Ikan nila merah, nila hitam, dan gurame segar hasil budidaya kolam air mengalir Sukagalih. Daging tebal, manis alami tanpa bau lumpur, siap antar hidup atau dalam bentuk filet bersih siap masak.",
      image: "https://images.unsplash.com/photo-1534043464124-3be32fe00099?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kopi-robusta-sukagalih",
      name: "Kopi Robusta Lereng Galunggung",
      umkmName: "Kopi Karta Raharja",
      category: "Minuman",
      price: "Rp 35.000 / 250gr",
      priceNum: 35000,
      badge: "Aroma Khas",
      rating: 4.9,
      sold: "420 bungkus",
      location: "Dusun Sindangkerta, RT 18 RW 07",
      whatsapp: "6281323690168",
      desc: "Biji kopi robusta pilihan yang ditanam pada lereng perbukitan Sukagalih di ketinggian 450 mdpl. Diolah melalui proses medium roast tradisional menghasilkan cita rasa bold cokelat dan karamel alami.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gula-aren-murni",
      name: "Gula Aren Asli Cetak & Semut",
      umkmName: "Pengrajin Aren Parakankawung",
      category: "Makanan",
      price: "Rp 25.000 / bungkus",
      priceNum: 25000,
      badge: "100% Organik",
      rating: 5.0,
      sold: "600+ bungkus",
      location: "Dusun Parakankawung, RT 22 RW 08",
      whatsapp: "6281323690168",
      desc: "Nira pohon aren alami yang disadap langsung setiap pagi oleh warga Dusun Parakankawung. Dimasak dengan kayu bakar tanpa campuran gula putih atau bahan pengawet sintetik.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sale-pisang-renyah",
      name: "Sale Pisang Basah & Keripik Renyah",
      umkmName: "KWT Melati Sarengkol",
      category: "Makanan",
      price: "Rp 15.000 / 200gr",
      priceNum: 15000,
      badge: "Camilan Tradisional",
      rating: 4.7,
      sold: "980 pack",
      location: "Kp. Sarengkol, Dusun Cikatubang",
      whatsapp: "6281323690168",
      desc: "Olahan pisang siem matang pohon yang diasapi secara tradisional kemudian digoreng tepung renyah atau disajikan dalam bentuk sale basah manis legit khas priangan timur.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kerajinan-anyaman-bambu",
      name: "Kerajinan Besek & Anyaman Bambu Kreatif",
      umkmName: "Karya Seni Bambu Sindanggalih",
      category: "Kerajinan",
      price: "Rp 8.000 - Rp 75.000",
      priceNum: 8000,
      badge: "Eco-Friendly",
      rating: 4.8,
      sold: "1.500+ pcs",
      location: "Dusun Sindanggalih, RT 14 RW 05",
      whatsapp: "6281323690168",
      desc: "Produk wadah ramah lingkungan berbahan bambu tali pilihan: besek makanan hantaran, boboko, bakul nasi modern, kap lampu etnik, dan wadah suvenir ramah lingkungan.",
      image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "madu-hutan-odeng",
      name: "Madu Alami Lebah Sukagalih",
      umkmName: "Madu Hutan Galunggung",
      category: "Minuman",
      price: "Rp 85.000 / 350ml",
      priceNum: 85000,
      badge: "Madu Murni",
      rating: 4.9,
      sold: "310 botol",
      location: "Dusun Sindangkerta, Kp. Tolenjeng",
      whatsapp: "6281323690168",
      desc: "Madu mentah (raw honey) murni dari nektar bunga liar di kawasan perbukitan Sukagalih. Kaya enzim aktif dan antioksidan, tanpa pemanasan dan tanpa zat tambahan.",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sambal-terasi-kwt",
      name: "Sambal Terasi & Olahan Rempah Siap Saji",
      umkmName: "KWT Mekar Rahayu Cikatubang",
      category: "Makanan",
      price: "Rp 22.000 / toples",
      priceNum: 22000,
      badge: "Pedas Gurih",
      rating: 4.8,
      sold: "530 toples",
      location: "Dusun Cikatubang, RT 06 RW 02",
      whatsapp: "6281323690168",
      desc: "Sambal olahan kelompok wanita tani menggunakan cabai rawit merah segar dari kebun pekarangan warga, dipadukan terasi Tasikmalaya berkualitas dan rempah pilihan.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Destinasi & Potensi Wisata Desa
  tourism: [
    {
      id: "mata-air-cikatubang",
      name: "Sumber Mata Air Alami Cikatubang",
      category: "Wisata Alam & Pemandian",
      location: "Dusun Cikatubang, Desa Sukagalih",
      hours: "Setiap Hari (06.00 - 17.30 WIB)",
      ticket: "Gratis / Donasi Kebersihan",
      facilities: ["Kolam Alami Jernih", "Area Bilas", "Warung Warga", "Parkir Roda Dua & Empat", "Mushola"],
      desc: "Mata air alami yang keluar dari celah bebatuan vulkanik kaki Gunung Galunggung dengan debit air konstan sepanjang tahun. Airnya sangat jernih, dingin, dan menyegarkan tubuh.",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
      mapsQuery: "Mata Air Cikatubang Sukagalih Sukaratu Tasikmalaya"
    },
    {
      id: "terasering-parakankawung",
      name: "Agrowisata Terasering Parakankawung",
      category: "Agrowisata & Fotografi",
      location: "Dusun Parakankawung, Desa Sukagalih",
      hours: "Setiap Hari (06.00 - 18.00 WIB)",
      ticket: "Gratis",
      facilities: ["Gazebo Pematang Sawah", "Spot Foto Sunset", "Jalur Jogging Sawah", "Kedai Kopi Lokal"],
      desc: "Hamparan sawah berundak-undak yang hijau memesona dengan latar megahnya siluet perbukitan Sukaratu. Sangat cocok untuk berjalan santai di pagi hari, bersepeda, dan berfoto.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      mapsQuery: "Parakankawung Sukagalih Sukaratu Tasikmalaya"
    },
    {
      id: "lembah-sindanggalih",
      name: "Lembah Hijau & Spot Sunrise Sindanggalih",
      category: "Panorama & Camping Ground",
      location: "Dusun Sindanggalih, Desa Sukagalih",
      hours: "Buka 24 Jam (Izin Pengelola untuk Camp)",
      ticket: "Rp 5.000 / orang",
      facilities: ["Area Camping", "Toilet Bersih", "Sumber Air Bersih", "Penerangan Tenaga Surya", "Keamanan 24 Jam"],
      desc: "Titik pandang perbukitan yang menyajikan panorama matahari terbit dengan kabut tipis yang menyelimuti lembah desa Sukaratu. Udara yang sangat sejuk memberikan ketenangan batin.",
      image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80",
      mapsQuery: "Sindanggalih Sukaratu Tasikmalaya"
    },
    {
      id: "padepokan-kabuyutan-tolenjeng",
      name: "Situs Budaya & Padepokan Kabuyutan Tolenjeng",
      category: "Wisata Budaya & Edukasi",
      location: "Kp. Cikatubang / Tolenjeng, Desa Sukagalih",
      hours: "Senin - Sabtu (08.00 - 17.00 WIB)",
      ticket: "Donasi Sukarela",
      facilities: ["Bale Pertemuan Sunda", "Pemandu Sejarah Lokal", "Area Parkir", "Mushola"],
      desc: "Pusat pelestarian kearifan lokal, sejarah pemukiman tua, dan kegiatan kebudayaan Sunda di bawah bimbingan sesepuh dan tokoh masyarakat Sukagalih.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      mapsQuery: "Kabuyutan Tolenjeng Sukagalih Sukaratu Tasikmalaya"
    }
  ],

  // Berita & Kabar Terkini Sukagalih
  news: [
    {
      id: "peluncuran-website-digital-kkn-bth",
      title: "Peluncuran Website Digital Resmi Desa Sukagalih bersama Mahasiswa KKN 2026 Universitas BTH",
      category: "KKN",
      date: "12 Agustus 2026",
      author: "Tim Redaksi Desa & Tim KKN BTH 09",
      excerpt: "Pemerintah Desa Sukagalih secara resmi mengadopsi platform website digital karya kolaborasi bersama 19 mahasiswa KKN Kelompok 09 Universitas Bakti Tunas Husada (BTH) Tasikmalaya untuk keterbukaan informasi publik dan promosi potensi desa.",
      content: `Pemerintah Desa Sukagalih, Kecamatan Sukaratu, Kabupaten Tasikmalaya mencatatkan langkah bersejarah dalam transformasi digital pelayanan publik dengan meluncurkan platform website resmi desa.\n\nInisiatif ini merupakan hasil kolaborasi intensif program kerja 19 mahasiswa KKN Kelompok 09 Universitas Bakti Tunas Husada (BTH) Tasikmalaya Periode 2026 di bawah koordinasi Ketua Kordes Regha Agusta Pratama, Wakil Kordes Muhammad Akbar Alfi Fauzan, tim Humas Akhmad Galfin Manaf & Nikeu Rahayu, Divisi PDD, Acara, Logistik, dan Konsumsi bersama jajaran aparatur Pemerintah Desa di bawah kepemimpinan Kepala Desa Warman.\n\nWebsite ini memuat data kependudukan resmi, direktori UMKM terintegrasi pemesanan WhatsApp, profil 4 dusun, transparansi informasi, hingga direktori wisata alam lereng Galunggung. Kepala Desa Warman menyampaikan apresiasi tinggi atas dedikasi para mahasiswa KKN dalam mewujudkan kemandirian digital bagi masyarakat Sukagalih.`,
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "musrenbangdes-sukagalih-2026",
      title: "Pelaksanaan Musrenbangdes Sukagalih: Prioritaskan Pengairan Sawah dan Pemberdayaan UMKM",
      category: "Desa",
      date: "05 Agustus 2026",
      author: "Pemerintah Desa Sukagalih",
      excerpt: "Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes) Sukagalih menghasilkan kesepakatan prioritas penguatan jaringan irigasi tersier di Dusun Cikatubang dan Sindanggalih serta permodalan kelompok tani.",
      content: `Bertempat di Aula Kantor Desa Sukagalih, Pemerintah Desa bersama BPD, Ketua RT/RW se-Desa Sukagalih, dan tokoh masyarakat menggelar Musrenbangdes untuk menyusun rencana kerja pembangunan tahun berjalan.\n\nDalam musyawarah tersebut, usulan warga dari empat kepunduhan diakomodasi secara demokratis dengan penekanan pada pemeliharaan saluran air untuk 100 hektar lahan sawah produktif serta fasilitasi sertifikasi halal dan izin edar bagi produk olahan makanan KWT desa.`,
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "penyaluran-bantuan-poktan-galih-mukti",
      title: "GAPOKTAN Galih Mukti Sukagalih Salurkan Bibit Unggul & Pupuk Organik ke Petani",
      category: "Pertanian",
      date: "28 Juli 2026",
      author: "Kaur Perencanaan Desa",
      excerpt: "Sebanyak 5 kelompok tani di Desa Sukagalih menerima alokasi bantuan bibit padi varietas unggul dan pupuk hayati ramah lingkungan guna meningkatkan produktivitas panen raya mendatang.",
      content: `Gabungan Kelompok Tani (GAPOKTAN) Galih Mukti Desa Sukagalih menyalurkan paket bantuan sarana produksi pertanian kepada ratusan petani yang tersebar di Kp. Sarengkol, Cikatubang, Sindanggalih, Sindangkerta, dan Parakankawung.\n\nKetua GAPOKTAN Tatang Ruhiyat didampingi Sekretaris Atun Abdulrohim menegaskan komitmen desa untuk terus mempertahankan keunggulan Sukagalih sebagai sentra penghasil beras premium berkualitas tinggi di wilayah Tasikmalaya.`,
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pemeriksaan-kesehatan-gratis-kkn-bth",
      title: "Mahasiswa KKN BTH Gelar Edukasi Swamedikasi & Pemeriksaan Kesehatan Gratis",
      category: "KKN",
      date: "20 Juli 2026",
      author: "Tim Kesehatan KKN BTH",
      excerpt: "Ratusan lansia dan masyarakat Desa Sukagalih antusias mengikuti kegiatan cek gula darah, tensi, asam urat, dan konsultasi penggunaan obat yang aman oleh mahasiswa Universitas BTH.",
      content: `Sebagai wujud kepedulian di bidang kesehatan masyarakat desa, Tim KKN Kelompok 09 Universitas Bakti Tunas Husada mengadakan kegiatan bimbingan kesehatan terpadu dan skrining penyakit tidak menular gratis di Posyandu Melati Dusun Cikatubang.\n\nWarga juga dibekali pengetahuan mengenai budidaya Taman Obat Keluarga (TOGA) seperti jahe merah, temulawak, dan kunyit yang dapat tumbuh subur di pekarangan rumah pedesaan.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gotong-royong-saluran-air-cikatubang",
      title: "Masyarakat Kompak Gelar Gotong Royong Pembersihan Saluran Air & Lingkungan Dusun",
      category: "Kegiatan",
      date: "14 Juli 2026",
      author: "Kadus Cikatubang",
      excerpt: "Warga RW 01 dan RW 02 bergotong royong membersihkan sedimentasi saluran irigasi menjelang musim tanam serentak untuk memastikan pasokan air lancar ke seluruh petak sawah.",
      content: `Nilai luhur gotong royong warga Sukagalih terus terjaga kuat. Puluhan warga bersama anggota Sat-Linmas dan Karang Taruna bahu membahu membersihkan rumput liar dan lumpur endapan di sepanjang aliran irigasi utama Cikatubang.\n\nKegiatan diakhiri dengan tradisi 'Ngaliwet Bareng' beralaskan daun pisang di tepi sawah, mempererat tali silaturahmi antargenerasi.`,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pelatihan-branding-umkm-desa",
      title: "Pelatihan Digital Marketing & Pengemasan Produk UMKM Sukagalih Menembus E-Commerce",
      category: "UMKM",
      date: "02 Juli 2026",
      author: "Tim Digitalisasi KKN",
      excerpt: "Para pelaku usaha kerajinan bambu, gula aren, dan olahan sale pisang Sukagalih dilatih membuat foto produk menarik serta memanfaatkan WhatsApp Business untuk ekspansi pasar.",
      content: `Guna meningkatkan nilai jual produk olahan lokal, workshop pengemasan modern dan pencatatan keuangan sederhana diselenggarakan untuk pelaku UMKM Desa Sukagalih.\n\nDengan adanya katalog digital pada website desa, produk-produk unggulan warga kini dapat dipesan langsung oleh pembeli dari berbagai kota dengan integrasi tautan WhatsApp resmi.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Agenda / Event Desa
  events: [
    {
      dateDay: "17",
      dateMonth: "AGUSTUS",
      year: "2026",
      title: "Peringatan Hari Kemerdekaan RI & Pesta Rakyat Sukagalih",
      location: "Lapangan Desa Sukagalih & 4 Dusun",
      time: "07.30 WIB - Selesai",
      category: "Perayaan Desa",
      desc: "Upacara bendera bersama, karnaval seni budaya sunda tiap dusun, lomba rakyat tradisional, dan pameran bazar kuliner UMKM Sukagalih."
    },
    {
      dateDay: "24",
      dateMonth: "AGUSTUS",
      year: "2026",
      title: "Panen Raya Padi & Tasyakuran GAPOKTAN Galih Mukti",
      location: "Hamparan Sawah Terasering Parakankawung",
      time: "08.00 - 12.00 WIB",
      category: "Pertanian",
      desc: "Kegiatan panen bersama dinas pertanian, apresiasi kelompok tani berprestasi, dan doa bersama kelimpahan rezeki bumi desa."
    },
    {
      dateDay: "05",
      dateMonth: "SEPTEMBER",
      year: "2026",
      title: "Pelayanan Terpadu Posyandu Balita & Lansia Sehat",
      location: "Poskesdes & Posyandu Tiap RW (RW 01 - RW 08)",
      time: "08.30 - 11.30 WIB",
      category: "Kesehatan",
      desc: "Penimbangan balita, imunisasi dasar lengkap, pemberian makanan tambahan (PMT) bergizi, dan pemeriksaan kesehatan rutin lansia."
    },
    {
      dateDay: "12",
      dateMonth: "SEPTEMBER",
      year: "2026",
      title: "Diseminasi Program Kerja & Expo Karya KKN 2026 BTH",
      location: "Aula Serbaguna Kantor Desa Sukagalih",
      time: "09.00 - 14.00 WIB",
      category: "Akademik / KKN",
      desc: "Presentasi akhir program kerja 19 mahasiswa KKN BTH, serah terima platform sistem digital desa, dan pameran dokumentasi kegiatan."
    }
  ],

  // Galeri Foto & Momen Desa
  gallery: [
    {
      id: "gal-1",
      title: "Pemandangan Sawah Terasering Kaki Galunggung",
      category: "Lingkungan",
      dusun: "Dusun Parakankawung",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Suasana Balai Desa & Pelayanan Ramah Masyarakat",
      category: "Kegiatan Desa",
      dusun: "Dusun Cikatubang",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Budidaya Kolam Ikan Air Tawar Mengalir",
      category: "UMKM",
      dusun: "Dusun Cikatubang",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Kerajinan Anyaman Bambu Tradisional Sunda",
      category: "UMKM",
      dusun: "Dusun Sindanggalih",
      image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-5",
      title: "Mata Air Jernih Cikatubang Tempat Segar Warga",
      category: "Wisata",
      dusun: "Dusun Cikatubang",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-6",
      title: "Kolaborasi Mahasiswa KKN BTH bersama Perangkat Desa",
      category: "KKN",
      dusun: "Dusun Cikatubang",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-7",
      title: "Kegiatan Skrining Kesehatan Lansia oleh Tim Farmasi",
      category: "KKN",
      dusun: "Dusun Sindangkerta",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-8",
      title: "Kehangatan Warga Sukagalih saat Gotong Royong",
      category: "Masyarakat",
      dusun: "Dusun Sindanggalih",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-9",
      title: "Perkebunan Kopi Robusta & Palawija Subur",
      category: "Lingkungan",
      dusun: "Dusun Sindangkerta",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-10",
      title: "Keceriaan Anak-Anak di Pengajian Maghrib Mengaji",
      category: "Masyarakat",
      dusun: "Dusun Parakankawung",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-11",
      title: "Pemetikan Daun Teh & Sayuran Segar Pegunungan",
      category: "Pertanian",
      dusun: "Dusun Sindangkerta",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-12",
      title: "Panorama Kabut Pagi di Perbukitan Sukagalih",
      category: "Wisata",
      dusun: "Dusun Sindanggalih",
      image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Program Kerja & Profil 19 Mahasiswa KKN 2026 Universitas BTH
  kknInfo: {
    university: "Universitas Bakti Tunas Husada (BTH) Tasikmalaya",
    groupName: "Kelompok 09 Desa Sukagalih",
    period: "KKN Periode 2026",
    theme: "Digitalisasi Desa, Pemberdayaan Potensi UMKM & Edukasi Kesehatan Masyarakat Berkelanjutan",
    location: "Desa Sukagalih, Kec. Sukaratu, Kab. Tasikmalaya",
    supervisor: "Dosen Pembimbing Lapangan (DPL) KKN BTH 2026",
    totalMembers: 19,
    description: "Program Kuliah Kerja Nyata (KKN) Kelompok 09 Universitas BTH di Desa Sukagalih berfokus pada pembangunan infrastruktur digital informasi desa, pendampingan pemasaran online produk UMKM lokal, pemetaan potensi wilayah, serta pelayanan kesehatan dan edukasi bagi masyarakat desa.",
    programs: [
      {
        title: "Digitalisasi & Sistem Informasi Desa",
        icon: "💻",
        desc: "Membangun website resmi modern yang dapat diakses publik untuk profil desa, transparansi data kependudukan, peta wilayah, dan layanan kontak warga."
      },
      {
        title: "Digitalisasi & Branding UMKM",
        icon: "📈",
        desc: "Mendampingi kelompok wanita tani (KWT) dan pelaku usaha lokal dalam pembuatan katalog digital, foto produk, dan integrasi pemesanan WhatsApp."
      },
      {
        title: "Dokumentasi & Promosi Potensi Desa",
        icon: "📷",
        desc: "Mendokumentasikan lanskap alam, agrowisata terasering, mata air Cikatubang, dan kearifan lokal dalam bentuk media digital interaktif."
      },
      {
        title: "Edukasi Swamedikasi & Kesehatan Terpadu",
        icon: "🩺",
        desc: "Menyelenggarakan cek kesehatan gratis, penyuluhan penggunaan obat rasional (DAGUSIBU), dan pembinaan Taman Obat Keluarga (TOGA)."
      }
    ],
    // 19 Anggota KKN Kelompok 09 Universitas BTH
    members: [
      {
        name: "Regha Agusta Pratama",
        role: "Ketua Koordinator Desa (Kordes)",
        division: "Pimpinan",
        avatar: "👨‍💼",
        badgeColor: "#3F7D3A"
      },
      {
        name: "Muhammad Akbar Alfi Fauzan",
        role: "Wakil Ketua Kordes",
        division: "Pimpinan",
        avatar: "👨‍💼",
        badgeColor: "#3F7D3A"
      },
      {
        name: "Suwandika",
        role: "Sekretaris",
        division: "Sekretariat",
        avatar: "📝",
        badgeColor: "#5FAF52"
      },
      {
        name: "Cindy",
        role: "Sekretaris",
        division: "Sekretariat",
        avatar: "📝",
        badgeColor: "#5FAF52"
      },
      {
        name: "Luthfiyah Nabilah",
        role: "Bendahara",
        division: "Keuangan",
        avatar: "💼",
        badgeColor: "#244A2A"
      },
      {
        name: "Resi Aulia Azhari",
        role: "Bendahara",
        division: "Keuangan",
        avatar: "💼",
        badgeColor: "#244A2A"
      },
      {
        name: "Akhmad Galfin Manaf",
        role: "Humas",
        division: "Humas",
        avatar: "📢",
        badgeColor: "#8BCF7A"
      },
      {
        name: "Nikeu Rahayu",
        role: "Humas",
        division: "Humas",
        avatar: "📢",
        badgeColor: "#8BCF7A"
      },
      {
        name: "Agung Gumilang",
        role: "Divisi PDD",
        division: "PDD",
        avatar: "📸",
        badgeColor: "#3F7D3A"
      },
      {
        name: "Syira Wafiatun Naida",
        role: "Divisi PDD",
        division: "PDD",
        avatar: "🎨",
        badgeColor: "#3F7D3A"
      },
      {
        name: "Naila Naziba",
        role: "Divisi Acara",
        division: "Acara",
        avatar: "🎯",
        badgeColor: "#5FAF52"
      },
      {
        name: "Suci Intan Salimah",
        role: "Divisi Acara",
        division: "Acara",
        avatar: "🎯",
        badgeColor: "#5FAF52"
      },
      {
        name: "Yeni Meilani",
        role: "Divisi Acara",
        division: "Acara",
        avatar: "🎯",
        badgeColor: "#5FAF52"
      },
      {
        name: "Alda Nur Arifin",
        role: "Divisi Logistik",
        division: "Logistik",
        avatar: "📦",
        badgeColor: "#244A2A"
      },
      {
        name: "Eva Sucianti",
        role: "Divisi Logistik",
        division: "Logistik",
        avatar: "📦",
        badgeColor: "#244A2A"
      },
      {
        name: "Hafizha Nur Shaleha",
        role: "Divisi Logistik",
        division: "Logistik",
        avatar: "📦",
        badgeColor: "#244A2A"
      },
      {
        name: "Salwa Fitrian",
        role: "Divisi Logistik",
        division: "Logistik",
        avatar: "📦",
        badgeColor: "#244A2A"
      },
      {
        name: "Hasna Nada Haya",
        role: "Divisi Konsumsi",
        division: "Konsumsi",
        avatar: "🍱",
        badgeColor: "#8BCF7A"
      },
      {
        name: "Nuraeni",
        role: "Divisi Konsumsi",
        division: "Konsumsi",
        avatar: "🍱",
        badgeColor: "#8BCF7A"
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.SukagalihData = SukagalihData;
}
