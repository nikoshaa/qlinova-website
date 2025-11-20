<template>
  <header
    class="fixed inset-x-0 top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-100 transition-transform duration-300"
    :class="isVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    <nav
      class="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4"
    >
      <!-- LOGO -->
      <a href="#home" class="flex items-center h-full">
        <img
          src="/qlinova-logo.png"
          alt="Qlinova Logo"
          class="h-14 md:h-20 w-auto object-contain"
        />
      </a>

      <!-- MOBILE TOGGLE BUTTON -->
      <button
        @click="toggleMenu"
        class="md:hidden text-slate-700 text-2xl focus:outline-none"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <!-- MENU DESKTOP -->
      <div
        class="hidden md:flex items-center gap-7 text-[15px] md:text-[17px] font-medium"
      >
        <a href="#home" class="hover:text-emerald-600 transition">Home</a>
        <a href="#about" class="hover:text-emerald-600 transition">About</a>
        <a href="#features" class="hover:text-emerald-600 transition">Fitur</a>
        <a href="#benefits" class="hover:text-emerald-600 transition">Benefit</a>
        <a href="#testimonials" class="hover:text-emerald-600 transition"
          >Testimoni</a
        >
        <a href="#timeline" class="hover:text-emerald-600 transition">Timeline</a>
        <a href="#pricing" class="hover:text-emerald-600 transition">Pricing</a>
        <a href="#contact" class="hover:text-emerald-600 transition">Kontak</a>
      </div>

      <!-- CTA DESKTOP -->
      <a
        href="#contact"
        class="hidden md:inline-flex items-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-emerald-600 transition"
      >
        Coba Demo Gratis
      </a>
    </nav>

    <!-- MOBILE MENU -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-white/95 backdrop-blur border-b border-slate-100 px-4 py-4 space-y-3 text-base font-medium text-slate-800"
      >
        <a @click="closeMenu" href="#home" class="block hover:text-emerald-600"
          >Home</a
        >
        <a @click="closeMenu" href="#about" class="block hover:text-emerald-600"
          >About</a
        >
        <a @click="closeMenu" href="#features" class="block hover:text-emerald-600"
          >Fitur</a
        >
        <a @click="closeMenu" href="#benefits" class="block hover:text-emerald-600"
          >Benefit</a
        >
        <a
          @click="closeMenu"
          href="#testimonials"
          class="block hover:text-emerald-600"
          >Testimoni</a
        >
        <a @click="closeMenu" href="#timeline" class="block hover:text-emerald-600"
          >Timeline</a
        >
        <a @click="closeMenu" href="#pricing" class="block hover:text-emerald-600"
          >Pricing</a
        >
        <a @click="closeMenu" href="#contact" class="block hover:text-emerald-600"
          >Kontak</a
        >

        <!-- CTA Mobile -->
        <a
          href="#contact"
          class="block text-center rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold hover:bg-emerald-600 transition"
        >
          Coba Demo Gratis
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const isVisible = ref(true)
const lastScrollY = ref(0)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  // kalau menu dibuka, paksa navbar selalu kelihatan
  if (isOpen.value) {
    isVisible.value = true
  }
}

const closeMenu = () => {
  isOpen.value = false
}

const handleScroll = () => {
  if (typeof window === 'undefined') return

  const currentY = window.scrollY || window.pageYOffset
  const diff = currentY - lastScrollY.value

  // Di paling atas, selalu tampil
  if (currentY <= 0) {
    isVisible.value = true
  } else {
    // Scroll turun cukup jauh & menu mobile tidak sedang dibuka
    if (diff > 5 && !isOpen.value) {
      isVisible.value = false
    }
    // Scroll naik → tampil lagi
    else if (diff < -5) {
      isVisible.value = true
    }
  }

  lastScrollY.value = currentY
}

onMounted(() => {
  if (typeof window === 'undefined') return
  lastScrollY.value = window.scrollY || window.pageYOffset
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (typeof window === 'undefined') return
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
