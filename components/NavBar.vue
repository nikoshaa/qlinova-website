<template>
  <header
    class="fixed inset-x-0 top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-100"
  >
    <nav
      class="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4"
    >
      <!-- LOGO -->
      <a href="#home" class="flex items-center h-full">
        <img
          src="/qlinova-logo.png"
          alt="Qlinova Logo"
          class="h-18 md:h-20 w-auto object-contain"
        />
      </a>

      <!-- MENU DESKTOP -->
      <div class="hidden md:flex items-center gap-7 text-[15px] md:text-[17px] font-medium">
        <a href="#home" class="hover:text-emerald-600 transition">Home</a>
        <a href="#about" class="hover:text-emerald-600 transition">About</a>
        <a href="#features" class="hover:text-emerald-600 transition">Fitur</a>
        <a href="#benefits" class="hover:text-emerald-600 transition">Benefit</a>
        <a href="#testimonials" class="hover:text-emerald-600 transition">Testimoni</a>
        <a href="#timeline" class="hover:text-emerald-600 transition">Timeline</a>
        <a href="#pricing" class="hover:text-emerald-600 transition">Pricing</a>
        <a href="#contact" class="hover:text-emerald-600 transition">Kontak</a>
      </div>

      <!-- CTA BUTTON -->
      <a
        href="#contact"
        class="hidden md:inline-flex items-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-emerald-600 transition"
      >
        Coba Demo Gratis
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>
