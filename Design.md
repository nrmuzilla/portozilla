<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Design — Porto Zilla</title>
</head>
<body>
  <h1>Design — Porto Zilla</h1>
  <p><strong>Design Language &amp; Visual Guidelines</strong><br>
  Berbasis: <a href="https://m3.material.io/">Material Design 3</a> (Google) | Versi: 1.0</p>
  <hr>

  <h2>1. Prinsip Desain</h2>
  <p>Porto Zilla dibangun di atas fondasi <strong>Material Design 3 (M3)</strong>, tapi dengan sentuhan personal branding animator - bukan tampilan generik "app Google". Tiga prinsip utama:</p>
  <ol>
    <li><strong>Reel-First</strong> — Demo reel adalah bintang utama. Semua elemen desain lain (warna, layout, spacing) harus membuat video jadi fokus, bukan bersaing dengannya.</li>
    <li><strong>Cepat Dipahami</strong> — Recruiter punya waktu terbatas. Hierarki visual harus jelas: nama → role → demo reel → detail.</li>
    <li><strong>Profesional tapi Punya Karakter</strong> — Tetap terasa "kamu", bukan template generik. Warna dan tone bisa mencerminkan gaya animasi kamu (misalnya playful, cinematic, atau technical).</li>
  </ol>
  <hr>

  <h2>2. Sistem Warna (M3 Color System)</h2>
  <p>Material Design 3 menggunakan sistem <strong>tonal palette</strong> dengan warna <em>seed</em> yang menghasilkan beberapa role warna (primary, secondary, tertiary, surface, dll).</p>

  <h3>2.1 Menentukan Warna Seed</h3>
  <p>Pilih satu warna seed yang merepresentasikan brand kamu. Contoh rekomendasi untuk animator 3D (bisa disesuaikan selera):</p>
  <ul>
    <li><strong>Opsi A — Cinematic Indigo:</strong> <code>#4F5B92</code> (profesional, tenang, elegan — cocok untuk kesan "director-friendly")</li>
    <li><strong>Opsi B — Energetic Amber:</strong> <code>#B9770E</code> (hangat, kreatif, menonjolkan sisi playful animator)</li>
    <li><strong>Opsi C — Studio Teal:</strong> <code>#00695C</code> (segar, modern, banyak dipakai studio kreatif)</li>
  </ul>
  <p>Gunakan <a href="https://m3.material.io/theme-builder">Material Theme Builder</a> untuk generate tonal palette lengkap (0–100) dari warna seed pilihanmu, lalu ekspor sebagai CSS Custom Properties.</p>

  <h3>2.2 Role Warna (Light Theme — contoh dengan seed Indigo)</h3>
  <table>
    <thead>
      <tr>
        <th>Role</th>
        <th>Token CSS</th>
        <th>Contoh Hex</th>
        <th>Kegunaan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Primary</td>
        <td><code>--md-sys-color-primary</code></td>
        <td><code>#4F5B92</code></td>
        <td>Tombol utama, link aktif, aksen navbar</td>
      </tr>
      <tr>
        <td>On Primary</td>
        <td><code>--md-sys-color-on-primary</code></td>
        <td><code>#FFFFFF</code></td>
        <td>Teks di atas warna primary</td>
      </tr>
      <tr>
        <td>Primary Container</td>
        <td><code>--md-sys-color-primary-container</code></td>
        <td><code>#DEE0FF</code></td>
        <td>Background chip/tag skill</td>
      </tr>
      <tr>
        <td>Secondary</td>
        <td><code>--md-sys-color-secondary</code></td>
        <td><code>#5C5D72</code></td>
        <td>Elemen pendukung, ikon sosial</td>
      </tr>
      <tr>
        <td>Surface</td>
        <td><code>--md-sys-color-surface</code></td>
        <td><code>#FCF8FF</code></td>
        <td>Background halaman</td>
      </tr>
      <tr>
        <td>Surface Variant</td>
        <td><code>--md-sys-color-surface-variant</code></td>
        <td><code>#E3E1EC</code></td>
        <td>Card, section alternating background</td>
      </tr>
      <tr>
        <td>On Surface</td>
        <td><code>--md-sys-color-on-surface</code></td>
        <td><code>#1B1B21</code></td>
        <td>Teks utama</td>
      </tr>
      <tr>
        <td>Outline</td>
        <td><code>--md-sys-color-outline</code></td>
        <td><code>#767680</code></td>
        <td>Border, divider</td>
      </tr>
      <tr>
        <td>Error</td>
        <td><code>--md-sys-color-error</code></td>
        <td><code>#BA1A1A</code></td>
        <td>Validasi form kontak (jika ada)</td>
      </tr>
    </tbody>
  </table>

  <h3>2.3 Dark Theme</h3>
  <p>Sediakan versi dark dari tonal palette yang sama (M3 Theme Builder generate otomatis). Dark mode penting karena recruiter kadang review portofolio malam hari — video demo reel juga terlihat lebih sinematik di background gelap.</p>
  <pre><code>:root {
  --md-sys-color-primary: #4F5B92;
  --md-sys-color-surface: #FCF8FF;
  --md-sys-color-on-surface: #1B1B21;
  /* ...token lainnya */
}

