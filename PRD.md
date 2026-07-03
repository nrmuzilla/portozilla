<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PRD — Porto Zilla</title>
</head>
<body>
  <h1>PRD — Porto Zilla</h1>
  <p><strong>Product Requirements Document</strong><br>
  Versi: 1.0 | Tanggal: Juli 2026 | Pemilik Produk: Roja Rafi Nur Muzilla</p>
  <hr>

  <h2>1. Latar Belakang</h2>
  <p>Kamu adalah calon animator 3D yang saat ini sedang menjalani program magang. Selama ini, kebanyakan animator memamerkan demo reel mereka lewat platform terpisah seperti Google Drive, YouTube, atau Vimeo - sementara resume dan cover letter dikirim terpisah lagi lewat email atau PDF. Ini membuat proses review oleh pihak rekrutmen jadi terpecah-pecah dan memakan waktu lebih lama.</p>
  <p><strong>Porto Zilla</strong> hadir sebagai satu website portofolio yang menyatukan <strong>Demo Reel, Resume, dan Cover Letter</strong> dalam satu pengalaman visual yang konsisten, sehingga pihak studio animasi bisa menilai kualitas kerja kamu secepat dan semudah mungkin.</p>
  <hr>

  <h2>2. Tujuan (Goals)</h2>
  <ol>
    <li>Menyediakan satu tautan (single link) yang berisi Demo Reel, Resume, dan Cover Letter dalam satu kesatuan desain.</li>
    <li>Mempercepat proses review oleh HRD/Recruiter/Supervisor Animasi/Director Animasi - idealnya mereka bisa menilai kandidat dalam &lt; 2 menit.</li>
    <li>Menampilkan demo reel secara native di website (bukan redirect ke YouTube/Vimeo/GDrive) agar pengalaman menonton mulus dan profesional.</li>
    <li>Membangun personal branding yang kuat dan modern sebagai animator 3D.</li>
    <li>Menjadi sarana belajar HTML, CSS, dan JavaScript dari dasar (fondasi sebelum lanjut ke framework).</li>
  </ol>

  <h3>Non-Goals (di luar cakupan awal)</h3>
  <ul>
    <li>Tidak membangun CMS/back-end kompleks di fase awal.</li>
    <li>Tidak membuat blog atau fitur komunitas.</li>
    <li>Tidak multi-bahasa di MVP (fokus 1 bahasa dulu, bisa Inggris untuk menyasar studio internasional).</li>
  </ul>
  <hr>

  <h2>3. Target Pengguna (User Personas)</h2>
  <table>
    <thead>
      <tr>
        <th>Persona</th>
        <th>Kebutuhan Utama</th>
        <th>Perilaku</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>HRD / Recruiter</strong></td>
        <td>Cek cepat: siapa kandidat, posisi apa, kontak, resume ringkas</td>
        <td>Scan cepat, biasanya &lt; 1 menit, buka banyak kandidat berurutan</td>
      </tr>
      <tr>
        <td><strong>Supervisor Animasi</strong></td>
        <td>Kualitas teknis animasi (timing, weight, arcs), breakdown shot</td>
        <td>Tonton demo reel penuh, kadang scrub/skip ke shot tertentu</td>
      </tr>
      <tr>
        <td><strong>Director Animasi</strong></td>
        <td>Kualitas storytelling, staging, performance acting</td>
        <td>Tonton demo reel, lihat proses/breakdown jika ada</td>
      </tr>
      <tr>
        <td><strong>Kamu (pemilik portofolio)</strong></td>
        <td>Update mudah saat ada pekerjaan baru, kontrol penuh atas presentasi</td>
        <td>Edit berkala, deploy ulang saat ada karya baru</td>
      </tr>
    </tbody>
  </table>
  <hr>

  <h2>4. Masalah yang Dipecahkan (Problem Statement)</h2>
  <blockquote>
    <p>"Sebagai animator 3D yang melamar kerja, saya ingin recruiter dan animation director bisa melihat demo reel, resume, dan cover letter saya dalam satu tempat yang rapi dan cepat diakses - tanpa mereka harus membuka banyak tab atau menunggu video buffering dari platform pihak ketiga."</p>
  </blockquote>
  <hr>

  <h2>5. Fitur &amp; Requirement</h2>
  <h3>5.1 MVP (Fase 1) - Wajib Ada</h3>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Fitur</th>
        <th>Deskripsi</th>
        <th>Prioritas</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>F1</td>
        <td><strong>Hero Section</strong></td>
        <td>Nama, tagline singkat, role ("3D Animator"), CTA ke Demo Reel</td>
        <td>Must</td>
      </tr>
      <tr>
        <td>F2</td>
        <td><strong>Demo Reel Player</strong></td>
        <td>Video player native (HTML5 <code>&lt;video&gt;</code>) yang di-embed langsung, bukan iframe YouTube/Vimeo. Ada thumbnail, tombol play, kontrol dasar</td>
        <td>Must</td>
      </tr>
      <tr>
        <td>F5</td>
        <td><strong>Resume Section</strong></td>
        <td>Resume ditampilkan sebagai halaman web (bento grid responsive) (bukan cuma link PDF terpisah), plus tombol "Download PDF"</td>
        <td>Must</td>
      </tr>
        <tr>
        <td>F4</td>
        <td><strong>About Me Section</strong></td>
        <td>Foto/ilustrasi diri, cerita singkat, serta rencana jangka pendek, menengah, dan panjang yang dibalut dalam nada resmi seperti cover letter. Disertai dengan link media sosial baru di tab terpisah ke YouTube, Instagram, TikTok, X, dan Facebook.</td>
        <td>Must</td>
      </tr>
      <tr>
        <td>F8</td>
        <td><strong>Navigasi Satu Halaman (Single Page)</strong></td>
        <td>Semua bagian bisa diakses lewat scroll + navbar sticky dengan anchor link. dan di bagi per section (Hero, Resume, About). class dan id menggunakan bahasa indonesia baku tidak disingkat.</td>
        <td>Must</td>
      </tr>
      <tr>
        <td>F9</td>
        <td><strong>Responsive Design</strong></td>
        <td>Layout menyesuaikan desktop, tablet, dan mobile (recruiter sering cek dari HP)</td>
        <td>Must</td>
      </tr>
      <tr>
        <td>F10</td>
        <td><strong>Performa Loading Cepat</strong></td>
        <td>Video dikompresi &amp; lazy-load agar tidak lambat dibuka</td>
        <td>Must</td>
      </tr>
        <tr>
        <td>F13</td>
        <td><strong>Dark/Light mode toggle<strong></td>
        <td>Sesuai estetika M3 dan preferensi pengguna</td>
        <td>Must</td>
      </tr>
    </tbody>
  </table>

  <h2>6. User Stories</h2>
  <ol>
    <li>Sebagai <strong>Recruiter/Director Animasi/Supervisor animasi</strong>, saya ingin langsung melihat demo reel begitu halaman terbuka, agar saya tidak perlu mencari-cari.</li>
    <li>Sebagai <strong>HRD</strong>, saya ingin resume dan cover letter mudah dibaca dan diunduh sebagai PDF, agar bisa dilampirkan ke sistem rekrutmen internal.</li>
    <li>Sebagai <strong>pemilik website</strong>, saya ingin struktur kode yang sederhana (HTML/CSS/JS murni), agar saya bisa belajar sambil membangun dan mudah di-maintain sendiri.</li>
    <li>Sebagai <strong>pengunjung mobile</strong>, saya ingin video dan layout tetap nyaman dilihat di HP, karena banyak recruiter mengecek dari ponsel di sela-sela kerja.</li>
  </ol>
  <hr>

  <h2>7. Spesifikasi Teknis (Fase Awal)</h2>
  <ul>
    <li><strong>Stack:</strong> HTML5, CSS3 vanilla, JavaScript vanilla (ES6+).</li>
    <li><strong>Video:</strong> File video di-hosting sendiri (self-hosted) dalam format <code>.mp4</code> (H.264) terkompresi, dengan poster/thumbnail image. Pertimbangkan ukuran file vs kualitas (target &lt; 50MB per reel untuk loading cepat, atau gunakan hosting video seperti Cloudflare Stream/Bunny.net di fase lanjutan bila ukuran besar).</li>
    <li><strong>Struktur folder disarankan:</strong></li>
  </ul>
  <pre><code>porto-zilla/
