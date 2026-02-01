<script setup>
import { ref, onMounted } from 'vue'
import { getCVData } from './services/cvService'

import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import TechnologiesSection from './components/TechnologiesSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

const cvData = ref(null)

onMounted(() => {
  cvData.value = getCVData()
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})
</script>

<template>
  <div v-if="cvData" class="min-h-screen">
    <Header />
    <main>
      <HeroSection :personalInfo="cvData.personalInfo" />
      <SkillsSection :skills="cvData.skills" />
      <TechnologiesSection :technologies="cvData.technologies" />
      <ProjectsSection :experiences="cvData.experiences" />
      <ExperienceSection :experiences="cvData.experiences" />
      <EducationSection :education="cvData.education" />
      <ContactSection 
        :contact="cvData.personalInfo.contact"
        :languages="cvData.languages"
        :interests="cvData.interests"
      />
    </main>
    <Footer :contact="cvData.personalInfo.contact" />
  </div>
  <div v-else class="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
    <div class="text-center">
      <i class="fas fa-spinner fa-spin text-cyan-400 text-4xl mb-4"></i>
      <p class="text-gray-300 font-['Fira_Code']">Chargement...</p>
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
