<template>
  <section
    id="contact"
    class="bg-gradient-to-r from-emerald-50 to-sky-50 border-t border-slate-100 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-14 md:py-20">
      <div class="grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
        <!-- FORM -->
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Siap memulai digitalisasi klinik Anda?
          </h2>
          <p class="text-base md:text-lg text-slate-600 mb-6 max-w-xl">
            Isi data singkat di bawah, dan tim Qlinova akan menghubungi Anda untuk
            demo sistem, diskusi kebutuhan, dan penawaran yang paling sesuai.
          </p>

          <form class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <!-- Nama PIC -->
              <div>
                <label class="block text-xs md:text-sm text-slate-600 mb-1">
                  Nama PIC
                </label>
                <input
                  type="text"
                  class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Nama Anda"
                />
              </div>

              <!-- Nama Klinik -->
              <div>
                <label class="block text-xs md:text-sm text-slate-600 mb-1">
                  Nama Klinik
                </label>
                <input
                  type="text"
                  class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Contoh: Klinik Sehat Bersama"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <!-- Email -->
              <div>
                <label class="block text-xs md:text-sm text-slate-600 mb-1">
                  Email / Kontak
                </label>
                <input
                  type="email"
                  class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="email@klinik.com"
                />
              </div>

              <!-- Cabang -->
              <div>
                <label class="block text-xs md:text-sm text-slate-600 mb-1">
                  Perkiraan jumlah cabang
                </label>
                <input
                  type="number"
                  min="1"
                  class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="1, 3, 5+"
                />
              </div>
            </div>

            <!-- Catatan -->
            <div>
              <label class="block text-xs md:text-sm text-slate-600 mb-1">
                Kebutuhan singkat / catatan
              </label>
              <textarea
                rows="4"
                class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Contoh: integrasi BPJS, multi-cabang, mobile app pasien, dll."
              ></textarea>
            </div>

            <button
              type="submit"
              class="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-600 transition"
            >
              Kirim Permintaan Demo
            </button>
          </form>
        </div>

        <!-- CONTACT INFO -->
        <div
          class="rounded-2xl border border-emerald-100 bg-white p-5 md:p-6 text-base shadow-sm shadow-emerald-100"
        >
          <h3 class="font-semibold text-slate-900 mb-3">Kontak Qlinova</h3>
          <div class="space-y-1 text-slate-700 mb-3">
            <p class="font-medium">Qlinova – Clinic Management System</p>
            <p>Depok - Jawa Barat</p>
          </div>
          <div class="space-y-1 text-slate-700 mb-3">
            <!-- <p>
              WhatsApp:
              <span class="font-semibold">+62 815-8119-207</span>
            </p> -->
            <p>
              Website:
              <span class="font-semibold">qlinova.id</span>
            </p>
          </div>
          <p class="text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
            Setelah Go-Live, Qlinova menyediakan support &amp; maintenance dengan SLA
            yang jelas, sehingga sistem tetap stabil dan berkembang sesuai kebutuhan
            klinik.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
