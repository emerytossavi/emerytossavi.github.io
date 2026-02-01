<template>
  <section id="skills" class="py-20 bg-[#0d1117]">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 font-['Fira_Code']">
        <span class="text-cyan-400">&lt;</span>
        Compétences
        <span class="text-cyan-400">/&gt;</span>
      </h2>

      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Backend & Security Skills -->
        <div class="bg-[#1a1a1a] p-8 rounded-lg border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300">
          <div class="flex items-center mb-6">
            <i class="fas fa-server text-cyan-400 text-3xl mr-4"></i>
            <h3 class="text-2xl font-bold text-cyan-400 font-['Fira_Code']">Backend & Sécurité</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="skill in backendSkills" :key="skill" class="flex items-start">
              <i class="fas fa-code text-cyan-400 mt-1 mr-3"></i>
              <span class="text-gray-300">{{ skill }}</span>
            </li>
          </ul>
        </div>

        <!-- Frontend & Design Skills -->
        <div class="bg-[#1a1a1a] p-8 rounded-lg border-2 border-red-500/30 hover:border-red-500 transition-all duration-300">
          <div class="flex items-center mb-6">
            <i class="fas fa-palette text-red-500 text-3xl mr-4"></i>
            <h3 class="text-2xl font-bold text-red-500 font-['Fira_Code']">Frontend & Design</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="skill in frontendSkills" :key="skill" class="flex items-start">
              <i class="fas fa-paint-brush text-red-500 mt-1 mr-3"></i>
              <span class="text-gray-300">{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="mt-12 max-w-4xl mx-auto">
        <h3 class="text-2xl font-bold text-center mb-8 text-gray-300 font-['Fira_Code']">Compétences transversales</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <span 
            v-for="skill in skills.soft" 
            :key="skill"
            class="px-6 py-3 bg-[#1a1a1a] border border-gray-600 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  skills: {
    type: Object,
    required: true
  }
})

// Backend skills are tech-focused
const backendSkills = computed(() => {
  return [
    'Télécommunication',
    'Systèmes d\'exploitation',
    'Sécurité des applications',
    'Déploiement',
    'Gestion de projets'
  ]
})

// Frontend skills would include UI/UX related
const frontendSkills = computed(() => {
  return [
    'Développement d\'interfaces',
    'Expérience utilisateur (UX)',
    'Design responsive',
    'Accessibilité web',
    'Performance frontend'
  ]
})
</script>
