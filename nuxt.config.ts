export default defineNuxtConfig({
  nitro: {
    preset: 'static',
  },

  app: {
    head: {
      title: "Qlinova – Clinic Management System",
      meta: [
        {
          name: "description",
          content:
            "Qlinova membantu klinik mengelola operasional, rekam medis elektronik, antrian, farmasi, dan laporan keuangan dalam satu sistem terintegrasi.",
        },
      ],
      link: [
        // Favicon utama
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        // (Opsional) favicon PNG jika kamu pakai
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },

  css: ["~/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