[data-theme="dark"] {
  --md-sys-color-primary: #BAC3FF;
  --md-sys-color-surface: #131318;
  --md-sys-color-on-surface: #E4E1E9;
  /* ...token lainnya */
}</code></pre>
  <hr>

  <h2>3. Tipografi</h2>
  <p>M3 menggunakan skala tipografi dengan 5 kategori: Display, Headline, Title, Body, Label.</p>
  <table>
    <thead>
      <tr>
        <th>Kategori</th>
        <th>Ukuran (px)</th>
        <th>Weight</th>
        <th>Kegunaan di Porto Zilla</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Display Large</td>
        <td>57</td>
        <td>400</td>
        <td>Nama kamu di Hero Section</td>
      </tr>
      <tr>
        <td>Display Small</td>
        <td>36</td>
        <td>400</td>
        <td>Judul section besar ("Demo Reel", "About Me")</td>
      </tr>
      <tr>
        <td>Headline Medium</td>
        <td>28</td>
        <td>400</td>
        <td>Sub-judul section</td>
      </tr>
      <tr>
        <td>Title Large</td>
        <td>22</td>
        <td>500</td>
        <td>Judul card (nama shot, nama proyek)</td>
      </tr>
      <tr>
        <td>Body Large</td>
        <td>16</td>
        <td>400</td>
        <td>Paragraf deskripsi</td>
      </tr>
      <tr>
        <td>Body Medium</td>
        <td>14</td>
        <td>400</td>
        <td>Teks pendukung, caption</td>
      </tr>
      <tr>
        <td>Label Large</td>
        <td>14</td>
        <td>500</td>
        <td>Teks tombol, tag/chip</td>
      </tr>
    </tbody>
  </table>
  <p><strong>Font Family:</strong> Gunakan <strong>Roboto Flex</strong> atau <strong>Google Sans</strong> (font native M3) untuk UI, dipadukan dengan satu font aksen di Hero (opsional) seperti <strong>Space Grotesk</strong> untuk kesan lebih modern/kreatif jika ingin karakter lebih kuat dari default M3.</p>
  <pre><code>--font-primary: 'Roboto Flex', system-ui, sans-serif;
