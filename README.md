Kategori: Web App — News/Media Portal

# Wartara — Portal Berita Nasional

> **Kategori proyek: Web App — News/Media Portal.**
> Portal berita dengan headline utama, breaking ticker, rubrik lengkap enam
> kategori, halaman baca nyaman, dan sidebar terpopuler–cuaca–kurs.

Aplikasi media online fiktif "Wartara" — dari headline utama besar dan ticker
berita berjalan sampai halaman baca artikel dengan related news. Proyek ini
adalah **concept demo** untuk portofolio jasa pembuatan web app. **Seluruh
nama, peristiwa, dan kutipan adalah fiktif untuk keperluan demo** — Wartara
bukan media nyata dan tidak berafiliasi dengan media mana pun. Nama "Wartara"
sengaja dibuat unik (belum dipakai entitas mana pun di internet).

**Live:** https://wartara.vercel.app

## Fitur

- **Headline utama besar** + dua berita sekunder, disusun ulang otomatis dari
  artikel terbaru.
- **Breaking ticker berjalan** — marquee CSS murni, berhenti saat disentuh,
  hormati preferensi reduced-motion.
- **15 artikel fiktif lengkap** di 6 rubrik (Nasional, Ekonomi, Teknologi,
  Olahraga, Hiburan, Dunia) — masing-masing dengan lead, isi 4 paragraf,
  penulis, jam tayang, dan foto.
- **Halaman baca** nyaman: judul serif, drop cap, profil jurnalis, lama baca,
  jumlah pembaca, tombol bagikan (salin tautan + WhatsApp), dan kotak
  disclaimer fiksi.
- **Berita terkait** otomatis per artikel (prioritas satu kategori).
- **Sidebar**: Terpopuler bernomor 1–5, cuaca 5 kota (mock), kurs 4 mata
  uang (mock dengan panah naik/turun), dan Baca Nanti.
- **Pencarian** real-time ke judul, lead, isi, dan rubrik + filter kategori.
- **Baca nanti** (bookmark) tersimpan di **localStorage**.
- Responsif desktop + mobile, animasi halus Framer Motion, ikon Lucide,
  tanpa backend & tanpa API eksternal.

## Untuk siapa demo ini?

Media online, portal berita daerah, majalah digital, atau blog multi-penulis
yang butuh tampilan surat kabar modern dengan rubrik dan halaman baca yang
nyaman — cocok juga sebagai basis redaksi CMS.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4 (token tema `@theme`, heading serif Fraunces)
- Framer Motion
- Lucide Icons
- Breaking ticker CSS marquee buatan sendiri

## Menjalankan

```bash
npm install
npm run dev      # development
npm run build    # production build ke folder dist/
npm run preview  # preview hasil build
```

---

Dibuat oleh [Agni Miftah Fauzi](https://github.com/Atazyyy) — jasa pembuatan
website & web app.
