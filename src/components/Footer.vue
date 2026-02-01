<template>
  <footer class="bg-[#0d1117] border-t border-cyan-500/20 py-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0 font-['Fira_Code']">
          &copy; {{ currentYear }} Emery TOSSAVI. Tous droits réservés.
        </p>
        
        <div class="flex gap-6">
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.url" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <i :class="social.icon" class="text-xl"></i>
          </a>
        </div>
      </div>
      
      <div class="mt-6 text-center">
        <p class="text-gray-500 text-xs font-['Fira_Code']">
          Conçu avec <span class="text-red-500">♥</span> en Vue.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  contact: {
    type: Object,
    required: true
  }
})

const currentYear = computed(() => new Date().getFullYear())

const socials = [
  { name: 'LinkedIn', url: props.contact.linkedin, icon: 'fab fa-linkedin-in' },
  { name: 'GitHub', url: props.contact.github, icon: 'fab fa-github' },
  { name: 'Email', url: `mailto:${props.contact.email}`, icon: 'fas fa-envelope' }
]
</script>
