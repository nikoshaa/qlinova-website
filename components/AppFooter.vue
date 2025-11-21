<template>
  <footer class="bg-slate-950 text-slate-400 border-t border-slate-800 pt-14">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">

      <!-- BRAND -->
      <div>
        <img
          src="/qlinova-logo.png"
          alt="Qlinova Logo"
          class="h-20 w-auto mb-4"
        />
        <p class="text-base leading-relaxed text-slate-500 max-w-xs">
          Qlinova membantu klinik mengelola operasional, pelayanan medis, dan laporan manajemen
          dengan sistem yang terintegrasi dan mudah digunakan.
        </p>
      </div>

      <!-- QUICK LINKS -->
      <div>
        <h3 class="text-base md:text-lg font-semibold text-white mb-4">Menu</h3>
        <ul class="space-y-2 text-base md:text-[17px]">
          <li><a href="#about" class="hover:text-white transition">About</a></li>
          <li><a href="#features" class="hover:text-white transition">Fitur</a></li>
          <li><a href="#benefits" class="hover:text-white transition">Benefit</a></li>
          <li><a href="#timeline" class="hover:text-white transition">Timeline</a></li>
          <li><a href="#pricing" class="hover:text-white transition">Pricing</a></li>
          <li><a href="#faq" class="hover:text-white transition">FAQ</a></li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div>
        <h3 class="text-base md:text-lg font-semibold text-white mb-4">Kontak</h3>
        <ul class="space-y-2 text-base md:text-[17px]">
          <!-- <li>
            WhatsApp:
            <span class="text-white font-medium">+62 815-8119-207</span>
          </li> -->
          <li>
            Email:
            <span class="text-white font-medium">support@qlinova.id</span>
          </li>
          <li>
            Website:
            <span class="text-white font-medium">qlinova.id</span>
          </li>
          <li>Alamat: Depok – Jawa Barat</li>
        </ul>
      </div>

    </div>

    <!-- COPYRIGHT -->
    <div class="border-t border-slate-800 mt-12 py-5">
      <div
        class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm md:text-base text-slate-500"
      >
        <p>© {{ year }} Qlinova. All rights reserved.</p>
        <p>Clinic Management System – Powered by qlinova.id</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
