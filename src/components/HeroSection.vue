<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <!-- Background grid effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0d1117] to-[#1a1a1a]">
      <div class="absolute inset-0 opacity-10" 
           style="background-image: linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px); background-size: 50px 50px;">
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
          <h1 class="text-5xl md:text-7xl font-bold mb-4 font-['Fira_Code']">
            <span class="text-gray-300">{{ personalInfo.name }}</span>
          </h1>
          <div class="text-2xl md:text-4xl font-['Fira_Code'] mb-6">
            <span class="text-cyan-400">{{ role1 }}</span>
            <span class="text-red-500 animate-pulse">{{ cursor }}</span>
          </div>
          <div class="text-xl md:text-2xl font-['Fira_Code'] text-gray-400">
            <span>{{ role2 }}</span>
          </div>
        </div>

        <p class="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-['Inter']">
          {{ personalInfo.bio }}
        </p>

        <div class="flex justify-center gap-6 mb-12">
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.url" 
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#1a1a1a] transition-all duration-300"
          >
            <i :class="social.icon" class="text-xl"></i>
          </a>
        </div>

        <div class="flex justify-center gap-4 flex-wrap">
          <a 
            href="#contact" 
            class="px-8 py-3 bg-red-500 text-white font-['Fira_Code'] rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            Me contacter
          </a>
          <a 
            href="#projects" 
            class="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-['Fira_Code'] rounded-lg hover:bg-cyan-400 hover:text-[#1a1a1a] transition-all duration-300 transform hover:scale-105"
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <i class="fas fa-chevron-down text-cyan-400 text-2xl"></i>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  personalInfo: {
    type: Object,
    required: true
  }
})

const role1 = ref('Développeur Fullstack')
const role2 = ref('& Analyste en sécurité')
const cursor = ref('|')

const socials = [
  { name: 'LinkedIn', url: props.personalInfo.contact.linkedin, icon: 'fab fa-linkedin-in' },
  { name: 'GitHub', url: props.personalInfo.contact.github, icon: 'fab fa-github' },
  { name: 'Email', url: `mailto:${props.personalInfo.contact.email}`, icon: 'fas fa-envelope' },
  { name: 'Phone', url: `tel:${props.personalInfo.contact.phone}`, icon: 'fas fa-phone' }
]

let cursorInterval

onMounted(() => {
  cursorInterval = setInterval(() => {
    cursor.value = cursor.value === '|' ? '' : '|'
  }, 530)
})

onUnmounted(() => {
  if (cursorInterval) {
    clearInterval(cursorInterval)
  }
})
</script>
