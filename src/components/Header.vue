<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/95 backdrop-blur-sm border-b border-cyan-500/20">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <a href="#home" class="text-xl font-bold font-['Fira_Code'] text-cyan-400 hover:text-red-500 transition-colors">
          &lt;ET /&gt;
        </a>
        
        <ul class="hidden md:flex space-x-8">
          <li v-for="item in navItems" :key="item.id">
            <a 
              :href="`#${item.id}`" 
              class="text-gray-400 hover:text-cyan-400 transition-colors font-['Inter']"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <button 
          @click="toggleMobileMenu" 
          class="md:hidden text-cyan-400 hover:text-red-500 transition-colors"
        >
          <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-2xl"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <ul class="flex flex-col space-y-3">
          <li v-for="item in navItems" :key="item.id">
            <a 
              :href="`#${item.id}`" 
              @click="toggleMobileMenu"
              class="block text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Expérience' },
  { id: 'education', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