--font-display: 'Space Grotesk', 'Roboto Flex', sans-serif; /* opsional untuk nama/hero */</code></pre>
  <hr>

  <h2>4. Elevation &amp; Shape</h2>
  <p>M3 mengganti shadow berat dengan <strong>tonal elevation</strong> (permukaan lebih terang/gelap sedikit, bukan cuma shadow) plus shadow tipis.</p>
  <table>
    <thead>
      <tr>
        <th>Level</th>
        <th>Kegunaan</th>
        <th>CSS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Level 0</td>
        <td>Background halaman</td>
        <td><code>box-shadow: none;</code></td>
      </tr>
      <tr>
        <td>Level 1</td>
        <td>Card resume, card shot breakdown</td>
        <td><code>box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06);</code></td>
      </tr>
      <tr>
        <td>Level 2</td>
        <td>Navbar saat di-scroll (sticky)</td>
        <td><code>box-shadow: 0 2px 4px rgba(0,0,0,0.1);</code></td>
      </tr>
      <tr>
        <td>Level 3</td>
        <td>Modal/lightbox video (jika dipakai)</td>
        <td><code>box-shadow: 0 4px 8px rgba(0,0,0,0.15);</code></td>
      </tr>
    </tbody>
  </table>
  <p><strong>Shape (border-radius) M3:</strong></p>
  <ul>
    <li>Small (tombol kecil, chip): <code>8px</code></li>
    <li>Medium (card): <code>12px</code></li>
    <li>Large (card besar, video player container): <code>16–28px</code></li>
    <li>Full (avatar, tombol pill): <code>999px</code></li>
  </ul>
  <hr>

  <h2>5. Komponen Utama</h2>
  <h3>5.1 Navbar (Top App Bar / Navigation)</h3>
  <ul>
    <li>Sticky di atas, transparan di awal → solid dengan elevation saat discroll.</li>
    <li>Isi: Logo/nama "Porto Zilla", anchor link (Demo Reel, About, Resume, Cover Letter, Contact), tombol dark/light mode toggle.</li>
    <li>Di mobile: berubah jadi hamburger menu atau bottom navigation bar (M3 punya pola <em>Navigation Bar</em> untuk mobile).</li>
  </ul>

  <h3>5.2 Hero Section</h3>
  <ul>
    <li>Layout dua kolom di desktop (teks kiri, visual/reel preview kanan) → stack vertikal di mobile.</li>
    <li>Elemen: Nama besar (Display Large), role ("3D Animator"), 1 kalimat value proposition, tombol CTA "Watch Demo Reel" (Filled Button M3) dan "Download Resume" (Outlined Button M3).</li>
  </ul>

  <h3>5.3 Demo Reel Player (Komponen Terpenting)</h3>
  <ul>
    <li>Container besar, shape <code>large</code> (radius 16–24px), full-bleed atau max-width besar agar jadi fokus utama.</li>
    <li>Custom video controls dibangun dengan JS agar sesuai style M3 (bukan default browser player) — tombol play berbentuk <em>Icon Button</em> M3 filled, progress bar pakai warna primary.</li>
    <li>Poster/thumbnail sebelum video diputar, dengan tombol play besar di tengah (FAB — Floating Action Button style M3, shape penuh/circular).</li>
    <li>Di bawah player: daftar <strong>shot breakdown</strong> sebagai list of chips/timestamps yang bisa diklik untuk seek video (<code>video.currentTime = ...</code>).</li>
  </ul>

  <h3>5.5 Resume Section</h3>
  <ul>
    <li>Ditampilkan sebagai layout terstruktur (bukan cuma embed PDF) menggunakan bento grid yang responsive.</li>
    <li>Tombol "Download as PDF" (Outlined Button) tetap disediakan untuk kebutuhan HRD yang perlu file fisik.</li>
  </ul>

  <h3>5.6 About Me Section</h3>
  <ul>
    <li>Foto/ilustrasi diri, cerita singkat, dan rencana jangka pendek, menengah, dan panjang. di balut nada resmi seperti cover letter.</li>
    <li>Link new tab media social Youtube, Instagram, Tiktok, X, dan Facebook.</li>
  </ul>

  <h3>5.7 Tombol (Buttons) - sesuai 5 jenis M3</h3>
  <table>
    <thead>
      <tr>
        <th>Jenis</th>
        <th>Kegunaan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Filled Button</td>
        <td>Aksi utama: "Watch Demo Reel", "Send Email"</td>
      </tr>
      <tr>
        <td>Outlined Button</td>
        <td>Aksi sekunder: "Download Resume"</td>
      </tr>
      <tr>
        <td>Text Button</td>
        <td>Aksi ringan: "Back to top", link inline</td>
      </tr>
      <tr>
        <td>Icon Button</td>
        <td>Kontrol video, toggle dark mode, ikon sosial media</td>
      </tr>
      <tr>
        <td>FAB (Floating Action Button)</td>
        <td>Tombol play besar di atas thumbnail reel</td>
      </tr>
    </tbody>
  </table>
  <hr>

  <h2>6. Layout &amp; Grid</h2>
  <ul>
    <li>Gunakan <strong>CSS Grid/Flexbox</strong> dengan container max-width <code>1200px</code>, padding horizontal responsif (<code>clamp(16px, 5vw, 64px)</code>).</li>
    <li>Spacing mengikuti skala kelipatan 8px (M3 spacing system): <code>8, 16, 24, 32, 48, 64, 96px</code>.</li>
    <li>Section dibedakan dengan alternating background (<code>surface</code> vs <code>surface-variant</code>) agar mata mudah membedakan blok konten saat scroll.</li>
  </ul>

  <h3>Breakpoints</h3>
  <table>
    <thead>
      <tr>
        <th>Device</th>
        <th>Lebar</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mobile</td>
        <td>&lt; 600px</td>
      </tr>
      <tr>
        <td>Tablet</td>
        <td>600–1024px</td>
      </tr>
      <tr>
        <td>Desktop</td>
        <td>&gt; 1024px</td>
      </tr>
    </tbody>
  </table>
  <hr>

  <h2>7. Motion &amp; Interaksi</h2>
  <p>M3 menekankan motion yang <em>purposeful</em> — bukan sekadar hiasan.</p>
  <ul>
    <li><strong>Easing standar M3:</strong> <code>cubic-bezier(0.2, 0, 0, 1)</code> untuk transisi umum (masuk/keluar elemen).</li>
    <li><strong>Durasi:</strong> 150–250ms untuk elemen kecil (tombol, chip), 300–400ms untuk transisi section/page.</li>
    <li>Scroll-reveal halus untuk tiap section (fade + translateY kecil) menggunakan <code>IntersectionObserver</code> di JS — bagus juga sebagai latihan JavaScript.</li>
    <li>Hover state pada card: elevasi naik 1 level + sedikit scale (1.02).</li>
    <li>Video player: transisi smooth antara poster image dan video saat play ditekan.</li>
  </ul>
  <hr>

  <h2>8. Aksesibilitas</h2>
  <ul>
    <li>Kontras warna teks vs background minimal rasio 4.5:1 (cek dengan tonal palette M3 yang sudah dirancang AA-compliant).</li>
    <li>Semua tombol/ikon punya <code>aria-label</code>.</li>
    <li>Video punya kontrol keyboard (space = play/pause, arrow = seek) dan idealnya caption/subtitle jika ada dialog/narasi.</li>
    <li>Fokus state jelas terlihat (outline primary color) untuk navigasi keyboard.</li>
  </ul>
  <hr>

  <h2>9. Contoh Struktur Halaman (Wireframe Deskriptif)</h2>
  <pre><code>[Navbar sticky: Porto Zilla | Demo Reel |Resume | About | 🌙]

