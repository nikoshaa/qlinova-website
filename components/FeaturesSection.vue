<template>
  <section
    id="features"
    class="bg-slate-50 border-t border-b border-slate-100 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div class="text-center mb-8 md:mb-10">
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          Fitur Utama Qlinova
        </h2>
        <p class="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          Seluruh proses klinik — mulai dari pasien datang hingga laporan keuangan —
          berjalan dalam satu sistem yang saling terhubung.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-5 gap-y-6 text-base">
        <!-- 1. Front Desk -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs font-semibold text-emerald-600 tracking-[0.16em] uppercase mb-2"
          >
            Front Desk
          </p>
          <h3 class="font-semibold text-slate-900 mb-2 text-base md:text-lg">
            Registration &amp; Queue
          </h3>
          <ul class="space-y-2 text-slate-600 text-sm md:text-base">
            <li>• Booking online &amp; walk-in</li>
            <li>• Jadwal dokter &amp; poli</li>
            <li>• Pendaftaran pasien baru &amp; lama</li>
            <li>• Pengaturan cara bayar &amp; penjamin</li>
          </ul>
        </div>

        <!-- 2. Pelayanan Medis -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs font-semibold text-emerald-600 tracking-[0.16em] uppercase mb-2"
          >
            Pelayanan Medis
          </p>
          <h3 class="font-semibold text-slate-900 mb-2 text-base md:text-lg">
            Poli &amp; Tindakan
          </h3>
          <ul class="space-y-2 text-slate-600 text-sm md:text-base">
            <li>• Entry diagnosa &amp; tindakan</li>
            <li>• Penggunaan alkes &amp; prosedur</li>
            <li>• Resep obat terhubung ke farmasi</li>
            <li>• Rujukan lab, radiologi, atau rumah sakit</li>
          </ul>
        </div>

        <!-- 3. EMR -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs font-semibold text-emerald-600 tracking-[0.16em] uppercase mb-2"
          >
            EMR
          </p>
          <h3 class="font-semibold text-slate-900 mb-2 text-base md:text-lg">
            Electronic Medical Record
          </h3>
          <ul class="space-y-2 text-slate-600 text-sm md:text-base">
            <li>• Profil &amp; riwayat penyakit pasien</li>
            <li>• Alergi, operasi, imunisasi, kebiasaan</li>
            <li>• Riwayat kunjungan, lab, &amp; obat</li>
            <li>• Akses cepat untuk dokter &amp; perawat</li>
          </ul>
        </div>

        <!-- 4. Inventory & Farmasi -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs font-semibold text-emerald-600 tracking-[0.16em] uppercase mb-2"
          >
            Inventory &amp; Farmasi
          </p>
          <h3 class="font-semibold text-slate-900 mb-2 text-base md:text-lg">
            Stok &amp; Apotek
          </h3>
          <ul class="space-y-2 text-slate-600 text-sm md:text-base">
            <li>• Master obat &amp; non-obat</li>
            <li>• Request, approval, PO, receiving</li>
            <li>• Setting harga, margin, &amp; diskon</li>
            <li>• Laporan stok, mutasi, dan opname</li>
          </ul>
        </div>

        <!-- 5. Billing & Penjamin -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs font-semibold text-emerald-600 tracking-[0.16em] uppercase mb-2"
          >
            Billing &amp; Penjamin
          </p>
          <h3 class="font-semibold text-slate-900 mb-2 text-base md:text-lg">
            Keuangan Klinik
          </h3>
          <ul class="space-y-2 text-slate-600 text-sm md:text-base">
            <li>• Billing pasien tunai &amp; penjamin</li>
            <li>• Invoice &amp; rekonsiliasi ke penjamin</li>
            <li>• End-of-day closing kasir</li>
            <li>• Kontrak perusahaan &amp; plafon</li>
          </ul>
        </div>

        <!-- 6. Back Office -->
        <div
          class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 h-full"
        >
          <p
            class="text-xs font-semibold text-emerald-600 tracking-[0.16em] uppercase mb-2"
          >
            Back Office
          </p>
          <h3 class="font-semibold text-slate-900 mb-2 text-base md:text-lg">
            Accounting &amp; HRD
          </h3>
          <ul class="space-y-2 text-slate-600 text-sm md:text-base">
            <li>• Jurnal otomatis dari transaksi klinik</li>
            <li>• Payroll &amp; insentif jasa medis</li>
            <li>• Perencanaan SDM &amp; pelatihan</li>
            <li>• Laporan keuangan terpadu</li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm md:text-base"
      >
        <div class="max-w-xl">
          <p class="text-emerald-700 font-semibold mb-1 text-base md:text-lg">
            Terhubung dengan Mobile App Pasien
          </p>
          <p class="text-emerald-900/80">
            Reservasi online, riwayat kunjungan, rekam medis ringkas, dan membership
            dapat diakses pasien langsung dari aplikasi.
          </p>
        </div>
        <p class="text-emerald-900/80 md:text-right max-w-sm">
          Tingkatkan <span class="font-semibold">engagement</span> dan loyalitas
          pasien dengan layanan digital yang konsisten.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
