// Mengambil elemen tombol switch theme dari HTML; tanda ? nanti dipakai agar aman kalau elemennya tidak ditemukan.
const themeSwitch = document.querySelector(".switch-theme");

// Mengambil semua tombol pilihan data-theme.
const themeOptions = document.querySelectorAll("[data-theme-option]");

// Mengambil elemen-elemen modal demo reel.
const videoOpenButton = document.querySelector(".video-open");
const videoModal = document.querySelector(".video-modal");
const videoModalClose = videoModal?.querySelector(".video-modal-close");
const videoModalBackdrop = videoModal?.querySelector(".video-modal-backdrop");
const modalVideo = videoModal?.querySelector("video");

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
  if (darkModeIcon) darkModeIcon.src = icons.dark.idle;

  // Mengembalikan ikon terang ke gambar normal.
  if (lightModeIcon) lightModeIcon.src = icons.light.idle;
};

// Fungsi untuk memilih ikon theme yang sedang aktif terlihat oleh user.
const activeIcon = () => {
  // Jika body punya data-mode dark, tombol menampilkan ikon terang; kalau tidak, menampilkan ikon gelap.
  return document.body.dataset.mode === "dark" ? lightModeIcon : darkModeIcon;
};

// Fungsi untuk memilih pasangan gambar idle/hover sesuai tema saat ini.
const activeIconSet = () => {
  // Saat mode gelap aktif, user ditawari light icon; saat mode terang aktif, user ditawari dark icon.
  return document.body.dataset.mode === "dark" ? icons.light : icons.dark;
};

// Saat tombol theme di-hover, ikon aktif diganti ke versi hover.
themeSwitch?.addEventListener("mouseenter", () => {
  // Mengubah src ikon aktif memakai data hover dari set ikon yang sesuai.
  const icon = activeIcon();

  if (icon) icon.src = activeIconSet().hover;
});

// Saat hover keluar dari tombol theme, ikon dikembalikan ke versi idle.
themeSwitch?.addEventListener("mouseleave", setIdleIcons);

// Saat tombol theme diklik, mode gelap/terang ditukar.
themeSwitch?.addEventListener("click", () => {
  // Toggle data-mode pada body; CSS akan membaca atribut ini untuk mengganti warna.
  const nextMode = document.body.dataset.mode === "dark" ? "light" : "dark";
  document.body.dataset.mode = nextMode;

  // Setelah tema berubah, reset ikon agar tidak tertinggal di state hover.
  setIdleIcons();

  // Menentukan teks aria-label berikutnya agar screen reader tahu aksi tombol selanjutnya.
  const nextTheme = nextMode === "dark" ? "terang" : "gelap";

  // Memperbarui aria-label sesuai tema yang bisa diaktifkan setelah klik berikutnya.
  themeSwitch.setAttribute("aria-label", `Ganti ke tema ${nextTheme}`);
});

// Mengaktifkan tombol pilihan tema warna.
themeOptions.forEach((button) => {
  button.addEventListener("click", () => {
    // Mengambil nama tema dari atribut data-theme-option.
    const selectedTheme = button.dataset.themeOption;

    // Body menyimpan tema aktif agar CSS dapat memilih set variabel warna.
    document.body.dataset.theme = selectedTheme;

    // aria-pressed membantu screen reader mengetahui swatch yang sedang aktif.
    themeOptions.forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });

    // Tutup dropdown jika tema dipilih dari panel.
    const themePickerPanel = document.querySelector(".theme-picker-panel");
    const themePickerTrigger = document.querySelector(".theme-picker-trigger");
    if (themePickerPanel && themePickerTrigger) {
      themePickerPanel.hidden = true;
      themePickerTrigger.setAttribute("aria-expanded", "false");
    }
  });
});

const themePicker = document.querySelector(".theme-picker");
const themePickerTrigger = themePicker?.querySelector(".theme-picker-trigger");
const themePickerPanel = themePicker?.querySelector(".theme-picker-panel");

const closeThemePicker = () => {
  if (!themePickerPanel || !themePickerTrigger) return;
  themePickerPanel.hidden = true;
  themePickerTrigger.setAttribute("aria-expanded", "false");
};

const openThemePicker = () => {
  if (!themePickerPanel || !themePickerTrigger) return;
  themePickerPanel.hidden = false;
  themePickerTrigger.setAttribute("aria-expanded", "true");
};

themePickerTrigger?.addEventListener("click", () => {
  if (!themePickerPanel) return;
  const isOpen = !themePickerPanel.hidden;
  if (isOpen) {
    closeThemePicker();
  } else {
    openThemePicker();
  }
});

// Tutup dropdown ketika klik di luar area theme-picker.
document.addEventListener("click", (event) => {
  if (!themePicker || !themePickerPanel || !themePickerTrigger) return;
  const clickInside = themePicker.contains(event.target);
  if (!clickInside) {
    closeThemePicker();
  }
});

// Escape menutup dropdown jika sedang terbuka.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeThemePicker();
  }
});

// Durasi ini disamakan dengan transisi panel modal di CSS.
const modalTransitionDuration = 300;

// Menyimpan timeout autoplay agar bisa dibatalkan jika modal cepat ditutup.
let modalPlayTimeout;

// Membuka modal demo reel.
const openVideoModal = () => {
  if (!videoModal) return;

  // Modal dibuat terlihat dulu agar transisi CSS bisa berjalan.
  videoModal.hidden = false;
  videoModal.classList.remove("is-closing");

  // requestAnimationFrame memberi browser waktu memasang state awal sebelum animasi masuk.
  requestAnimationFrame(() => {
    videoModal.classList.add("is-open");
    videoModalClose?.focus();

    // Play ditunda sedikit agar decoding video tidak mengganggu frame animasi pembuka.
    modalPlayTimeout = window.setTimeout(() => {
      modalVideo?.play().catch(() => {});
    }, 180);
  });
};

// Menutup modal demo reel dengan animasi keluar.
const closeVideoModal = () => {
  if (!videoModal || videoModal.hidden || videoModal.classList.contains("is-closing")) return;

  videoModal.classList.remove("is-open");
  videoModal.classList.add("is-closing");
  document.body.classList.remove("modal-open");
  window.clearTimeout(modalPlayTimeout);

  // Video dihentikan agar audio tidak lanjut saat modal sudah tertutup.
  modalVideo?.pause();

  window.setTimeout(() => {
    videoModal.hidden = true;
    videoModal.classList.remove("is-closing");
    videoOpenButton?.focus();
  }, modalTransitionDuration);
};

// Klik preview membuka modal demo reel.
videoOpenButton?.addEventListener("click", () => {
  document.body.classList.add("modal-open");
  openVideoModal();
});

// Tombol close dan backdrop menutup modal.
videoModalClose?.addEventListener("click", closeVideoModal);
videoModalBackdrop?.addEventListener("click", closeVideoModal);

// Escape menutup modal ketika sedang terbuka.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && videoModal && !videoModal.hidden) {
    closeVideoModal();
  }
});