[Hero]
  Nama Besar
  "3D Animator"
  Value proposition 1 kalimat
  [Watch Demo Reel] [Download Resume]

[Demo Reel] - full width, elevated card besar
  Video player custom

[Resume]
  Bento Grid Responsif berisi, Nama, e-mail, Nomor, Alamat, Pendidikan Terakhir, Magang Terakhir, dan Software yang dikuasai.
  [Download PDF]

[About Me]
  Foto + cerita singkat + rencana jangka pendek, menengah, dan panjang. Link new tab media social Youtube, Instagram, Tiktok, X, dan Facebook.
</code></pre>

  <h2>10. Catatan Implementasi (untuk fase belajar HTML/CSS/JS)</h2>
  <ol>
    <li>Mulai dari HTML semantik dulu (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>) sebelum styling - ini melatih struktur konten yang benar.</li>
    <li>Set CSS Custom Properties (design tokens M3 di atas) di <code>:root</code> paling awal, baru bangun komponen satu per satu.</li>
    <li>JavaScript dipakai untuk: toggle dark/light mode, custom video controls, seek-to-timestamp dari shot breakdown, scroll-reveal animation, dan sticky navbar behavior.</li>
    <li>Uji di Chrome DevTools mode responsif sejak awal, jangan tunggu semua section selesai baru dicek mobile-nya.</li>
  </ol>
</body>
</html>