├── index.html
├── /css
│   └── style.css
│   └── animation.css
├── /js
│   └── main.js
├── /assets
│   ├── /videos
│   ├── /images
│   └── /docs (resume.pdf, cover-letter.pdf)
└── README.md</code></pre>
  <ul>
    <li><strong>Hosting:</strong> Statis, bisa pakai GitHub Pages, Netlify, atau Vercel (gratis, cepat, cocok untuk HTML/CSS/JS murni).</li>
    <li><strong>Desain Sistem:</strong> Material Design 3 (lihat <code>Design.md</code> untuk detail).</li>
    <li><strong>Aksesibilitas dasar:</strong> kontras warna cukup, alt text pada gambar, video punya kontrol keyboard-accessible.</li>
  </ul>
  <hr>

  <h2>8. Metrik Keberhasilan (Success Metrics)</h2>
  <table>
    <thead>
      <tr>
        <th>Metrik</th>
        <th>Target</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Waktu recruiter menemukan demo reel sejak buka halaman</td>
        <td>&lt; 5 detik (langsung terlihat di hero/scroll pertama)</td>
      </tr>
      <tr>
        <td>Waktu loading halaman (First Contentful Paint)</td>
        <td>&lt; 2 detik di koneksi standar</td>
      </tr>
      <tr>
        <td>Response rate lamaran kerja setelah pakai Porto Zilla</td>
        <td>Meningkat dibanding metode lama (kualitatif, dipantau sendiri)</td>
      </tr>
      <tr>
        <td>Kompatibilitas device</td>
        <td>Berfungsi baik di Chrome, Safari, Edge — desktop &amp; mobile</td>
      </tr>
    </tbody>
  </table>
  <hr>

  <h2>10. Risiko &amp; Mitigasi</h2>
  <table>
    <thead>
      <tr>
        <th>Risiko</th>
        <th>Mitigasi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>File video terlalu besar → loading lambat</td>
        <td>Kompresi video, gunakan resolusi 1080p secukupnya, lazy load</td>
      </tr>
      <tr>
        <td>Belajar HTML/CSS/JS dari nol memakan waktu</td>
        <td>Bangun bertahap per section, mulai dari struktur paling sederhana</td>
      </tr>
      <tr>
        <td>Desain terlihat "template" dan tidak personal</td>
        <td>Tambahkan sentuhan personal branding di atas fondasi M3 (lihat <code>Design.md</code>)</td>
      </tr>
      <tr>
        <td>Website diperlukan saat ingin melamar kerja</td>
        <td>Struktur konten dibuat modular agar mudah diupdate</td>
      </tr>
    </tbody>
  </table>
  <hr>

  <h2>11. Referensi Desain</h2>
  <p>Lihat <strong>Design.md</strong> untuk panduan visual lengkap berbasis Material Design 3.</p>
</body>
</html>