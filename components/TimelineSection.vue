<template>
  <section
    id="timeline"
    class="bg-slate-50 border-y border-slate-100 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div
        class="mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-4"
      >
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Timeline Implementasi Qlinova
          </h2>
          <p class="text-base md:text-lg text-slate-600 max-w-xl">
            Implementasi dilakukan bertahap agar sesuai dengan proses bisnis klinik
            dan tetap nyaman bagi tim di lapangan.
          </p>
        </div>
        <p class="text-sm text-slate-500">
          Estimasi total ± 8–10 minggu (termasuk UAT &amp; pelatihan).
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Fase 01 -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs text-emerald-600 uppercase tracking-[0.16em] mb-2 font-semibold"
          >
            Fase 01
          </p>
          <h3 class="font-semibold text-slate-900 mb-1 text-base md:text-lg">
            Analysis &amp; Design
          </h3>
          <p class="text-sm text-slate-500 mb-2">1–2 minggu</p>
          <p class="text-sm md:text-base text-slate-600 leading-relaxed">
            Penggalian kebutuhan, pemetaan alur kerja, dan perancangan UI/UX
            sesuai proses klinik.
          </p>
        </div>

        <!-- Fase 02 -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs text-emerald-600 uppercase tracking-[0.16em] mb-2 font-semibold"
          >
            Fase 02
          </p>
          <h3 class="font-semibold text-slate-900 mb-1 text-base md:text-lg">
            Development
          </h3>
          <p class="text-sm text-slate-500 mb-2">4–6 minggu</p>
          <p class="text-sm md:text-base text-slate-600 leading-relaxed">
            Pembangunan fitur, integrasi modul, dan persiapan data agar siap
            digunakan tim klinik.
          </p>
        </div>

        <!-- Fase 03 -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs text-emerald-600 uppercase tracking-[0.16em] mb-2 font-semibold"
          >
            Fase 03
          </p>
          <h3 class="font-semibold text-slate-900 mb-1 text-base md:text-lg">
            Testing &amp; QA
          </h3>
          <p class="text-sm text-slate-500 mb-2">1–2 minggu</p>
          <p class="text-sm md:text-base text-slate-600 leading-relaxed">
            UAT bersama tim klinik, perbaikan bug, dan penyempurnaan flow sesuai
            kebiasaan kerja di lapangan.
          </p>
        </div>

        <!-- Fase 04 -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs text-emerald-600 uppercase tracking-[0.16em] mb-2 font-semibold"
          >
            Fase 04
          </p>
          <h3 class="font-semibold text-slate-900 mb-1 text-base md:text-lg">
            Deployment &amp; Go-Live
          </h3>
          <p class="text-sm text-slate-500 mb-2">±1 minggu</p>
          <p class="text-sm md:text-base text-slate-600 leading-relaxed">
            Go-live terarah, pendampingan on-site/online, dan serah terima
            dokumentasi sistem Qlinova.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section
    id="faq"
    class="bg-white border-t border-slate-100 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p class="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          Pertanyaan umum seputar implementasi Qlinova di berbagai klinik.
        </p>
      </div>

      <div class="space-y-4">
        <!-- Item 1 -->
        <details
          class="group rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <summary
            class="flex cursor-pointer items-center justify-between text-slate-900 font-medium text-base md:text-lg"
          >
            Berapa lama implementasi Qlinova?
            <span class="text-slate-400 group-open:rotate-180 transition">
              ▼
            </span>
          </summary>
          <p
            class="mt-3 text-slate-600 text-base md:text-lg leading-relaxed"
          >
            Rata-rata implementasi membutuhkan 8–10 minggu termasuk analisis,
            pengembangan modul, UAT, pelatihan, dan go-live.
          </p>
        </details>

        <!-- Item 2 -->
        <details
          class="group rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <summary
            class="flex cursor-pointer items-center justify-between text-slate-900 font-medium text-base md:text-lg"
          >
            Apakah Qlinova bisa digunakan untuk klinik multi-cabang?
            <span class="text-slate-400 group-open:rotate-180 transition">
              ▼
            </span>
          </summary>
          <p
            class="mt-3 text-slate-600 text-base md:text-lg leading-relaxed"
          >
            Bisa. Qlinova memiliki arsitektur yang mendukung multi-cabang,
            termasuk kontrol harga, stok terpusat, dan laporan gabungan seluruh
            cabang.
          </p>
        </details>

        <!-- Item 3 -->
        <details
          class="group rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <summary
            class="flex cursor-pointer items-center justify-between text-slate-900 font-medium text-base md:text-lg"
          >
            Bagaimana proses training untuk tim klinik?
            <span class="text-slate-400 group-open:rotate-180 transition">
              ▼
            </span>
          </summary>
          <p
            class="mt-3 text-slate-600 text-base md:text-lg leading-relaxed"
          >
            Qlinova menyediakan pelatihan onsite atau online untuk admin, front
            office, perawat, dokter, dan kasir. Materi dibuat sesuai alur kerja
            masing-masing klinik.
          </p>
        </details>

        <!-- Item 4 -->
        <details
          class="group rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <summary
            class="flex cursor-pointer items-center justify-between text-slate-900 font-medium text-base md:text-lg"
          >
            Apakah Qlinova terintegrasi BPJS?
            <span class="text-slate-400 group-open:rotate-180 transition">
              ▼
            </span>
          </summary>
          <p
            class="mt-3 text-slate-600 text-base md:text-lg leading-relaxed"
          >
            Ya. Qlinova mendukung bridging BPJS untuk SEP, antrian, kunjungan,
            diagnosa, dan laporan sesuai ketentuan BPJS Kesehatan.
          </p>
        </details>

        <!-- Item 5 -->
        <details
          class="group rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <summary
            class="flex cursor-pointer items-center justify-between text-slate-900 font-medium text-base md:text-lg"
          >
            Bagaimana dukungan setelah Go-Live?
            <span class="text-slate-400 group-open:rotate-180 transition">
              ▼
            </span>
          </summary>
          <p
            class="mt-3 text-slate-600 text-base md:text-lg leading-relaxed"
          >
            Qlinova menyediakan support &amp; maintenance dengan SLA jelas,
            termasuk perbaikan bug, update fitur, dan pendampingan lanjutan.
          </p>
        </details>

        <!-- Item 6 -->
        <details
          class="group rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <summary
            class="flex cursor-pointer items-center justify-between text-slate-900 font-medium text-base md:text-lg"
          >
            Apakah data klinik aman?
            <span class="text-slate-400 group-open:rotate-180 transition">
              ▼
            </span>
          </summary>
          <p
            class="mt-3 text-slate-600 text-base md:text-lg leading-relaxed"
          >
            Qlinova menerapkan enkripsi, audit trail, akses berbasis role,
            serta backup berkala untuk menjaga keamanan dan integritas data
            klinik.
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
