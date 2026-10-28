import type { Dictionary } from "./types";

export const id: Dictionary = {
  meta: {
    title: "DEV_ARCHITECT // Senior Frontend Engineer",
    description:
      "Frontend engineering kelas industri untuk startup. Arsitektur yang tahan banting. Konversi maksimal.",
  },
  site: {
    role: "Senior Frontend Engineer",
    statusBadge: "SYS.STATUS: ONLINE",
    heroHeadlineTop: "CEPAT",
    heroHeadlineHighlight: "TAHAN LAMA",
    heroHeadlineBottom: "KELAS SATU",
    heroTagline:
      "Saya membangun website dan web app yang cepat dan andal untuk startup yang ingin tahan lama, tanpa harus terlihat murahan.",
    navLinks: [
      { label: "PROYEK", href: "#projects" },
      { label: "SKILL", href: "#skills" },
      { label: "LAYANAN", href: "#services" },
      { label: "TENTANG", href: "#about" },
      { label: "TESTIMONI", href: "#benchmarks" },
    ],
  },
  cta: {
    consultation: "MULAI KONSULTASI",
    accessLogs: "LIHAT PROYEK",
    secureLink: "HUBUNGI SAYA",
  },
  about: {
    location: "Palembang, Indonesia",
    experience: "5+ Tahun",
    focus: "Full-Stack Web Dev",
    availability: "Terbuka untuk Proyek atau Pekerjaan",
    bio: "Saya membangun aplikasi web siap produksi dengan Next.js, TypeScript, dan tooling modern. Fokus pada performa, arsitektur yang rapi, dan rilis cepat.",
    labels: {
      location: "LOKASI",
      experience: "PENGALAMAN",
      focus: "FOKUS",
      availability: "KETERSEDIAAN",
    },
  },
  terminalLines: [
    "Next.js 16.2.10 (Turbopack)",
    "Compiled successfully in 2.5s",
    "Running TypeScript ...",
    "Ready in 2.7s",
  ],
  marqueeItems: [
    "PERFORMA TINGGI",
    "KEAMANAN KELAS ENTERPRISE",
    "SEO & AKSESIBILITAS OPTIMAL",
    "IMPLEMENTASI PIXEL-PERFECT",
    "ARSITEKTUR SCALABLE",
    "DEPLOY TANPA DOWNTIME",
    "DESAIN CUSTOM SESUAI KEBUTUHAN",
    "LOAD TIME SUPER CEPAT",
  ],
  sectionHeadings: {
    projects: {
      index: "01",
      label: "TARGET",
      titleTop: "ASET",
      titleBottom: "TERDEPLOY",
    },
    skills: {
      index: "02",
      label: "KEMAMPUAN",
      titleTop: "TECH",
      titleBottom: "STACK",
    },
    services: {
      index: "03",
      label: "JENIS PROYEK",
      titleTop: "YANG SAYA",
      titleBottom: "BANGUN",
    },
    certifications: {
      index: "04",
      label: "KREDENSIAL",
      titleTop: "TERVERIFIKASI",
      titleBottom: "KEAHLIAN",
    },
    benchmarks: {
      index: "05",
      label: "METRIK",
      titleTop: "BUKTI",
      titleBottom: "SOSIAL",
    },
    contact: {
      index: "06",
      label: "PERTANYAAN",
      titleTop: "AJUKAN",
      titleBottom: "PROPOSAL",
    },
    about: {
      index: "07",
      label: "OPERATOR",
      titleTop: "SISTEM",
      titleBottom: "PROFIL",
    },
  },
  projects: [
    {
      title: "Distribution Management System (DMS)",
      tagline: "ERP Distribusi BBM",
      role: "Full-Stack Architect & Lead Developer",
      objective:
        "Membangun ERP operasional bilingual untuk distribusi BBM — audit trail lengkap, inventory ledger, dan verifikasi dokumen.",
      outcomes: [
        "INVENTORY LEDGER EVENT-SOURCED",
        "VERIFIKASI DOKUMEN VIA QR",
        "RBAC DENGAN ROW-LEVEL SECURITY",
        "DISTRIBUSI EMAIL OTOMATIS",
      ],
      imageAlt: "Distribution Management System — tampilan ERP distribusi BBM",
    },
    {
      title: "Restaurant Web",
      tagline: "Platform Dining and Reservation",
      role: "Full-Stack Developer",
      objective:
        "Membangun website restoran dark-mode kelas atas untuk konsep steakhouse dan Italian dining dengan menu dinamis, promo slider, dan dukungan bilingual.",
      outcomes: [
        "MENU DINAMIS DENGAN KETERSEDIAAN HARIAN",
        "HERO SLIDER FRAMER MOTION",
        "BILINGUAL (EN/ID) DENGAN LOCALE ROUTING",
        "KONTEN & MENU BERBASIS SUPABASE",
      ],
      imageAlt: "Website restoran kelas atas dengan estetika industrial gelap",
    },
    {
      title: "Company Profile Platform",
      tagline: "Distributor BBM Industri",
      role: "Full-Stack Developer & UI Designer",
      objective:
        "Membangun website company profile bilingual untuk distributor BBM industri dengan tema dark/light, animasi motion, dan desain korporat yang bersih.",
      outcomes: [
        "DUAL-THEME (DARK/LIGHT) DENGAN CSS CUSTOM PROPERTIES",
        "BILINGUAL (EN/ID) DENGAN LOCALE ROUTING",
        "PAGE REVEAL FRAMER MOTION",
        "DESAIN KORPORAT FULLY RESPONSIVE",
        "HALAMAN STATICALLY GENERATED",
      ],
      imageAlt: "Company profile distributor BBM industri",
    },
  ],
  services: [
    {
      id: "landing-pages",
      title: "LANDING PAGE",
      description: "Halaman brand & campaign dengan konversi tinggi",
      items: [
        "LANDING PAGE PRODUK SAAS",
        "HALAMAN LAUNCH STARTUP",
        "WEBSITE EVENT / KONFERENSI",
        "WEBSITE PERSONAL BRAND",
        "COMPANY PROFILE",
      ],
    },
    {
      id: "full-stack-apps",
      title: "APLIKASI FULL-STACK",
      description: "Pengembangan aplikasi web end-to-end",
      items: [
        "DASHBOARD SAAS",
        "TOKO E-COMMERCE",
        "PLATFORM KONTEN",
        "WEB APP BERBASIS API",
        "APLIKASI E-LEARNING",
      ],
    },
  ],
  benchmarks: [
    { metric: "PROYEK", label: "SUDAH RILIS KE PRODUKSI" },
    { metric: "UPTIME", label: "SLA TERCAPAI" },
    { metric: "LCP", label: "RATA-RATA DI 4G" },
    { metric: "INP", label: "RATA-RATA DI 4G" },
  ],
  testimonials: [
    '"Merancang seluruh platform frontend kami. Dari mandek jadi GA dalam 6 minggu."',
    '"Tidak ada yang bisa memperbaiki masalah performa kami. Dia menurunkan LCP sampai 60%."',
  ],
  certifications: {
    issuedBy: "Diterbitkan oleh:",
  },
  contact: {
    fieldLabels: {
      name: "NAMA_ID",
      email: "EMAIL_ADDR",
      company: "PERUSAHAAN_ORG",
      projectType: "JENIS_PROYEK",
      budget: "RANGE_BUDGET (USD)",
      details: "DETAIL_PROYEK",
    },
    placeholders: {
      name: "MASUKKAN NAMA",
      email: "MASUKKAN EMAIL",
      company: "MASUKKAN PERUSAHAAN",
      projectType: "PILIH JENIS PROYEK",
      budget: "MASUKKAN RANGE (USD)",
      details: "JELASKAN DETAIL PROYEK",
    },
    optionOther: "LAINNYA",
    submit: "KIRIM PROPOSAL",
    submitting: "MENGIRIM...",
    validation: {
      nameRequired: "NAMA WAJIB DIISI",
      invalidEmail: "FORMAT EMAIL TIDAK VALID",
    },
    messages: {
      invalid: "VALIDASI GAGAL — PERIKSA FIELD YANG DITANDAI.",
      mailOffline: "SISTEM EMAIL OFFLINE — RESEND_API_KEY BELUM DIKONFIGURASI.",
      success: "PROPOSAL DITERIMA. RESPONS MAKSIMAL 24 JAM.",
      failurePrefix: "PENGIRIMAN GAGAL:",
    },
  },
  projectModal: {
    role: "PERAN",
    stack: "STACK",
    objective: "TUJUAN",
    output: "OUTPUT",
    scroll: "Scroll",
    close: "Tutup modal",
    previousImage: "Gambar sebelumnya",
    nextImage: "Gambar berikutnya",
    goToImage: "Ke gambar",
    closedTitle: "Detail proyek",
  },
  aria: {
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    startAutoScroll: "Mulai auto-scroll",
    stopAutoScroll: "Hentikan auto-scroll",
    viewProject: "Lihat proyek",
    highlights: "Highlight",
    heroPreview: "Preview proyek",
    profilePhoto: "Foto profil",
  },
  footer: {
    rights: "SEMUA HAK DILINDUNGI.",
  },
  language: {
    label: "Pilih bahasa",
    switchToEnglish: "Ganti bahasa ke Inggris",
    switchToIndonesian: "Ganti bahasa ke Indonesia",
  },
};
