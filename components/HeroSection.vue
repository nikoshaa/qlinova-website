<template>
  <section
    id="home"
    class="relative bg-gradient-to-b from-emerald-50 to-slate-50 border-b border-slate-100"
  >
    <div
      class="max-w-6xl mx-auto px-4 py-14 md:py-24 grid md:grid-cols-2 gap-12 items-center"
    >
      <!-- LEFT -->
      <div>
        <span
          class="inline-flex items-center gap-2 rounded-full bg-white border border-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm mb-4"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block"></span>
          Aplikasi Manajemen Klinik & Rekam Medis
        </span>

        <h1
          class="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-4"
        >
          Digitalisasi layanan klinik,
          <span class="text-emerald-600">semudah satu sentuhan.</span>
        </h1>

        <p class="text-base md:text-lg text-slate-600 mb-6 max-w-xl">
          Qlinova membantu klinik mengelola pendaftaran, antrian, rekam medis
          elektronik, farmasi, hingga laporan keuangan dalam satu sistem
          terintegrasi — tanpa perlu repot mengurus teknis IT.
        </p>

        <div class="flex flex-wrap items-center gap-3 mb-8">
          <a
            href="#contact"
            class="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-600 transition"
          >
            Coba Demo Gratis
          </a>
          <a
            href="#features"
            class="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition"
          >
            Lihat Fitur Lengkap
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-6 text-sm text-slate-500">
          <div>
            <p class="font-semibold text-slate-800 text-base">
              3–5 menit lebih cepat
            </p>
            <p>rata-rata waktu pelayanan per pasien</p>
          </div>
          <div class="h-8 w-px bg-slate-200 hidden md:block"></div>
          <div>
            <p class="font-semibold text-slate-800 text-base">
              Klaim & laporan rapi
            </p>
            <p>minim miss dan kehilangan pendapatan</p>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="relative md:justify-self-end max-w-[520px] w-full">
        <div class="absolute -top-8 -right-6 h-40 w-40 rounded-full bg-emerald-100 blur-3xl"></div>
        <div class="absolute -bottom-10 -left-4 h-32 w-32 rounded-full bg-sky-100 blur-3xl"></div>

        <div
          class="relative rounded-3xl bg-white border border-slate-100 shadow-xl shadow-emerald-100/60 p-5 md:p-6"
        >
          <p class="text-sm font-medium text-slate-500 mb-4">
            Ringkasan Klinik Hari Ini
          </p>

          <div class="grid grid-cols-3 gap-3 mb-6 text-sm">
            <div class="rounded-xl bg-emerald-50 p-3 border border-emerald-100">
              <p class="text-slate-500 mb-1 text-sm">Kunjungan</p>
              <p class="text-xl font-semibold text-emerald-700">124</p>
              <p class="text-xs text-emerald-700/80">+18% vs kemarin</p>
            </div>
            <div class="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <p class="text-slate-500 mb-1 text-sm">Rata waktu layanan</p>
              <p class="text-xl font-semibold text-slate-900">15'</p>
              <p class="text-xs text-slate-500">per pasien</p>
            </div>
            <div class="rounded-xl bg-sky-50 p-3 border border-sky-100">
              <p class="text-slate-500 mb-1 text-sm">Klaim sukses</p>
              <p class="text-xl font-semibold text-sky-700">98%</p>
              <p class="text-xs text-sky-700/80">BPJS & penjamin</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 items-end">
            <!-- Mini dashboard -->
            <div
              class="rounded-2xl border border-slate-100 bg-slate-50 p-3 flex flex-col gap-2"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs text-slate-500">Antrian Poli</span>
                <span
                  class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                  >Live</span
                >
              </div>
              <div class="space-y-1.5 text-xs">
                <div class="flex justify-between">
                  <span>Umum</span>
                  <span class="font-semibold text-slate-800">23</span>
                </div>
                <div class="flex justify-between">
                  <span>Gigi</span>
                  <span class="font-semibold text-slate-800">11</span>
                </div>
                <div class="flex justify-between">
                  <span>Anak</span>
                  <span class="font-semibold text-slate-800">7</span>
                </div>
              </div>
            </div>

            <!-- Mobile mock -->
            <div
              class="rounded-3xl border border-slate-100 bg-white px-4 py-5 flex flex-col items-center gap-3 shadow-sm"
            >
              <div
                class="h-48 w-28 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col text-xs"
              >
                <div class="h-4 bg-emerald-500/90"></div>
                <div class="flex-1 p-2 space-y-1.5">
                  <div class="h-3 w-16 bg-slate-300 rounded"></div>
                  <div class="h-2 w-10 bg-slate-200 rounded"></div>
                  <div class="mt-2 space-y-1">
                    <div class="h-4 rounded bg-white border border-slate-200"></div>
                    <div class="h-4 rounded bg-white border border-slate-200"></div>
                    <div class="h-4 rounded bg-white border border-slate-200"></div>
                  </div>
                  <div class="mt-3 h-6 rounded-full bg-emerald-500/90"></div>
                </div>
              </div>
              <p class="text-xs text-slate-500 text-center">
                Pasien bisa daftar,<br />
                cek rekam medis & riwayat transaksi via
                <span class="font-semibold text-slate-700">mobile app</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
