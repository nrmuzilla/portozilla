// Mengambil elemen tombol switch theme dari HTML; tanda ? nanti dipakai agar aman kalau elemennya tidak ditemukan.
const themeSwitch = document.querySelector(".switch-theme");

// Mengambil gambar ikon mode gelap di dalam tombol switch theme.
const darkModeIcon = themeSwitch?.querySelector(".gelap img");

// Mengambil gambar ikon mode terang di dalam tombol switch theme.
const lightModeIcon = themeSwitch?.querySelector(".terang img");

// Menyimpan path gambar idle dan hover untuk ikon theme agar tidak ditulis berulang-ulang.
const icons = {
  // Data ikon yang dipakai saat website sedang berada di mode terang dan tombol menawarkan mode gelap.
  dark: {
    // Ikon normal untuk tombol mode gelap.
    idle: "images/dark-mode-fill0.svg",
    // Ikon saat tombol mode gelap di-hover.
    hover: "images/dark-mode-fill1.svg",
  },
  // Data ikon yang dipakai saat website sedang berada di mode gelap dan tombol menawarkan mode terang.
  light: {
    // Ikon normal untuk tombol mode terang.
    idle: "images/light-mode-fill0.svg",
    // Ikon saat tombol mode terang di-hover.
    hover: "images/light-mode-fill1.svg",
  },
};

// Mencari semua elemen yang punya data gambar idle dan hover, lalu memberi efek ganti ikon.
document.querySelectorAll("[data-idle-src][data-hover-src]").forEach((element) => {
  // Kalau elemen itu sendiri adalah img, pakai langsung; kalau bukan, cari img di dalamnya.
  const image = element.matches("img") ? element : element.querySelector("img");

  // Kalau tidak ada gambar, hentikan proses untuk elemen ini supaya tidak error.
  if (!image) return;

  // Untuk kartu CV, area hover dibuat satu kartu penuh; untuk elemen lain, cukup elemennya sendiri.
  const container = element.closest(".cv-card") || element;

  // Fungsi kecil untuk mengganti gambar ke versi hover.
  const setHover = () => {
    // Mengubah src gambar ke path yang disimpan di atribut data-hover-src.
    image.src = element.dataset.hoverSrc;
  };

  // Fungsi kecil untuk mengembalikan gambar ke versi idle.
  const setIdle = () => {
    // Mengubah src gambar kembali ke path yang disimpan di atribut data-idle-src.
    image.src = element.dataset.idleSrc;
  };

  // Saat pointer masuk ke area container, ikon berubah ke versi hover.
  container.addEventListener("mouseenter", setHover);

  // Saat pointer keluar dari area container, ikon kembali ke versi normal.
  container.addEventListener("mouseleave", setIdle);

  // Saat elemen mendapat fokus keyboard, ikon juga berubah agar aksesibel.
  container.addEventListener("focusin", setHover);

  // Saat fokus keyboard keluar, ikon kembali normal.
  container.addEventListener("focusout", setIdle);
});

// Fungsi untuk memastikan kedua ikon theme selalu kembali ke versi idle.
const setIdleIcons = () => {
  // Mengembalikan ikon gelap ke gambar normal.
  darkModeIcon.src = icons.dark.idle;

  // Mengembalikan ikon terang ke gambar normal.
  lightModeIcon.src = icons.light.idle;
};

// Fungsi untuk memilih ikon theme yang sedang aktif terlihat oleh user.
const activeIcon = () => {
  // Jika body punya class darkmode, tombol menampilkan ikon terang; kalau tidak, menampilkan ikon gelap.
  return document.body.classList.contains("darkmode") ? lightModeIcon : darkModeIcon;
};

// Fungsi untuk memilih pasangan gambar idle/hover sesuai tema saat ini.
const activeIconSet = () => {
  // Saat darkmode aktif, user ditawari light icon; saat darkmode mati, user ditawari dark icon.
  return document.body.classList.contains("darkmode") ? icons.light : icons.dark;
};

// Saat tombol theme di-hover, ikon aktif diganti ke versi hover.
themeSwitch?.addEventListener("mouseenter", () => {
  // Mengubah src ikon aktif memakai data hover dari set ikon yang sesuai.
  activeIcon().src = activeIconSet().hover;
});

// Saat hover keluar dari tombol theme, ikon dikembalikan ke versi idle.
themeSwitch?.addEventListener("mouseleave", setIdleIcons);

// Saat tombol theme diklik, mode gelap/terang ditukar.
themeSwitch?.addEventListener("click", () => {
  // Toggle class darkmode pada body; CSS akan membaca class ini untuk mengganti warna.
  document.body.classList.toggle("darkmode");

  // Setelah tema berubah, reset ikon agar tidak tertinggal di state hover.
  setIdleIcons();

  // Menentukan teks aria-label berikutnya agar screen reader tahu aksi tombol selanjutnya.
  const nextTheme = document.body.classList.contains("darkmode") ? "terang" : "gelap";

  // Memperbarui aria-label sesuai tema yang bisa diaktifkan setelah klik berikutnya.
  themeSwitch.setAttribute("aria-label", `Ganti ke tema ${nextTheme}`);
});

// Menambahkan dukungan keyboard untuk tombol theme.
themeSwitch?.addEventListener("keydown", (event) => {
  // Enter dan Space adalah tombol standar untuk mengaktifkan kontrol seperti button.
  if (event.key === "Enter" || event.key === " ") {
    // Mencegah Space menggulir halaman ketika dipakai untuk menekan tombol.
    event.preventDefault();

    // Memakai click() agar logika keyboard sama persis dengan logika mouse.
    themeSwitch.click();
  }
});
